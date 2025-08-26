/** 
 * Fetch interception script that will be loaded as a web accessible resource
 * This runs in the page context and can override fetch without CSP issues
 * Enhanced with Blue Marble template overlay functionality
 * @since Chrome Extension v1.0.0
 */

(function() {
  'use strict';
  
  const originalFetch = window.fetch;
  const name = 'Blue Marble';
  const consoleStyle = 'color: cornflowerblue;';
  const blobQueue = new Map();
  
  console.log(`%c${name}%c: Setting up advanced fetch interception...`, consoleStyle, '');
  
  // Listen for blob processing messages from content script
  window.addEventListener('message', event => {
    const { source, blobID, blobData, blink } = event.data;
    
    if (Date.now(), source === 'blue-marble' && blobID && blobData && !event.data.endpoint) {
      const handler = blobQueue.get(blobID);
      if (typeof handler === 'function') {
        handler(blobData);
        blobQueue.delete(blobID);
      } else {
        console.warn(`%c${name}%c: Attempted to retrieve blob (${blobID}) but handler not found!`, consoleStyle, '');
      }
    }
  });
  
  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);
    const cloned = response.clone();
    const endpointName = ((args[0] instanceof Request) ? args[0]?.url : args[0]) || 'ignore';
    const contentType = cloned.headers.get('content-type') || '';
    
    // Handle JSON responses (including pixel API calls)
    if (contentType.includes('application/json')) {
      cloned.json()
        .then(jsonData => {
          window.postMessage({
            source: 'blue-marble',
            endpoint: endpointName,
            jsonData: jsonData
          }, '*');
        })
        .catch(err => {
          console.error(`%c${name}%c: Failed to parse JSON: `, consoleStyle, '', err);
        });
    }
    // Handle image responses (tiles) with template overlay potential
    else if (contentType.includes('image/') && !endpointName.includes('openfreemap') && !endpointName.includes('maps')) {
      const processingStartTime = Date.now();
      
      console.log(`%c${name}%c: Intercepting image request: ${endpointName}`, consoleStyle, '');
      
      try {
        const blob = await cloned.blob();
        
        // Check if this looks like a tile request based on URL patterns
        if (shouldInterceptTileRequest(endpointName)) {
          console.log(`%c${name}%c: Processing tile request: ${endpointName}`, consoleStyle, '');
          
          // Create unique blob ID for async processing
          const blobID = crypto.randomUUID();
          
          return new Promise(resolve => {
            // Store the resolver in the blob queue
            blobQueue.set(blobID, processedBlob => {
              console.log(`%c${name}%c: Received processed blob for ${endpointName}`, consoleStyle, '');
              resolve(new Response(processedBlob, {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText
              }));
            });
            
            // Send message to content script for template processing
            window.postMessage({
              source: 'blue-marble',
              endpoint: endpointName,
              blobID: blobID,
              blobData: blob,
              blink: processingStartTime
            }, '*');
          }).catch(error => {
            console.error(`%c${name}%c: Error processing tile: `, consoleStyle, '', error);
            return response; // Fallback to original
          });
        } else {
          console.log(`%c${name}%c: Image request not matching tile patterns: ${endpointName}`, consoleStyle, '');
        }
      } catch (error) {
        console.error(`%c${name}%c: Error handling image response: `, consoleStyle, '', error);
      }
    }
    
    return response;
  };
  
  /**
   * Check if a URL should be intercepted for tile processing
   * @param {string} url - The request URL
   * @returns {boolean} Whether the URL should be intercepted
   */
  function shouldInterceptTileRequest(url) {
    // Comprehensive pattern matching for different tile server formats
    const tilePatterns = [
      /tiles\/\d+\/\d+\.png$/i,        // Standard tiles/x/y.png
      /\/tiles\/\d+\/\d+$/i,           // tiles/x/y without extension  
      /\/map\/\d+\/\d+\.png$/i,        // map/x/y.png format
      /\/\d+\/\d+\/\d+\.png$/i,        // zoom/x/y.png format
      /tile\/\d+\/\d+\/\d+/i,          // tile/z/x/y format
      /api\/tiles\/\d+\/\d+/i,         // API tile endpoints
      /cdn\.wplace\.live.*\/\d+\/\d+/i, // Wplace CDN tiles
      /wplace\.live.*tiles.*\d+.*\d+/i,  // General Wplace tile pattern
      /wplace\.live.*\/tiles\/\d+\/\d+/i, // Wplace live tiles format
      /\/api\/tiles\/\d+\/\d+\/\d+/i,   // API tiles with zoom
      /tiles\/\d+\/\d+\/\d+\.png/i,     // tiles/z/x/y.png format
      /\/\d+\/\d+\.png$/i,              // Simple x/y.png at end
      /\/\d+\/\d+\.webp$/i,             // WebP tiles
      /\/\d+\/\d+\.jpg$/i,              // JPEG tiles
      /wplace\.live\/.*\/\d+\/\d+/i     // Any wplace.live with coordinates
    ];
    
    const matches = tilePatterns.some(pattern => pattern.test(url));
    console.log(`%c${name}%c: Tile pattern check for ${url}: ${matches}`, 'color: cornflowerblue;', '');
    if (!matches) {
      console.log(`%c${name}%c: URL did not match any tile patterns: ${url}`, 'color: orange;', '');
    }
    return matches;
  }
  
  console.log(`%c${name}%c: Advanced fetch interception active`, consoleStyle, '');
})();
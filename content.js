// Blue Marble Chrome Extension - Generated bundle
// This file is auto-generated - do not edit directly


// src/chromeStorage.js
var ChromeStorage = class {
  /** Gets a value from Chrome storage (replaces GM_getValue)
   * @param {string} key - Storage key
   * @param {string} defaultValue - Default value if key not found
   * @returns {Promise<string>} The stored value or default
   */
  static async getValue(key, defaultValue = "{}") {
    try {
      const result = await chrome.storage.local.get({ [key]: defaultValue });
      return result[key];
    } catch (error) {
      console.error("ChromeStorage getValue error:", error);
      return defaultValue;
    }
  }
  /** Sets a value in Chrome storage (replaces GM.setValue)
   * @param {string} key - Storage key  
   * @param {string} value - Value to store
   * @returns {Promise<void>}
   */
  static async setValue(key, value) {
    try {
      await chrome.storage.local.set({ [key]: value });
    } catch (error) {
      console.error("ChromeStorage setValue error:", error);
    }
  }
  /** Gets script info (replaces GM_info)
   * @returns {object} Script info object
   */
  static getInfo() {
    return {
      script: {
        name: "Blue Marble",
        version: "0.85.13"
      }
    };
  }
  /** Adds CSS styles (replaces GM_addStyle)
   * @param {string} css - CSS styles to add
   */
  static addStyle(css) {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }
  /** Gets resource text (replaces GM_getResourceText)
   * For Chrome extension, we'll load CSS directly
   * @param {string} resourceName - Resource name
   * @returns {string} Resource content
   */
  static getResourceText(resourceName) {
    if (resourceName === "CSS-BM-File") {
      return `/* Blue Marble Chrome Extension Styles */
#bm-overlay, #bm-overlay-telemetry {
  position: fixed;
  background-color: rgba(21, 48, 99, 0.9);
  color: white;
  padding: 10px;
  border-radius: 8px;
  z-index: 9000;
  transition: all 0.3s ease, transform 0s;
  max-width: 300px;
  width: auto;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  font-family: 'Roboto Mono', 'Courier New', 'Monaco', 'DejaVu Sans Mono', monospace, 'Arial';
  letter-spacing: 0.05em;
}

#bm-contain-userinfo,
#bm-overlay hr, #bm-overlay-telemetry hr,
#bm-contain-automation, 
#bm-contain-buttons-action {
  transition: opacity 0.2s ease, height 0.2s ease;
}

#bm-bar-drag, #bm-bar-drag-telemetry {
  margin-bottom: 0.5em;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="5" height="5"><circle cx="3" cy="3" r="1.5" fill="CornflowerBlue" /></svg>') repeat;
  cursor: grab;
  width: 100%;
  height: 1em;
}

#bm-bar-drag.dragging, #bm-bar-drag-telemetry.dragging {
  cursor: grabbing;
}

#bm-overlay img {
  display: inline-block;
  height: 2.5em;
  margin-right: 1ch;
  vertical-align: middle;
  transition: opacity 0.2s ease;
}

#bm-overlay h1, #bm-overlay-telemetry h1 {
  display: inline-block;
  font-size: x-large;
  font-weight: bold;
  vertical-align: middle;
}

.bm-help {
  border: white 1px solid;
  height: 1.5em;
  width: 1.5em;
  margin-top: 2px;
  text-align: center;
  line-height: 1em;
  padding: 0 !important;
}

#bm-button-coords {
  vertical-align: middle;
}

#bm-button-coords svg {
  width: 50%;
  margin: 0 auto;
  fill: #111;
}

#bm-contain-coords input[type="number"] {
  appearance: auto;
  -moz-appearance: textfield;
  width: 5.5ch;
  margin-left: 1ch;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 0.5ch;
  font-size: small;
}

#bm-contain-coords input[type="number"]::-webkit-outer-spin-button,
#bm-contain-coords input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#bm-contain-buttons-template {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 1ch;
}

div:has(> #bm-input-file-template) > button {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#bm-input-file-template,
input[type="file"][id*="template"] {
  display: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
  top: -9999px !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  z-index: -9999 !important;
  pointer-events: none !important;
}

#bm-output-status {
  font-size: small;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 0.5ch;
  height: 3.75em;
  width: 100%;
}

#bm-contain-buttons-action {
  display: flex;
  justify-content: space-between;
}

#bm-overlay small {
  font-size: x-small;
  color: lightgray;
}

#bm-contain-userinfo,
#bm-contain-automation,
#bm-contain-coords,
#bm-contain-buttons-template,
div:has(> #bm-input-file-template),
#bm-output-status {
  margin-top: 0.5em;
}

#bm-overlay button, #bm-overlay-telemetry button {
  background-color: #144eb9;
  border-radius: 1em;
  padding: 0 0.75ch;
  border: none;
  color: white;
  cursor: pointer;
}

#bm-overlay button:hover, #bm-overlay button:focus-visible, #bm-overlay-telemetry button:hover, #bm-overlay-telemetry button:focus-visible {
  background-color: #1061e5;
}

#bm-overlay button:active, #bm-overlay-telemetry button:active {
  background-color: #2e97ff;
}

#bm-overlay button:disabled, #bm-overlay-telemetry button:disabled {
  background-color: #2e97ff;
  text-decoration: line-through;
}`;
    }
    return "";
  }
  /** Sends HTTP request (replaces GM_xmlhttpRequest)
   * @param {object} options - Request options
   */
  static xmlhttpRequest(options) {
    fetch(options.url, {
      method: options.method || "GET",
      headers: options.headers || {},
      body: options.data || void 0
    }).then((response) => {
      const result = {
        status: response.status,
        statusText: response.statusText,
        responseText: "",
        response
      };
      if (response.ok) {
        response.text().then((text) => {
          result.responseText = text;
          if (options.onload) options.onload(result);
        });
      } else {
        if (options.onerror) options.onerror(result);
      }
    }).catch((error) => {
      if (options.onerror) options.onerror(error);
    });
  }
};
if (typeof window !== "undefined") {
  window.GM_info = ChromeStorage.getInfo();
  window.GM_getValue = (key, defaultValue) => {
    console.warn("GM_getValue called synchronously, returning default value. Use await GM.getValue() instead.");
    return defaultValue;
  };
  window.GM_addStyle = ChromeStorage.addStyle;
  window.GM_getResourceText = ChromeStorage.getResourceText;
  window.GM_xmlhttpRequest = ChromeStorage.xmlhttpRequest;
  window.GM = {
    setValue: ChromeStorage.setValue,
    getValue: ChromeStorage.getValue
  };
} else {
  globalThis.GM_info = ChromeStorage.getInfo();
  globalThis.GM_getValue = () => "{}";
  globalThis.GM_addStyle = () => {
  };
  globalThis.GM_getResourceText = () => "";
  globalThis.GM_xmlhttpRequest = () => {
  };
  globalThis.GM = {
    setValue: async () => {
    },
    getValue: async () => "{}"
  };
}

// src/Overlay.js
var Overlay = class {
  /** Constructor for the Overlay class.
   * @param {string} name - The name of the userscript
   * @param {string} version - The version of the userscript
   * @since 0.0.2
   * @see {@link Overlay}
   */
  constructor(name2, version2) {
    this.name = name2;
    this.version = version2;
    this.apiManager = null;
    this.outputStatusId = "bm-output-status";
    this.overlay = null;
    this.currentParent = null;
    this.parentStack = [];
  }
  /** Populates the apiManager variable with the apiManager class.
   * @param {apiManager} apiManager - The apiManager class instance
   * @since 0.41.4
   */
  setApiManager(apiManager2) {
    this.apiManager = apiManager2;
  }
  /** Creates an element.
   * For **internal use** of the {@link Overlay} class.
   * @param {string} tag - The tag name as a string.
   * @param {Object.<string, any>} [properties={}] - The DOM properties of the element.
   * @returns {HTMLElement} HTML Element
   * @since 0.43.2
   */
  #createElement(tag, properties = {}, additionalProperties = {}) {
    var _a2;
    const element = document.createElement(tag);
    if (!this.overlay) {
      this.overlay = element;
      this.currentParent = element;
    } else {
      (_a2 = this.currentParent) == null ? void 0 : _a2.appendChild(element);
      this.parentStack.push(this.currentParent);
      this.currentParent = element;
    }
    for (const [property, value] of Object.entries(properties)) {
      element[property] = value;
    }
    for (const [property, value] of Object.entries(additionalProperties)) {
      element[property] = value;
    }
    return element;
  }
  /** Finishes building an element.
   * Call this after you are finished adding children.
   * If the element will have no children, call it anyways.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.2
   * @example
   * overlay
   *   .addDiv()
   *     .addHeader(1).buildElement() // Breaks out of the <h1>
   *     .addP().buildElement() // Breaks out of the <p>
   *   .buildElement() // Breaks out of the <div>
   *   .addHr() // Since there are no more elements, calling buildElement() is optional
   * .buildOverlay(document.body);
   */
  buildElement() {
    if (this.parentStack.length > 0) {
      this.currentParent = this.parentStack.pop();
    }
    return this;
  }
  /** Finishes building the overlay and displays it.
   * Call this when you are done chaining methods.
   * @param {HTMLElement} parent - The parent HTMLElement this overlay should be appended to as a child.
   * @since 0.43.2
   * @example
   * overlay
   *   .addDiv()
   *     .addP().buildElement()
   *   .buildElement()
   * .buildOverlay(document.body); // Adds DOM structure to document body
   * // <div><p></p></div>
   */
  buildOverlay(parent) {
    parent == null ? void 0 : parent.appendChild(this.overlay);
    this.overlay = null;
    this.currentParent = null;
    this.parentStack = [];
  }
  /** Adds a `div` to the overlay.
   * This `div` element will have properties shared between all `div` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `div` that are NOT shared between all overlay `div` elements. These should be camelCase.
   * @param {function(Overlay, HTMLDivElement):void} [callback=()=>{}] - Additional JS modification to the `div`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.2
   * @example
   * // Assume all <div> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addDiv({'id': 'foo'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <div id="foo" class="bar"></div>
   * </body>
   */
  addDiv(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const div = this.#createElement("div", properties, additionalProperties);
    callback(this, div);
    return this;
  }
  /** Adds a `p` to the overlay.
   * This `p` element will have properties shared between all `p` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `p` that are NOT shared between all overlay `p` elements. These should be camelCase.
   * @param {function(Overlay, HTMLParagraphElement):void} [callback=()=>{}] - Additional JS modification to the `p`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.2
   * @example
   * // Assume all <p> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addP({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <p id="foo" class="bar">Foobar.</p>
   * </body>
   */
  addP(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const p = this.#createElement("p", properties, additionalProperties);
    callback(this, p);
    return this;
  }
  /** Adds a `small` to the overlay.
   * This `small` element will have properties shared between all `small` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `small` that are NOT shared between all overlay `small` elements. These should be camelCase.
   * @param {function(Overlay, HTMLParagraphElement):void} [callback=()=>{}] - Additional JS modification to the `small`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.55.8
   * @example
   * // Assume all <small> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addSmall({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <small id="foo" class="bar">Foobar.</small>
   * </body>
   */
  addSmall(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const small = this.#createElement("small", properties, additionalProperties);
    callback(this, small);
    return this;
  }
  /** Adds a `img` to the overlay.
   * This `img` element will have properties shared between all `img` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `img` that are NOT shared between all overlay `img` elements. These should be camelCase.
   * @param {function(Overlay, HTMLImageElement):void} [callback=()=>{}] - Additional JS modification to the `img`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.2
   * @example
   * // Assume all <img> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addimg({'id': 'foo', 'src': './img.png'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <img id="foo" src="./img.png" class="bar">
   * </body>
   */
  addImg(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const img = this.#createElement("img", properties, additionalProperties);
    callback(this, img);
    return this;
  }
  /** Adds a header to the overlay.
   * This header element will have properties shared between all header elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {number} level - The header level. Must be between 1 and 6 (inclusive)
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the header that are NOT shared between all overlay header elements. These should be camelCase.
   * @param {function(Overlay, HTMLHeadingElement):void} [callback=()=>{}] - Additional JS modification to the header.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.7
   * @example
   * // Assume all header elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addHeader(6, {'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <h6 id="foo" class="bar">Foobar.</h6>
   * </body>
   */
  addHeader(level, additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const header = this.#createElement("h" + level, properties, additionalProperties);
    callback(this, header);
    return this;
  }
  /** Adds a `hr` to the overlay.
   * This `hr` element will have properties shared between all `hr` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `hr` that are NOT shared between all overlay `hr` elements. These should be camelCase.
   * @param {function(Overlay, HTMLHRElement):void} [callback=()=>{}] - Additional JS modification to the `hr`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.7
   * @example
   * // Assume all <hr> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addhr({'id': 'foo'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <hr id="foo" class="bar">
   * </body>
   */
  addHr(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const hr = this.#createElement("hr", properties, additionalProperties);
    callback(this, hr);
    return this;
  }
  /** Adds a `br` to the overlay.
   * This `br` element will have properties shared between all `br` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `br` that are NOT shared between all overlay `br` elements. These should be camelCase.
   * @param {function(Overlay, HTMLBRElement):void} [callback=()=>{}] - Additional JS modification to the `br`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.11
   * @example
   * // Assume all <br> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addbr({'id': 'foo'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <br id="foo" class="bar">
   * </body>
   */
  addBr(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const br = this.#createElement("br", properties, additionalProperties);
    callback(this, br);
    return this;
  }
  /** Adds a checkbox to the overlay.
   * This checkbox element will have properties shared between all checkbox elements in the overlay.
   * You can override the shared properties by using a callback. Note: the checkbox element is inside a label element.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the checkbox that are NOT shared between all overlay checkbox elements. These should be camelCase.
   * @param {function(Overlay, HTMLLabelElement, HTMLInputElement):void} [callback=()=>{}] - Additional JS modification to the checkbox.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.10
   * @example
   * // Assume all checkbox elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addCheckbox({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <label>
   *     <input type="checkbox" id="foo" class="bar">
   *     "Foobar."
   *   </label>
   * </body>
   */
  addCheckbox(additionalProperties = {}, callback = () => {
  }) {
    const properties = { "type": "checkbox" };
    const label = this.#createElement("label", { "textContent": additionalProperties["textContent"] ?? "" });
    delete additionalProperties["textContent"];
    const checkbox = this.#createElement("input", properties, additionalProperties);
    label.insertBefore(checkbox, label.firstChild);
    this.buildElement();
    callback(this, label, checkbox);
    return this;
  }
  /** Adds a `button` to the overlay.
   * This `button` element will have properties shared between all `button` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `button` that are NOT shared between all overlay `button` elements. These should be camelCase.
   * @param {function(Overlay, HTMLButtonElement):void} [callback=()=>{}] - Additional JS modification to the `button`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.12
   * @example
   * // Assume all <button> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addButton({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <button id="foo" class="bar">Foobar.</button>
   * </body>
   */
  addButton(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const button = this.#createElement("button", properties, additionalProperties);
    callback(this, button);
    return this;
  }
  /** Adds a help button to the overlay. It will have a "?" icon unless overridden in callback.
   * On click, the button will attempt to output the title to the output element (ID defined in Overlay constructor).
   * This `button` element will have properties shared between all `button` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `button` that are NOT shared between all overlay `button` elements. These should be camelCase.
   * @param {function(Overlay, HTMLButtonElement):void} [callback=()=>{}] - Additional JS modification to the `button`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.12
   * @example
   * // Assume all help button elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addButtonHelp({'id': 'foo', 'title': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <button id="foo" class="bar" title="Help: Foobar.">?</button>
   * </body>
   * @example
   * // Assume all help button elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addButtonHelp({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <button id="foo" class="bar" title="Help: Foobar.">?</button>
   * </body>
   */
  addButtonHelp(additionalProperties = {}, callback = () => {
  }) {
    const tooltip = additionalProperties["title"] ?? additionalProperties["textContent"] ?? "Help: No info";
    delete additionalProperties["textContent"];
    additionalProperties["title"] = `Help: ${tooltip}`;
    const properties = {
      "textContent": "?",
      "className": "bm-help",
      "onclick": () => {
        this.updateInnerHTML(this.outputStatusId, tooltip);
      }
    };
    const help = this.#createElement("button", properties, additionalProperties);
    callback(this, help);
    return this;
  }
  /** Adds a `input` to the overlay.
   * This `input` element will have properties shared between all `input` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `input` that are NOT shared between all overlay `input` elements. These should be camelCase.
   * @param {function(Overlay, HTMLInputElement):void} [callback=()=>{}] - Additional JS modification to the `input`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.13
   * @example
   * // Assume all <input> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addInput({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <input id="foo" class="bar">Foobar.</input>
   * </body>
   */
  addInput(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const input = this.#createElement("input", properties, additionalProperties);
    callback(this, input);
    return this;
  }
  /** Adds a file input to the overlay with enhanced visibility controls.
   * This input element will have properties shared between all file input elements in the overlay.
   * Uses multiple hiding methods to prevent browser native text from appearing during minimize/maximize.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the file input that are NOT shared between all overlay file input elements. These should be camelCase.
   * @param {function(Overlay, HTMLDivElement, HTMLInputElement, HTMLButtonElement):void} [callback=()=>{}] - Additional JS modification to the file input.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.17
   * @example
   * // Assume all file input elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addInputFile({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <div>
   *     <input type="file" id="foo" class="bar" style="display: none"></input>
   *     <button>Foobar.</button>
   *   </div>
   * </body>
   */
  addInputFile(additionalProperties = {}, callback = () => {
  }) {
    const properties = {
      "type": "file",
      "style": "display: none !important; visibility: hidden !important; position: absolute !important; left: -9999px !important; width: 0 !important; height: 0 !important; opacity: 0 !important;"
    };
    const text = additionalProperties["textContent"] ?? "";
    delete additionalProperties["textContent"];
    const container = this.#createElement("div");
    const input = this.#createElement("input", properties, additionalProperties);
    this.buildElement();
    const button = this.#createElement("button", { "textContent": text });
    this.buildElement();
    this.buildElement();
    input.setAttribute("tabindex", "-1");
    input.setAttribute("aria-hidden", "true");
    button.addEventListener("click", () => {
      input.click();
    });
    input.addEventListener("change", () => {
      button.style.maxWidth = `${button.offsetWidth}px`;
      if (input.files.length > 0) {
        button.textContent = input.files[0].name;
      } else {
        button.textContent = text;
      }
    });
    callback(this, container, input, button);
    return this;
  }
  /** Adds a `textarea` to the overlay.
   * This `textarea` element will have properties shared between all `textarea` elements in the overlay.
   * You can override the shared properties by using a callback.
   * @param {Object.<string, any>} [additionalProperties={}] - The DOM properties of the `textarea` that are NOT shared between all overlay `textarea` elements. These should be camelCase.
   * @param {function(Overlay, HTMLTextAreaElement):void} [callback=()=>{}] - Additional JS modification to the `textarea`.
   * @returns {Overlay} Overlay class instance (this)
   * @since 0.43.13
   * @example
   * // Assume all <textarea> elements have a shared class (e.g. {'className': 'bar'})
   * overlay.addTextarea({'id': 'foo', 'textContent': 'Foobar.'}).buildOverlay(document.body);
   * // Output:
   * // (Assume <body> already exists in the webpage)
   * <body>
   *   <textarea id="foo" class="bar">Foobar.</textarea>
   * </body>
   */
  addTextarea(additionalProperties = {}, callback = () => {
  }) {
    const properties = {};
    const textarea = this.#createElement("textarea", properties, additionalProperties);
    callback(this, textarea);
    return this;
  }
  /** Updates the inner HTML of the element.
   * The element is discovered by it's id.
   * If the element is an `input`, it will modify the value attribute instead.
   * @param {string} id - The ID of the element to change
   * @param {string} html - The HTML/text to update with
   * @param {boolean} [doSafe] - (Optional) Should `textContent` be used instead of `innerHTML` to avoid XSS? False by default
   * @since 0.24.2
   */
  updateInnerHTML(id, html, doSafe = false) {
    const element = document.getElementById(id.replace(/^#/, ""));
    if (!element) {
      return;
    }
    if (element instanceof HTMLInputElement) {
      element.value = html;
      return;
    }
    if (doSafe) {
      element.textContent = html;
    } else {
      element.innerHTML = html;
    }
  }
  /** Handles dragging of the overlay.
   * Uses requestAnimationFrame for smooth animations and GPU-accelerated transforms.
   * @param {string} moveMe - The ID of the element to be moved
   * @param {string} iMoveThings - The ID of the drag handle element
   * @since 0.8.2
  */
  handleDrag(moveMe, iMoveThings) {
    let isDragging = false;
    let offsetX, offsetY = 0;
    let animationFrame = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    moveMe = document.querySelector((moveMe == null ? void 0 : moveMe[0]) == "#" ? moveMe : "#" + moveMe);
    iMoveThings = document.querySelector((iMoveThings == null ? void 0 : iMoveThings[0]) == "#" ? iMoveThings : "#" + iMoveThings);
    if (!moveMe || !iMoveThings) {
      this.handleDisplayError(`Can not drag! ${!moveMe ? "moveMe" : ""} ${!moveMe && !iMoveThings ? "and " : ""}${!iMoveThings ? "iMoveThings " : ""}was not found!`);
      return;
    }
    const updatePosition = () => {
      if (isDragging) {
        const deltaX = Math.abs(currentX - targetX);
        const deltaY = Math.abs(currentY - targetY);
        if (deltaX > 0.5 || deltaY > 0.5) {
          currentX = targetX;
          currentY = targetY;
          moveMe.style.transform = `translate(${currentX}px, ${currentY}px)`;
          moveMe.style.left = "0px";
          moveMe.style.top = "0px";
          moveMe.style.right = "";
        }
        animationFrame = requestAnimationFrame(updatePosition);
      }
    };
    let initialRect = null;
    const startDrag = (clientX, clientY) => {
      isDragging = true;
      initialRect = moveMe.getBoundingClientRect();
      offsetX = clientX - initialRect.left;
      offsetY = clientY - initialRect.top;
      const computedStyle = window.getComputedStyle(moveMe);
      const transform = computedStyle.transform;
      if (transform && transform !== "none") {
        const matrix = new DOMMatrix(transform);
        currentX = matrix.m41;
        currentY = matrix.m42;
      } else {
        currentX = initialRect.left;
        currentY = initialRect.top;
      }
      targetX = currentX;
      targetY = currentY;
      document.body.style.userSelect = "none";
      iMoveThings.classList.add("dragging");
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      updatePosition();
    };
    const endDrag = () => {
      isDragging = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      document.body.style.userSelect = "";
      iMoveThings.classList.remove("dragging");
    };
    iMoveThings.addEventListener("mousedown", function(event) {
      event.preventDefault();
      startDrag(event.clientX, event.clientY);
    });
    iMoveThings.addEventListener("touchstart", function(event) {
      var _a2;
      const touch = (_a2 = event == null ? void 0 : event.touches) == null ? void 0 : _a2[0];
      if (!touch) {
        return;
      }
      startDrag(touch.clientX, touch.clientY);
      event.preventDefault();
    }, { passive: false });
    document.addEventListener("mousemove", function(event) {
      if (isDragging && initialRect) {
        targetX = event.clientX - offsetX;
        targetY = event.clientY - offsetY;
      }
    }, { passive: true });
    document.addEventListener("touchmove", function(event) {
      var _a2;
      if (isDragging && initialRect) {
        const touch = (_a2 = event == null ? void 0 : event.touches) == null ? void 0 : _a2[0];
        if (!touch) {
          return;
        }
        targetX = touch.clientX - offsetX;
        targetY = touch.clientY - offsetY;
        event.preventDefault();
      }
    }, { passive: false });
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
    document.addEventListener("touchcancel", endDrag);
  }
  /** Handles status display.
   * This will output plain text into the output Status box.
   * Additionally, this will output an info message to the console.
   * @param {string} text - The status text to display.
   * @since 0.58.4
   */
  handleDisplayStatus(text) {
    const consoleInfo = console.info;
    consoleInfo(`${this.name}: ${text}`);
    this.updateInnerHTML(this.outputStatusId, "Status: " + text, true);
  }
  /** Handles error display.
   * This will output plain text into the output Status box.
   * Additionally, this will output an error to the console.
   * @param {string} text - The error text to display.
   * @since 0.41.6
   */
  handleDisplayError(text) {
    const consoleError2 = console.error;
    consoleError2(`${this.name}: ${text}`);
    this.updateInnerHTML(this.outputStatusId, "Error: " + text, true);
  }
};

// src/observers.js
var Observers = class {
  /** The constructor for the observer class
   * @since 0.43.2
   */
  constructor() {
    this.observerBody = null;
    this.observerBodyTarget = null;
    this.targetDisplayCoords = "#bm-display-coords";
  }
  /** Creates the MutationObserver for document.body
   * @param {HTMLElement} target - Targeted element to watch
   * @returns {Observers} this (Observers class)
   * @since 0.43.2
   */
  createObserverBody(target) {
    this.observerBodyTarget = target;
    this.observerBody = new MutationObserver((mutations) => {
      var _a2;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) {
            continue;
          }
          if ((_a2 = node.matches) == null ? void 0 : _a2.call(node, this.targetDisplayCoords)) {
          }
        }
      }
    });
    return this;
  }
  /** Retrieves the MutationObserver that watches document.body
   * @returns {MutationObserver}
   * @since 0.43.2
   */
  getObserverBody() {
    return this.observerBody;
  }
  /** Observe a MutationObserver
   * @param {MutationObserver} observer - The MutationObserver
   * @param {boolean} watchChildList - (Optional) Should childList be watched? False by default
   * @param {boolean} watchSubtree - (Optional) Should childList be watched? False by default
   * @since 0.43.2
   */
  observe(observer, watchChildList = false, watchSubtree = false) {
    observer.observe(this.observerBodyTarget, {
      childList: watchChildList,
      subtree: watchSubtree
    });
  }
};

// src/utils.js
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
function serverTPtoDisplayTP(tile, pixel) {
  return [parseInt(tile[0]) % 4 * 1e3 + parseInt(pixel[0]), parseInt(tile[1]) % 4 * 1e3 + parseInt(pixel[1])];
}
function consoleLog(...args) {
  ((consoleLog2) => consoleLog2(...args))(console.log);
}
function consoleError(...args) {
  ((consoleError2) => consoleError2(...args))(console.error);
}
function numberToEncoded(number, encoding) {
  if (number === 0) return encoding[0];
  let result = "";
  const base = encoding.length;
  while (number > 0) {
    result = encoding[number % base] + result;
    number = Math.floor(number / base);
  }
  return result;
}
function uint8ToBase64(uint8) {
  let binary = "";
  for (let i = 0; i < uint8.length; i++) {
    binary += String.fromCharCode(uint8[i]);
  }
  return btoa(binary);
}
function base64ToUint8(base64) {
  const binary = atob(base64);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }
  return array;
}
function selectAllCoordinateInputs(document2) {
  let coords = [];
  coords.push(document2.querySelector("#bm-input-tx"));
  coords.push(document2.querySelector("#bm-input-ty"));
  coords.push(document2.querySelector("#bm-input-px"));
  coords.push(document2.querySelector("#bm-input-py"));
  return coords;
}
var colorpalette = [
  { "id": 0, "premium": false, "name": "Transparent", "rgb": [0, 0, 0] },
  { "id": 1, "premium": false, "name": "Black", "rgb": [0, 0, 0] },
  { "id": 2, "premium": false, "name": "Dark Gray", "rgb": [60, 60, 60] },
  { "id": 3, "premium": false, "name": "Gray", "rgb": [120, 120, 120] },
  { "id": 4, "premium": false, "name": "Light Gray", "rgb": [210, 210, 210] },
  { "id": 5, "premium": false, "name": "White", "rgb": [255, 255, 255] },
  { "id": 6, "premium": false, "name": "Deep Red", "rgb": [96, 0, 24] },
  { "id": 7, "premium": false, "name": "Red", "rgb": [237, 28, 36] },
  { "id": 8, "premium": false, "name": "Orange", "rgb": [255, 127, 39] },
  { "id": 9, "premium": false, "name": "Gold", "rgb": [246, 170, 9] },
  { "id": 10, "premium": false, "name": "Yellow", "rgb": [249, 221, 59] },
  { "id": 11, "premium": false, "name": "Light Yellow", "rgb": [255, 250, 188] },
  { "id": 12, "premium": false, "name": "Dark Green", "rgb": [14, 185, 104] },
  { "id": 13, "premium": false, "name": "Green", "rgb": [19, 230, 123] },
  { "id": 14, "premium": false, "name": "Light Green", "rgb": [135, 255, 94] },
  { "id": 15, "premium": false, "name": "Dark Teal", "rgb": [12, 129, 110] },
  { "id": 16, "premium": false, "name": "Teal", "rgb": [16, 174, 166] },
  { "id": 17, "premium": false, "name": "Light Teal", "rgb": [19, 225, 190] },
  { "id": 18, "premium": false, "name": "Dark Blue", "rgb": [40, 80, 158] },
  { "id": 19, "premium": false, "name": "Blue", "rgb": [64, 147, 228] },
  { "id": 20, "premium": false, "name": "Cyan", "rgb": [96, 247, 242] },
  { "id": 21, "premium": false, "name": "Indigo", "rgb": [107, 80, 246] },
  { "id": 22, "premium": false, "name": "Light Indigo", "rgb": [153, 177, 251] },
  { "id": 23, "premium": false, "name": "Dark Purple", "rgb": [120, 12, 153] },
  { "id": 24, "premium": false, "name": "Purple", "rgb": [170, 56, 185] },
  { "id": 25, "premium": false, "name": "Light Purple", "rgb": [224, 159, 249] },
  { "id": 26, "premium": false, "name": "Dark Pink", "rgb": [203, 0, 122] },
  { "id": 27, "premium": false, "name": "Pink", "rgb": [236, 31, 128] },
  { "id": 28, "premium": false, "name": "Light Pink", "rgb": [243, 141, 169] },
  { "id": 29, "premium": false, "name": "Dark Brown", "rgb": [104, 70, 52] },
  { "id": 30, "premium": false, "name": "Brown", "rgb": [149, 104, 42] },
  { "id": 31, "premium": false, "name": "Beige", "rgb": [248, 178, 119] },
  { "id": 32, "premium": true, "name": "Medium Gray", "rgb": [170, 170, 170] },
  { "id": 33, "premium": true, "name": "Dark Red", "rgb": [165, 14, 30] },
  { "id": 34, "premium": true, "name": "Light Red", "rgb": [250, 128, 114] },
  { "id": 35, "premium": true, "name": "Dark Orange", "rgb": [228, 92, 26] },
  { "id": 36, "premium": true, "name": "Light Tan", "rgb": [214, 181, 148] },
  { "id": 37, "premium": true, "name": "Dark Goldenrod", "rgb": [156, 132, 49] },
  { "id": 38, "premium": true, "name": "Goldenrod", "rgb": [197, 173, 49] },
  { "id": 39, "premium": true, "name": "Light Goldenrod", "rgb": [232, 212, 95] },
  { "id": 40, "premium": true, "name": "Dark Olive", "rgb": [74, 107, 58] },
  { "id": 41, "premium": true, "name": "Olive", "rgb": [90, 148, 74] },
  { "id": 42, "premium": true, "name": "Light Olive", "rgb": [132, 197, 115] },
  { "id": 43, "premium": true, "name": "Dark Cyan", "rgb": [15, 121, 159] },
  { "id": 44, "premium": true, "name": "Light Cyan", "rgb": [187, 250, 242] },
  { "id": 45, "premium": true, "name": "Light Blue", "rgb": [125, 199, 255] },
  { "id": 46, "premium": true, "name": "Dark Indigo", "rgb": [77, 49, 184] },
  { "id": 47, "premium": true, "name": "Dark Slate Blue", "rgb": [74, 66, 132] },
  { "id": 48, "premium": true, "name": "Slate Blue", "rgb": [122, 113, 196] },
  { "id": 49, "premium": true, "name": "Light Slate Blue", "rgb": [181, 174, 241] },
  { "id": 50, "premium": true, "name": "Light Brown", "rgb": [219, 164, 99] },
  { "id": 51, "premium": true, "name": "Dark Beige", "rgb": [209, 128, 81] },
  { "id": 52, "premium": true, "name": "Light Beige", "rgb": [255, 197, 165] },
  { "id": 53, "premium": true, "name": "Dark Peach", "rgb": [155, 82, 73] },
  { "id": 54, "premium": true, "name": "Peach", "rgb": [209, 128, 120] },
  { "id": 55, "premium": true, "name": "Light Peach", "rgb": [250, 182, 164] },
  { "id": 56, "premium": true, "name": "Dark Tan", "rgb": [123, 99, 82] },
  { "id": 57, "premium": true, "name": "Tan", "rgb": [156, 132, 107] },
  { "id": 58, "premium": true, "name": "Dark Slate", "rgb": [51, 57, 65] },
  { "id": 59, "premium": true, "name": "Slate", "rgb": [109, 117, 141] },
  { "id": 60, "premium": true, "name": "Light Slate", "rgb": [179, 185, 209] },
  { "id": 61, "premium": true, "name": "Dark Stone", "rgb": [109, 100, 63] },
  { "id": 62, "premium": true, "name": "Stone", "rgb": [148, 140, 107] },
  { "id": 63, "premium": true, "name": "Light Stone", "rgb": [205, 197, 158] }
];

// src/Template.js
var Template = class {
  /** The constructor for the {@link Template} class with enhanced pixel tracking.
   * @param {Object} [params={}] - Object containing all optional parameters
   * @param {string} [params.displayName='My template'] - The display name of the template
   * @param {number} [params.sortID=0] - The sort number of the template for rendering priority
   * @param {string} [params.authorID=''] - The user ID of the person who exported the template (prevents sort ID collisions)
   * @param {string} [params.url=''] - The URL to the source image
   * @param {File} [params.file=null] - The template file (pre-processed File or processed bitmap)
   * @param {Array<number>} [params.coords=null] - The coordinates of the top left corner as (tileX, tileY, pixelX, pixelY)
   * @param {Object} [params.chunked=null] - The affected chunks of the template, and their template for each chunk
   * @param {number} [params.tileSize=1000] - The size of a tile in pixels (assumes square tiles)
   * @param {number} [params.pixelCount=0] - Total number of pixels in the template (calculated automatically during processing)
   * @since 0.65.2
   */
  constructor({
    displayName = "My template",
    sortID = 0,
    authorID = "",
    url = "",
    file = null,
    coords = null,
    chunked = null,
    tileSize = 1e3,
    pixelation = { x: 5, y: 5 }
  } = {}) {
    this.displayName = displayName;
    this.sortID = sortID;
    this.authorID = authorID;
    this.url = url;
    this.file = file;
    this.coords = coords;
    this.chunked = chunked;
    this.tileSize = tileSize;
    this.pixelation = pixelation;
    this.pixelCount = 0;
    this.requiredPixelCount = 0;
    this.defacePixelCount = 0;
    this.colorPalette = {};
    this.tilePrefixes = /* @__PURE__ */ new Set();
    this.storageKey = null;
    const allowed = Array.isArray(colorpalette) ? colorpalette : [];
    this.allowedColorsSet = new Set(
      allowed.filter((c) => ((c == null ? void 0 : c.name) || "").toLowerCase() !== "transparent" && Array.isArray(c == null ? void 0 : c.rgb)).map((c) => `${c.rgb[0]},${c.rgb[1]},${c.rgb[2]}`)
    );
    const defaceKey = "222,250,206";
    this.allowedColorsSet.add(defaceKey);
    this.rgbToMeta = new Map(
      allowed.filter((c) => Array.isArray(c == null ? void 0 : c.rgb)).map((c) => [`${c.rgb[0]},${c.rgb[1]},${c.rgb[2]}`, { id: c.id, premium: !!c.premium, name: c.name }])
    );
    try {
      const transparent = allowed.find((c) => ((c == null ? void 0 : c.name) || "").toLowerCase() === "transparent");
      if (transparent && Array.isArray(transparent.rgb)) {
        this.rgbToMeta.set(defaceKey, { id: transparent.id, premium: !!transparent.premium, name: transparent.name });
      }
    } catch (_) {
    }
    this.paletteColors = allowed.filter((c) => ((c == null ? void 0 : c.name) || "").toLowerCase() !== "transparent" && Array.isArray(c == null ? void 0 : c.rgb)).map((c) => ({ rgb: c.rgb, key: `${c.rgb[0]},${c.rgb[1]},${c.rgb[2]}` }));
  }
  /** Find the closest palette color using Euclidean distance
   * @param {number} r - Red component
   * @param {number} g - Green component  
   * @param {number} b - Blue component
   * @returns {string} The closest palette color key
   */
  findClosestPaletteColor(r, g, b) {
    let minDistance = Infinity;
    let closestKey = "0,0,0";
    for (const color of this.paletteColors) {
      const [pr, pg, pb] = color.rgb;
      const distance = Math.sqrt(
        Math.pow(r - pr, 2) + Math.pow(g - pg, 2) + Math.pow(b - pb, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestKey = color.key;
      }
    }
    return closestKey;
  }
  /** Determine if pixelation should be applied based on image size and complexity
   * @param {number} width - Image width
   * @param {number} height - Image height  
   * @param {number} pixelCount - Total pixel count
   * @returns {boolean} Whether pixelation should be applied
   */
  shouldApplyPixelation(width, height, pixelCount) {
    const SIZE_THRESHOLD = 128;
    const PIXEL_THRESHOLD = 16384;
    if (this.pixelation.x === 1 && this.pixelation.y === 1) {
      return false;
    }
    if (this.pixelation.x > 1 || this.pixelation.y > 1) {
      const isLargeEnough = width >= SIZE_THRESHOLD || height >= SIZE_THRESHOLD || pixelCount >= PIXEL_THRESHOLD;
      return isLargeEnough;
    }
    return false;
  }
  /** Apply pixelation to reduce image complexity by downsampling NxN blocks to single pixels
   * @param {ImageBitmap} originalBitmap - The original image bitmap
   * @returns {ImageBitmap} The pixelated image bitmap
   */
  async applyPixelation(originalBitmap) {
    console.log(`[Template] Applying ${this.pixelation.x}x${this.pixelation.y} pixelation...`);
    const originalWidth = originalBitmap.width;
    const originalHeight = originalBitmap.height;
    const newWidth = Math.ceil(originalWidth / this.pixelation.x);
    const newHeight = Math.ceil(originalHeight / this.pixelation.y);
    console.log(`[Template] Pixelation: ${originalWidth}x${originalHeight} \u2192 ${newWidth}x${newHeight} (${(originalWidth * originalHeight / (newWidth * newHeight)).toFixed(1)}x reduction)`);
    const sourceCanvas = new OffscreenCanvas(originalWidth, originalHeight);
    const sourceCtx = sourceCanvas.getContext("2d", { willReadFrequently: true });
    sourceCtx.imageSmoothingEnabled = false;
    sourceCtx.drawImage(originalBitmap, 0, 0);
    const sourceData = sourceCtx.getImageData(0, 0, originalWidth, originalHeight);
    const targetCanvas = new OffscreenCanvas(newWidth, newHeight);
    const targetCtx = targetCanvas.getContext("2d");
    targetCtx.imageSmoothingEnabled = false;
    const targetImageData = targetCtx.createImageData(newWidth, newHeight);
    for (let py = 0; py < newHeight; py++) {
      for (let px = 0; px < newWidth; px++) {
        const startX = px * this.pixelation.x;
        const startY = py * this.pixelation.y;
        const endX = Math.min(startX + this.pixelation.x, originalWidth);
        const endY = Math.min(startY + this.pixelation.y, originalHeight);
        let totalR = 0, totalG = 0, totalB = 0, totalA = 0;
        let pixelCount = 0;
        for (let y = startY; y < endY; y++) {
          for (let x = startX; x < endX; x++) {
            const sourceIdx = (y * originalWidth + x) * 4;
            const alpha = sourceData.data[sourceIdx + 3];
            if (alpha > 0) {
              totalR += sourceData.data[sourceIdx];
              totalG += sourceData.data[sourceIdx + 1];
              totalB += sourceData.data[sourceIdx + 2];
              totalA += alpha;
              pixelCount++;
            }
          }
        }
        const targetIdx = (py * newWidth + px) * 4;
        if (pixelCount > 0) {
          const avgR = Math.round(totalR / pixelCount);
          const avgG = Math.round(totalG / pixelCount);
          const avgB = Math.round(totalB / pixelCount);
          const avgA = Math.round(totalA / pixelCount);
          const closestKey = this.findClosestPaletteColor(avgR, avgG, avgB);
          const [finalR, finalG, finalB] = closestKey.split(",").map(Number);
          targetImageData.data[targetIdx] = finalR;
          targetImageData.data[targetIdx + 1] = finalG;
          targetImageData.data[targetIdx + 2] = finalB;
          targetImageData.data[targetIdx + 3] = avgA;
        } else {
          targetImageData.data[targetIdx] = 0;
          targetImageData.data[targetIdx + 1] = 0;
          targetImageData.data[targetIdx + 2] = 0;
          targetImageData.data[targetIdx + 3] = 0;
        }
      }
    }
    targetCtx.putImageData(targetImageData, 0, 0);
    return await createImageBitmap(targetCanvas);
  }
  /** Creates chunks of the template for each tile.
   * 
   * @param {Function} progressCallback - Optional callback to report progress: (current, total, message)
   * @returns {Object} Collection of template bitmaps & buffers organized by tile coordinates
   * @since 0.65.4
   */
  async createTemplateTiles(progressCallback = null) {
    console.log(`[Template] createTemplateTiles started for template: ${this.name}`);
    console.log(`[Template] Template coordinates: [${this.coords}]`);
    console.log(`[Template] Pixelation settings: ${this.pixelation.x}x${this.pixelation.y}`);
    const shreadSize = 3;
    let bitmap = await createImageBitmap(this.file);
    const originalPixelCount = bitmap.width * bitmap.height;
    const shouldApplyPixelation = this.shouldApplyPixelation(bitmap.width, bitmap.height, originalPixelCount);
    if (shouldApplyPixelation) {
      console.log(`[Template] Applying pixelation due to image size: ${bitmap.width}x${bitmap.height} (${originalPixelCount.toLocaleString()} pixels)`);
      bitmap = await this.applyPixelation(bitmap);
    } else {
      console.log(`[Template] Skipping pixelation for small image: ${bitmap.width}x${bitmap.height} (${originalPixelCount.toLocaleString()} pixels)`);
    }
    const imageWidth = bitmap.width;
    const imageHeight = bitmap.height;
    console.log(`[Template] Original image dimensions: ${imageWidth}x${imageHeight}`);
    console.log(`[Template] Shread size (scaling factor): ${shreadSize}`);
    const totalPixels = imageWidth * imageHeight;
    console.log(`Template pixel analysis - Dimensions: ${imageWidth}\xD7${imageHeight} = ${totalPixels.toLocaleString()} pixels`);
    this.pixelCount = totalPixels;
    try {
      const inspectCanvas = new OffscreenCanvas(imageWidth, imageHeight);
      const inspectCtx = inspectCanvas.getContext("2d", { willReadFrequently: true });
      inspectCtx.imageSmoothingEnabled = false;
      inspectCtx.clearRect(0, 0, imageWidth, imageHeight);
      inspectCtx.drawImage(bitmap, 0, 0);
      const inspectData = inspectCtx.getImageData(0, 0, imageWidth, imageHeight).data;
      let required = 0;
      let deface = 0;
      const paletteMap = /* @__PURE__ */ new Map();
      for (let y = 0; y < imageHeight; y++) {
        for (let x = 0; x < imageWidth; x++) {
          const idx = (y * imageWidth + x) * 4;
          const r = inspectData[idx];
          const g = inspectData[idx + 1];
          const b = inspectData[idx + 2];
          const a = inspectData[idx + 3];
          if (a === 0) {
            continue;
          }
          let key = `${r},${g},${b}`;
          if (r === 222 && g === 250 && b === 206) {
            deface++;
            key = "222,250,206";
          } else if (!this.allowedColorsSet.has(key)) {
            key = this.findClosestPaletteColor(r, g, b);
          }
          required++;
          paletteMap.set(key, (paletteMap.get(key) || 0) + 1);
        }
      }
      this.requiredPixelCount = required;
      this.defacePixelCount = deface;
      const paletteObj = {};
      for (const [key, count] of paletteMap.entries()) {
        paletteObj[key] = { count, enabled: true };
      }
      this.colorPalette = paletteObj;
    } catch (err) {
      this.requiredPixelCount = Math.max(0, this.pixelCount);
      this.defacePixelCount = 0;
      console.warn("Failed to compute required/deface counts. Falling back to total pixels.", err);
    }
    const templateTiles = {};
    const templateTilesBuffers = {};
    const canvas = new OffscreenCanvas(this.tileSize, this.tileSize);
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const totalTilesX = Math.ceil(imageWidth / this.tileSize);
    const totalTilesY = Math.ceil(imageHeight / this.tileSize);
    const totalTiles = totalTilesX * totalTilesY;
    let processedTiles = 0;
    const BATCH_SIZE = 5;
    console.log(`[Template] Total tiles to process: ${totalTiles} (${totalTilesX}\xD7${totalTilesY})`);
    for (let pixelY = this.coords[3]; pixelY < imageHeight + this.coords[3]; ) {
      const drawSizeY = Math.min(this.tileSize - pixelY % this.tileSize, imageHeight - (pixelY - this.coords[3]));
      console.log(`Math.min(${this.tileSize} - (${pixelY} % ${this.tileSize}), ${imageHeight} - (${pixelY - this.coords[3]}))`);
      for (let pixelX = this.coords[2]; pixelX < imageWidth + this.coords[2]; ) {
        console.log(`Pixel X: ${pixelX}
Pixel Y: ${pixelY}`);
        const drawSizeX = Math.min(this.tileSize - pixelX % this.tileSize, imageWidth - (pixelX - this.coords[2]));
        console.log(`Math.min(${this.tileSize} - (${pixelX} % ${this.tileSize}), ${imageWidth} - (${pixelX - this.coords[2]}))`);
        console.log(`Draw Size X: ${drawSizeX}
Draw Size Y: ${drawSizeY}`);
        const canvasWidth = drawSizeX * shreadSize;
        const canvasHeight = drawSizeY * shreadSize;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        console.log(`Draw X: ${drawSizeX}
Draw Y: ${drawSizeY}
Canvas Width: ${canvasWidth}
Canvas Height: ${canvasHeight}`);
        context.imageSmoothingEnabled = false;
        console.log(`Getting X ${pixelX}-${pixelX + drawSizeX}
Getting Y ${pixelY}-${pixelY + drawSizeY}`);
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(
          bitmap,
          // Bitmap image to draw
          pixelX - this.coords[2],
          // Coordinate X to draw from
          pixelY - this.coords[3],
          // Coordinate Y to draw from
          drawSizeX,
          // X width to draw from
          drawSizeY,
          // Y height to draw from
          0,
          // Coordinate X to draw at
          0,
          // Coordinate Y to draw at
          drawSizeX * shreadSize,
          // X width to draw at
          drawSizeY * shreadSize
          // Y height to draw at
        );
        const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        for (let y = 0; y < canvasHeight; y++) {
          for (let x = 0; x < canvasWidth; x++) {
            const pixelIndex = (y * canvasWidth + x) * 4;
            if (imageData.data[pixelIndex] === 222 && imageData.data[pixelIndex + 1] === 250 && imageData.data[pixelIndex + 2] === 206) {
              if ((x + y) % 2 === 0) {
                imageData.data[pixelIndex] = 0;
                imageData.data[pixelIndex + 1] = 0;
                imageData.data[pixelIndex + 2] = 0;
              } else {
                imageData.data[pixelIndex] = 255;
                imageData.data[pixelIndex + 1] = 255;
                imageData.data[pixelIndex + 2] = 255;
              }
              imageData.data[pixelIndex + 3] = 32;
            } else if (x % shreadSize !== 1 || y % shreadSize !== 1) {
              imageData.data[pixelIndex + 3] = 0;
            } else {
              const r = imageData.data[pixelIndex];
              const g = imageData.data[pixelIndex + 1];
              const b = imageData.data[pixelIndex + 2];
              if (!this.allowedColorsSet.has(`${r},${g},${b}`)) {
                const closestKey = this.findClosestPaletteColor(r, g, b);
                const [nr, ng, nb] = closestKey.split(",").map(Number);
                imageData.data[pixelIndex] = nr;
                imageData.data[pixelIndex + 1] = ng;
                imageData.data[pixelIndex + 2] = nb;
              }
            }
          }
        }
        console.log(`Shreaded pixels for ${pixelX}, ${pixelY}`, imageData);
        context.putImageData(imageData, 0, 0);
        const templateTileName = `${(this.coords[0] + Math.floor(pixelX / 1e3)).toString().padStart(4, "0")},${(this.coords[1] + Math.floor(pixelY / 1e3)).toString().padStart(4, "0")},${(pixelX % 1e3).toString().padStart(3, "0")},${(pixelY % 1e3).toString().padStart(3, "0")}`;
        templateTiles[templateTileName] = await createImageBitmap(canvas);
        this.tilePrefixes.add(templateTileName.split(",").slice(0, 2).join(","));
        const canvasBlob = await canvas.convertToBlob();
        const canvasBuffer = await canvasBlob.arrayBuffer();
        const canvasBufferBytes = Array.from(new Uint8Array(canvasBuffer));
        templateTilesBuffers[templateTileName] = uint8ToBase64(canvasBufferBytes);
        processedTiles++;
        if (processedTiles % BATCH_SIZE === 0 || processedTiles === totalTiles) {
          if (totalTiles > 1 && progressCallback) {
            const percentage = Math.round(processedTiles / totalTiles * 100);
            const message = `Processing template: ${processedTiles}/${totalTiles} tiles (${percentage}%)`;
            console.log(`[Template] ${message}`);
            try {
              progressCallback(processedTiles, totalTiles, message);
            } catch (error) {
              throw error;
            }
          }
        }
        pixelX += drawSizeX;
      }
      pixelY += drawSizeY;
    }
    console.log("Template Tiles: ", templateTiles);
    console.log("Template Tiles Buffers: ", templateTilesBuffers);
    return { templateTiles, templateTilesBuffers };
  }
};

// src/templateManager.js
var TemplateManager = class {
  /** The constructor for the {@link TemplateManager} class.
   * @since 0.55.8
   */
  constructor(name2, version2, overlay) {
    this.name = name2;
    this.version = version2;
    this.overlay = overlay;
    this.templatesVersion = "1.0.0";
    this.userID = null;
    this.encodingBase = "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    this.tileSize = 1e3;
    this.drawMult = 3;
    this.canvasTemplate = null;
    this.canvasTemplateZoomed = null;
    this.canvasTemplateID = "bm-canvas";
    this.canvasMainID = "div#map canvas.maplibregl-canvas";
    this.template = null;
    this.templateState = "";
    this.templatesArray = [];
    this.templatesJSON = null;
    this.templatesShouldBeDrawn = true;
    this.tileProgress = /* @__PURE__ */ new Map();
  }
  /** Retrieves the pixel art canvas.
   * If the canvas has been updated/replaced, it retrieves the new one.
   * @param {string} selector - The CSS selector to use to find the canvas.
   * @returns {HTMLCanvasElement|null} The canvas as an HTML Canvas Element, or null if the canvas does not exist
   * @since 0.58.3
   * @deprecated Not in use since 0.63.25
   */
  getCanvas() {
    var _a2, _b;
    if (document.body.contains(this.canvasTemplate)) {
      return this.canvasTemplate;
    }
    (_a2 = document.getElementById(this.canvasTemplateID)) == null ? void 0 : _a2.remove();
    const canvasMain = document.querySelector(this.canvasMainID);
    const canvasTemplateNew = document.createElement("canvas");
    canvasTemplateNew.id = this.canvasTemplateID;
    canvasTemplateNew.className = "maplibregl-canvas";
    canvasTemplateNew.style.position = "absolute";
    canvasTemplateNew.style.top = "0";
    canvasTemplateNew.style.left = "0";
    canvasTemplateNew.style.height = `${(canvasMain == null ? void 0 : canvasMain.clientHeight) * (window.devicePixelRatio || 1)}px`;
    canvasTemplateNew.style.width = `${(canvasMain == null ? void 0 : canvasMain.clientWidth) * (window.devicePixelRatio || 1)}px`;
    canvasTemplateNew.height = (canvasMain == null ? void 0 : canvasMain.clientHeight) * (window.devicePixelRatio || 1);
    canvasTemplateNew.width = (canvasMain == null ? void 0 : canvasMain.clientWidth) * (window.devicePixelRatio || 1);
    canvasTemplateNew.style.zIndex = "8999";
    canvasTemplateNew.style.pointerEvents = "none";
    (_b = canvasMain == null ? void 0 : canvasMain.parentElement) == null ? void 0 : _b.appendChild(canvasTemplateNew);
    this.canvasTemplate = canvasTemplateNew;
    window.addEventListener("move", this.onMove);
    window.addEventListener("zoom", this.onZoom);
    window.addEventListener("resize", this.onResize);
    return this.canvasTemplate;
  }
  /** Creates the JSON object to store templates in
   * @returns {{ whoami: string, scriptVersion: string, schemaVersion: string, templates: Object }} The JSON object
   * @since 0.65.4
   */
  async createJSON() {
    return {
      "whoami": this.name.replace(" ", ""),
      // Name of userscript without spaces
      "scriptVersion": this.version,
      // Version of userscript
      "schemaVersion": this.templatesVersion,
      // Version of JSON schema
      "templates": {}
      // The templates
    };
  }
  /** Creates the template from the inputed file blob
   * @param {File} blob - The file blob to create a template from
   * @param {string} name - The display name of the template
   * @param {Array<number, number, number, number>} coords - The coordinates of the top left corner of the template
   * @since 0.65.77
   */
  async createTemplate(blob, name2, coords, pixelation = { x: 5, y: 5 }) {
    console.log(`[TemplateManager] Creating template: name="${name2}", coords=[${coords}], blob size=${blob == null ? void 0 : blob.size}, pixelation=${pixelation.x}x${pixelation.y}`);
    this.overlay.handleDisplayStatus(`\u{1F9F9} Clearing old templates...
Preparing for: ${name2}`);
    console.log(`[TemplateManager] Clearing old templates from storage...`);
    this.templatesArray = [];
    this.templatesJSON = null;
    try {
      await chrome.storage.local.remove(["bmTemplates"]);
    } catch (error) {
      console.warn(`[TemplateManager] Storage clear failed:`, error);
    }
    this.overlay.handleDisplayStatus(`\u{1F4CB} Initializing template structure...
Template: ${name2}`);
    if (!this.templatesJSON) {
      this.templatesJSON = await this.createJSON();
      console.log(`Creating JSON...`);
    }
    this.overlay.handleDisplayStatus(`\u{1F3A8} Creating template at ${coords.join(", ")}
Pixelation: ${pixelation.x}\xD7${pixelation.y}`);
    const template = new Template({
      displayName: name2,
      sortID: 0,
      // Object.keys(this.templatesJSON.templates).length || 0, // Uncomment this to enable multiple templates (1/2)
      authorID: numberToEncoded(this.userID || 0, this.encodingBase),
      file: blob,
      coords,
      pixelation
    });
    console.log(`[TemplateManager] Created template instance, now chunking tiles...`);
    let lastUpdateTime = 0;
    const UPDATE_INTERVAL = 200;
    const progressCallback = (current, total, message) => {
      if (window.cancelTemplateCreation) {
        throw new Error("CANCELED");
      }
      const now = Date.now();
      if (now - lastUpdateTime > UPDATE_INTERVAL || current === total) {
        this.overlay.handleDisplayStatus(`${message}
Template: ${name2} at ${coords.join(", ")}`);
        lastUpdateTime = now;
      }
    };
    const { templateTiles, templateTilesBuffers } = await template.createTemplateTiles(progressCallback);
    template.chunked = templateTiles;
    console.log(`[TemplateManager] Template chunked: ${Object.keys(templateTiles || {}).length} tile chunks`);
    if (Object.keys(templateTiles || {}).length > 0) {
      console.log(`[TemplateManager] Sample chunk keys:`, Object.keys(templateTiles).slice(0, 5));
    }
    const storageKey = `${template.sortID} ${template.authorID}`;
    template.storageKey = storageKey;
    this.templatesJSON.templates[storageKey] = {
      "name": template.displayName,
      // Display name of template
      "coords": coords.join(", "),
      // The coords of the template
      "enabled": true,
      "tiles": templateTilesBuffers,
      // Stores the chunked tile buffers
      "palette": template.colorPalette
      // Persist palette and enabled flags
    };
    this.templatesArray = [];
    this.templatesArray.push(template);
    console.log(`[TemplateManager] Templates array after creation:`, this.templatesArray.length);
    console.log(`[TemplateManager] New template coords:`, template.coords);
    const pixelCountFormatted = new Intl.NumberFormat().format(template.pixelCount);
    this.overlay.handleDisplayStatus(`Template created at ${coords.join(", ")}! Total pixels: ${pixelCountFormatted}`);
    try {
      const colorUI = document.querySelector("#bm-contain-colorfilter");
      if (colorUI) {
        colorUI.style.display = "";
      }
      window.postMessage({ source: "blue-marble", bmEvent: "bm-rebuild-color-list" }, "*");
    } catch (_) {
    }
    console.log(Object.keys(this.templatesJSON.templates).length);
    console.log(this.templatesJSON);
    console.log(this.templatesArray);
    console.log(JSON.stringify(this.templatesJSON));
    try {
      await this.#storeTemplates();
    } catch (error) {
      console.warn(`[TemplateManager] Storage failed:`, error);
    }
  }
  /** Generates a {@link Template} class instance from the JSON object template
   */
  #loadTemplate() {
  }
  /** Stores the JSON object of the loaded templates into Chrome storage.
   * @since 0.72.7
   */
  async #storeTemplates() {
    var _a2;
    if (typeof chrome !== "undefined" && chrome.storage && ((_a2 = chrome.runtime) == null ? void 0 : _a2.id)) {
      try {
        await chrome.storage.local.set({ "bmTemplates": JSON.stringify(this.templatesJSON) });
        console.log(`[TemplateManager] Templates saved to storage successfully`);
      } catch (error) {
        console.error("Failed to save templates to Chrome storage:", error);
        throw error;
      }
    } else {
      console.warn(`[TemplateManager] Chrome storage not available or extension context invalid`);
      throw new Error("Storage not available");
    }
  }
  /** Deletes a template from the JSON object.
   * Also delete's the corrosponding {@link Template} class instance
   */
  deleteTemplate() {
  }
  /** Disables the template from view
   */
  async disableTemplate() {
    if (!this.templatesJSON) {
      this.templatesJSON = await this.createJSON();
      console.log(`Creating JSON...`);
    }
  }
  /** Draws all templates on the specified tile.
   * This method handles the rendering of template overlays on individual tiles.
   * @param {File} tileBlob - The pixels that are placed on a tile
   * @param {Array<number>} tileCoords - The tile coordinates [x, y]
   * @since 0.65.77
   */
  async drawTemplateOnTile(tileBlob, tileCoords) {
    var _a2, _b, _c;
    console.log(`[TemplateManager] drawTemplateOnTile called for coords: [${tileCoords}]`);
    console.log(`[TemplateManager] Blob size: ${(tileBlob == null ? void 0 : tileBlob.size) || "unknown"}`);
    if (!this.templatesShouldBeDrawn) {
      console.log(`[TemplateManager] Templates disabled, returning original blob`);
      return tileBlob;
    }
    const drawSize = this.tileSize * this.drawMult;
    const originalCoords = `[${tileCoords[0]}, ${tileCoords[1]}]`;
    tileCoords = tileCoords[0].toString().padStart(4, "0") + "," + tileCoords[1].toString().padStart(4, "0");
    console.log(`[TemplateManager] Formatted coords: ${originalCoords} -> "${tileCoords}"`);
    console.log(`[TemplateManager] Searching for templates in tile: "${tileCoords}"`);
    const templateArray = this.templatesArray;
    console.log(`[TemplateManager] Available templates: ${(templateArray == null ? void 0 : templateArray.length) || 0}`);
    if ((templateArray == null ? void 0 : templateArray.length) > 0) {
      templateArray.forEach((t, i) => {
        console.log(`[TemplateManager] Template ${i}: name="${t.name}", chunked keys=${Object.keys(t.chunked || {}).length}`);
      });
    }
    templateArray.sort((a, b) => {
      return a.sortID - b.sortID;
    });
    const anyTouches = templateArray.some((t) => {
      if (!(t == null ? void 0 : t.chunked)) {
        console.log(`[TemplateManager] Template "${t == null ? void 0 : t.name}" has no chunked data`);
        return false;
      }
      if (t.tilePrefixes && t.tilePrefixes.size > 0) {
        const hasPrefix = t.tilePrefixes.has(tileCoords);
        console.log(`[TemplateManager] Template "${t.name}" tilePrefixes check: ${hasPrefix}`);
        return hasPrefix;
      }
      const chunkedKeys = Object.keys(t.chunked);
      const matches = chunkedKeys.some((k) => k.startsWith(tileCoords));
      console.log(`[TemplateManager] Template "${t.name}" chunked keys scan: ${matches} (${chunkedKeys.length} keys)`);
      if (chunkedKeys.length > 0) {
        console.log(`[TemplateManager] Sample chunked keys:`, chunkedKeys.slice(0, 3));
      }
      return matches;
    });
    console.log(`[TemplateManager] Any templates touch this tile: ${anyTouches}`);
    if (!anyTouches) {
      console.log(`[TemplateManager] No templates touch this tile, returning original blob`);
      return tileBlob;
    }
    const templatesToDraw = templateArray.map((template) => {
      const matchingTiles = Object.keys(template.chunked).filter(
        (tile) => tile.startsWith(tileCoords)
      );
      if (matchingTiles.length === 0) {
        return null;
      }
      const matchingTileBlobs = matchingTiles.map((tile) => {
        const coords = tile.split(",");
        console.log(`[TemplateManager] Processing tile chunk: ${tile}, coords: [${coords}]`);
        return {
          bitmap: template.chunked[tile],
          tileCoords: [coords[0], coords[1]],
          pixelCoords: [coords[2], coords[3]]
        };
      });
      return matchingTileBlobs == null ? void 0 : matchingTileBlobs[0];
    }).filter(Boolean);
    console.log(templatesToDraw);
    const templateCount = (templatesToDraw == null ? void 0 : templatesToDraw.length) || 0;
    console.log(`templateCount = ${templateCount}`);
    let paintedCount = 0;
    let wrongCount = 0;
    let requiredCount = 0;
    const tileBitmap = await createImageBitmap(tileBlob);
    console.log(`[TemplateManager] Tile bitmap dimensions: ${tileBitmap.width}x${tileBitmap.height}`);
    const canvas = new OffscreenCanvas(drawSize, drawSize);
    const context = canvas.getContext("2d");
    console.log(`[TemplateManager] Created canvas: ${drawSize}x${drawSize} (tileSize: ${this.tileSize}, drawMult: ${this.drawMult})`);
    context.imageSmoothingEnabled = false;
    context.beginPath();
    context.rect(0, 0, drawSize, drawSize);
    context.clip();
    context.clearRect(0, 0, drawSize, drawSize);
    context.drawImage(tileBitmap, 0, 0, drawSize, drawSize);
    let tilePixels = null;
    try {
      tilePixels = context.getImageData(0, 0, drawSize, drawSize).data;
    } catch (_) {
    }
    for (const template of templatesToDraw) {
      console.log(`Template:`);
      console.log(template);
      if (tilePixels) {
        try {
          const tempWidth = template.bitmap.width;
          const tempHeight = template.bitmap.height;
          const tempCanvas = new OffscreenCanvas(tempWidth, tempHeight);
          const tempContext = tempCanvas.getContext("2d", { willReadFrequently: true });
          tempContext.imageSmoothingEnabled = false;
          tempContext.clearRect(0, 0, tempWidth, tempHeight);
          tempContext.drawImage(template.bitmap, 0, 0);
          const tImg = tempContext.getImageData(0, 0, tempWidth, tempHeight);
          const tData = tImg.data;
          const offsetX = Number(template.pixelCoords[0]) * this.drawMult;
          const offsetY = Number(template.pixelCoords[1]) * this.drawMult;
          for (let y = 0; y < tempHeight; y++) {
            for (let x = 0; x < tempWidth; x++) {
              if (x % this.drawMult !== 1 || y % this.drawMult !== 1) {
                continue;
              }
              const gx = x + offsetX;
              const gy = y + offsetY;
              if (gx < 0 || gy < 0 || gx >= drawSize || gy >= drawSize) {
                continue;
              }
              const templatePixelCenter = (y * tempWidth + x) * 4;
              const templatePixelCenterRed = tData[templatePixelCenter];
              const templatePixelCenterGreen = tData[templatePixelCenter + 1];
              const templatePixelCenterBlue = tData[templatePixelCenter + 2];
              const templatePixelCenterAlpha = tData[templatePixelCenter + 3];
              if (templatePixelCenterAlpha < 64) {
                try {
                  const activeTemplate = (_a2 = this.templatesArray) == null ? void 0 : _a2[0];
                  const tileIdx = (gy * drawSize + gx) * 4;
                  const pr = tilePixels[tileIdx];
                  const pg = tilePixels[tileIdx + 1];
                  const pb = tilePixels[tileIdx + 2];
                  const pa = tilePixels[tileIdx + 3];
                  const key = activeTemplate.allowedColorsSet.has(`${pr},${pg},${pb}`) ? `${pr},${pg},${pb}` : "other";
                  const isSiteColor = (activeTemplate == null ? void 0 : activeTemplate.allowedColorsSet) ? activeTemplate.allowedColorsSet.has(key) : false;
                  if (pa >= 64 && isSiteColor) {
                    wrongCount++;
                  }
                } catch (ignored) {
                }
                continue;
              }
              requiredCount++;
              const realPixelCenter = (gy * drawSize + gx) * 4;
              const realPixelRed = tilePixels[realPixelCenter];
              const realPixelCenterGreen = tilePixels[realPixelCenter + 1];
              const realPixelCenterBlue = tilePixels[realPixelCenter + 2];
              const realPixelCenterAlpha = tilePixels[realPixelCenter + 3];
              if (requiredCount < 3) {
                console.log(`[TemplateManager] Pixel ${requiredCount}: tile(${gx},${gy}) template(${templatePixelCenterRed},${templatePixelCenterGreen},${templatePixelCenterBlue}) real(${realPixelRed},${realPixelCenterGreen},${realPixelCenterBlue}) alpha:${realPixelCenterAlpha}`);
              }
              if (realPixelCenterAlpha < 64) {
              } else if (realPixelRed === templatePixelCenterRed && realPixelCenterGreen === templatePixelCenterGreen && realPixelCenterBlue === templatePixelCenterBlue) {
                paintedCount++;
                if (requiredCount < 3) {
                  console.log(`[TemplateManager] Pixel ${requiredCount}: PAINTED CORRECTLY`);
                }
              } else {
                wrongCount++;
                if (requiredCount < 3) {
                  console.log(`[TemplateManager] Pixel ${requiredCount}: WRONG COLOR`);
                }
              }
            }
          }
        } catch (exception) {
          console.warn("Failed to compute per-tile painted/wrong stats:", exception);
        }
      }
      try {
        const activeTemplate = (_b = this.templatesArray) == null ? void 0 : _b[0];
        const palette = (activeTemplate == null ? void 0 : activeTemplate.colorPalette) || {};
        const hasDisabled = Object.values(palette).some((v) => (v == null ? void 0 : v.enabled) === false);
        if (!hasDisabled) {
          const drawX = Number(template.pixelCoords[0]) * this.drawMult;
          const drawY = Number(template.pixelCoords[1]) * this.drawMult;
          console.log(`[TemplateManager] Drawing template overlay at: (${drawX}, ${drawY}), bitmap size: ${template.bitmap.width}x${template.bitmap.height}`);
          context.drawImage(template.bitmap, drawX, drawY);
        } else {
          console.log("Applying color filter...");
          const tempW = template.bitmap.width;
          const tempH = template.bitmap.height;
          const filterCanvas = new OffscreenCanvas(tempW, tempH);
          const filterCtx = filterCanvas.getContext("2d", { willReadFrequently: true });
          filterCtx.imageSmoothingEnabled = false;
          filterCtx.clearRect(0, 0, tempW, tempH);
          filterCtx.drawImage(template.bitmap, 0, 0);
          const img = filterCtx.getImageData(0, 0, tempW, tempH);
          const data = img.data;
          for (let y = 0; y < tempH; y++) {
            for (let x = 0; x < tempW; x++) {
              if (x % this.drawMult !== 1 || y % this.drawMult !== 1) {
                continue;
              }
              const idx = (y * tempW + x) * 4;
              const r = data[idx];
              const g = data[idx + 1];
              const b = data[idx + 2];
              const a = data[idx + 3];
              if (a < 1) {
                continue;
              }
              let key = activeTemplate.allowedColorsSet.has(`${r},${g},${b}`) ? `${r},${g},${b}` : "other";
              const inWplacePalette = (activeTemplate == null ? void 0 : activeTemplate.allowedColorsSet) ? activeTemplate.allowedColorsSet.has(key) : true;
              const isPaletteColorEnabled = ((_c = palette == null ? void 0 : palette[key]) == null ? void 0 : _c.enabled) !== false;
              if (!inWplacePalette || !isPaletteColorEnabled) {
                data[idx + 3] = 0;
              }
            }
          }
          filterCtx.putImageData(img, 0, 0);
          context.drawImage(filterCanvas, Number(template.pixelCoords[0]) * this.drawMult, Number(template.pixelCoords[1]) * this.drawMult);
        }
      } catch (exception) {
        console.warn("Failed to apply color filter:", exception);
        context.drawImage(template.bitmap, Number(template.pixelCoords[0]) * this.drawMult, Number(template.pixelCoords[1]) * this.drawMult);
      }
    }
    if (templateCount > 0) {
      const tileKey = tileCoords;
      this.tileProgress.set(tileKey, {
        painted: paintedCount,
        required: requiredCount,
        wrong: wrongCount
      });
      let aggPainted = 0;
      let aggRequiredTiles = 0;
      let aggWrong = 0;
      for (const stats of this.tileProgress.values()) {
        aggPainted += stats.painted || 0;
        aggRequiredTiles += stats.required || 0;
        aggWrong += stats.wrong || 0;
      }
      const totalRequiredTemplates = this.templatesArray.reduce((sum, t) => sum + (t.requiredPixelCount || t.pixelCount || 0), 0);
      const totalRequired = totalRequiredTemplates > 0 ? totalRequiredTemplates : aggRequiredTiles;
      const paintedStr = new Intl.NumberFormat().format(aggPainted);
      const requiredStr = new Intl.NumberFormat().format(totalRequired);
      const wrongStr = new Intl.NumberFormat().format(totalRequired - aggPainted);
      this.overlay.handleDisplayStatus(
        `Displaying ${templateCount} template${templateCount == 1 ? "" : "s"}.
Painted ${paintedStr} / ${requiredStr} \u2022 Wrong ${wrongStr}`
      );
    } else {
      this.overlay.handleDisplayStatus(`Displaying ${templateCount} templates.`);
    }
    return await canvas.convertToBlob({ type: "image/png" });
  }
  /** Imports the JSON object, and appends it to any JSON object already loaded
   * @param {string} json - The JSON string to parse
   */
  importJSON(json) {
    console.log(`Importing JSON...`);
    console.log(json);
    if ((json == null ? void 0 : json.whoami) == "BlueMarble") {
      this.#parseBlueMarble(json);
    }
  }
  /** Parses the Blue Marble JSON object
   * @param {string} json - The JSON string to parse
   * @since 0.72.13
   */
  async #parseBlueMarble(json) {
    var _a2, _b, _c, _d, _e;
    console.log(`Parsing BlueMarble...`);
    console.log(`[TemplateManager] Clearing existing templates array (${((_a2 = this.templatesArray) == null ? void 0 : _a2.length) || 0} templates)`);
    this.templatesArray = [];
    const templates = json.templates;
    console.log(`BlueMarble length: ${Object.keys(templates).length}`);
    if (Object.keys(templates).length > 0) {
      for (const template in templates) {
        const templateKey = template;
        const templateValue = templates[template];
        console.log(templateKey);
        if (templates.hasOwnProperty(template)) {
          const templateKeyArray = templateKey.split(" ");
          const sortID = Number(templateKeyArray == null ? void 0 : templateKeyArray[0]);
          const authorID = (templateKeyArray == null ? void 0 : templateKeyArray[1]) || "0";
          const displayName = templateValue.name || `Template ${sortID || ""}`;
          const tilesbase64 = templateValue.tiles;
          const templateTiles = {};
          let requiredPixelCount = 0;
          const paletteMap = /* @__PURE__ */ new Map();
          for (const tile in tilesbase64) {
            console.log(tile);
            if (tilesbase64.hasOwnProperty(tile)) {
              const encodedTemplateBase64 = tilesbase64[tile];
              const templateUint8Array = base64ToUint8(encodedTemplateBase64);
              const templateBlob = new Blob([templateUint8Array], { type: "image/png" });
              const templateBitmap = await createImageBitmap(templateBlob);
              templateTiles[tile] = templateBitmap;
              try {
                const w = templateBitmap.width;
                const h = templateBitmap.height;
                const c = new OffscreenCanvas(w, h);
                const cx = c.getContext("2d", { willReadFrequently: true });
                cx.imageSmoothingEnabled = false;
                cx.clearRect(0, 0, w, h);
                cx.drawImage(templateBitmap, 0, 0);
                const data = cx.getImageData(0, 0, w, h).data;
                for (let y = 0; y < h; y++) {
                  for (let x = 0; x < w; x++) {
                    if (x % this.drawMult !== 1 || y % this.drawMult !== 1) {
                      continue;
                    }
                    const idx = (y * w + x) * 4;
                    const r = data[idx];
                    const g = data[idx + 1];
                    const b = data[idx + 2];
                    const a = data[idx + 3];
                    if (a < 64) {
                      continue;
                    }
                    if (r === 222 && g === 250 && b === 206) {
                      continue;
                    }
                    requiredPixelCount++;
                    const activeTemplate = (_b = this.templatesArray) == null ? void 0 : _b[0];
                    const key = ((_c = activeTemplate == null ? void 0 : activeTemplate.allowedColorsSet) == null ? void 0 : _c.has(`${r},${g},${b}`)) ? `${r},${g},${b}` : "other";
                    paletteMap.set(key, (paletteMap.get(key) || 0) + 1);
                  }
                }
              } catch (e) {
                console.warn("Failed to count required pixels for imported tile", e);
              }
            }
          }
          const template2 = new Template({
            displayName,
            sortID: sortID || ((_d = this.templatesArray) == null ? void 0 : _d.length) || 0,
            authorID: authorID || ""
            //coords: coords
          });
          template2.chunked = templateTiles;
          template2.requiredPixelCount = requiredPixelCount;
          const paletteObj = {};
          for (const [key, count] of paletteMap.entries()) {
            paletteObj[key] = { count, enabled: true };
          }
          template2.colorPalette = paletteObj;
          try {
            Object.keys(templateTiles).forEach((k) => {
              var _a3;
              (_a3 = template2.tilePrefixes) == null ? void 0 : _a3.add(k.split(",").slice(0, 2).join(","));
            });
          } catch (_) {
          }
          try {
            const persisted = (_e = templates == null ? void 0 : templates[templateKey]) == null ? void 0 : _e.palette;
            if (persisted) {
              for (const [rgb, meta] of Object.entries(persisted)) {
                if (!template2.colorPalette[rgb]) {
                  template2.colorPalette[rgb] = { count: (meta == null ? void 0 : meta.count) || 0, enabled: !!(meta == null ? void 0 : meta.enabled) };
                } else {
                  template2.colorPalette[rgb].enabled = !!(meta == null ? void 0 : meta.enabled);
                }
              }
            }
          } catch (_) {
          }
          template2.storageKey = templateKey;
          this.templatesArray.push(template2);
          console.log(this.templatesArray);
          console.log(`^^^ This ^^^`);
        }
      }
      try {
        const colorUI = document.querySelector("#bm-contain-colorfilter");
        if (colorUI) {
          colorUI.style.display = "";
        }
        window.postMessage({ source: "blue-marble", bmEvent: "bm-rebuild-color-list" }, "*");
      } catch (_) {
      }
    }
  }
  /** Parses the OSU! Place JSON object
   */
  #parseOSU() {
  }
  /** Sets the `templatesShouldBeDrawn` boolean to a value.
   * @param {boolean} value - The value to set the boolean to
   * @since 0.73.7
   */
  setTemplatesShouldBeDrawn(value) {
    this.templatesShouldBeDrawn = value;
  }
};

// src/apiManager.js
var ApiManager = class {
  /** Constructor for ApiManager class
   * @param {TemplateManager} templateManager 
   * @since 0.11.34
   */
  constructor(templateManager2) {
    this.templateManager = templateManager2;
    this.disableAll = false;
    this.coordsTilePixel = [];
    this.templateCoordsTilePixel = [];
  }
  /** Determines if the spontaneously received response is something we want.
   * Otherwise, we can ignore it.
   * Note: Due to aggressive compression, make your calls like `data['jsonData']['name']` instead of `data.jsonData.name`
   * 
   * @param {Overlay} overlay - The Overlay class instance
   * @since 0.11.1
  */
  spontaneousResponseListener(overlay) {
    window.addEventListener("message", async (event) => {
      var _a2, _b, _c;
      const data = event.data;
      const dataJSON = data["jsonData"];
      if (!(data && data["source"] === "blue-marble")) {
        return;
      }
      if (!data["endpoint"]) {
        return;
      }
      const endpointText = (_a2 = data["endpoint"]) == null ? void 0 : _a2.split("?")[0].split("/").filter((s) => s && isNaN(Number(s))).filter((s) => s && !s.includes(".")).pop();
      console.log(`%cBlue Marble%c: Recieved message about "%s"`, "color: cornflowerblue;", "", endpointText);
      switch (endpointText) {
        case "me":
          if (dataJSON["status"] && ((_b = dataJSON["status"]) == null ? void 0 : _b.toString()[0]) != "2") {
            overlay.handleDisplayError(`You are not logged in!
Could not fetch userdata.`);
            return;
          }
          const nextLevelPixels = Math.ceil(Math.pow(Math.floor(dataJSON["level"]) * Math.pow(30, 0.65), 1 / 0.65) - dataJSON["pixelsPainted"]);
          console.log(dataJSON["id"]);
          if (!!dataJSON["id"] || dataJSON["id"] === 0) {
            console.log(numberToEncoded(
              dataJSON["id"],
              "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"
            ));
          }
          this.templateManager.userID = dataJSON["id"];
          overlay.updateInnerHTML("bm-user-name", `Username: <b>${escapeHTML(dataJSON["name"])}</b>`);
          overlay.updateInnerHTML("bm-user-droplets", `Droplets: <b>${new Intl.NumberFormat().format(dataJSON["droplets"])}</b>`);
          overlay.updateInnerHTML("bm-user-nextlevel", `Next level in <b>${new Intl.NumberFormat().format(nextLevelPixels)}</b> pixel${nextLevelPixels == 1 ? "" : "s"}`);
          break;
        case "pixel":
          const coordsTile = data["endpoint"].split("?")[0].split("/").filter((s) => s && !isNaN(Number(s)));
          const payloadExtractor = new URLSearchParams(data["endpoint"].split("?")[1]);
          const coordsPixel = [payloadExtractor.get("x"), payloadExtractor.get("y")];
          console.log("Blue Marble: Processing pixel coordinates:", {
            endpoint: data["endpoint"],
            coordsTile,
            coordsPixel,
            existingCoords: this.coordsTilePixel
          });
          if (this.coordsTilePixel.length && (!coordsTile.length || !coordsPixel.length)) {
            console.log("Blue Marble: Coordinate validation failed:", { coordsTile, coordsPixel });
            overlay.handleDisplayError(`Coordinates are malformed!
Did you try clicking the canvas first?`);
            return;
          }
          this.coordsTilePixel = [...coordsTile, ...coordsPixel];
          console.log("Blue Marble: Stored coordinates:", this.coordsTilePixel);
          const displayTP = serverTPtoDisplayTP(coordsTile, coordsPixel);
          const spanElements = document.querySelectorAll("span");
          for (const element of spanElements) {
            if (element.textContent.trim().includes(`${displayTP[0]}, ${displayTP[1]}`)) {
              let displayCoords = document.querySelector("#bm-display-coords");
              const text = `(Tl X: ${coordsTile[0]}, Tl Y: ${coordsTile[1]}, Px X: ${coordsPixel[0]}, Px Y: ${coordsPixel[1]})`;
              if (!displayCoords) {
                displayCoords = document.createElement("span");
                displayCoords.id = "bm-display-coords";
                displayCoords.textContent = text;
                displayCoords.style = "margin-left: calc(var(--spacing)*3); font-size: small;";
                element.parentNode.parentNode.parentNode.insertAdjacentElement("afterend", displayCoords);
              } else {
                displayCoords.textContent = text;
              }
            }
          }
          break;
        case "tiles":
          let tileCoordsTile = data["endpoint"].split("/");
          tileCoordsTile = [parseInt(tileCoordsTile[tileCoordsTile.length - 2]), parseInt(tileCoordsTile[tileCoordsTile.length - 1].replace(".png", ""))];
          const blobUUID = data["blobID"];
          const blobData = data["blobData"];
          const templateBlob = await this.templateManager.drawTemplateOnTile(blobData, tileCoordsTile);
          window.postMessage({
            source: "blue-marble",
            blobID: blobUUID,
            blobData: templateBlob,
            blink: data["blink"]
          });
          break;
        case "robots":
          this.disableAll = ((_c = dataJSON["userscript"]) == null ? void 0 : _c.toString().toLowerCase()) == "false";
          break;
      }
    });
  }
  // Sends a heartbeat to the telemetry server
  async sendHeartbeat(version2) {
    console.log("Sending heartbeat to telemetry server...");
    let userSettings = await GM.getValue("bmUserSettings", "{}");
    userSettings = JSON.parse(userSettings);
    if (!userSettings || !userSettings.telemetry || !userSettings.uuid) {
      console.log("Telemetry is disabled, not sending heartbeat.");
      return;
    }
    const ua = navigator.userAgent;
    let browser = await this.#getBrowserFromUA(ua);
    let os = this.#getOS(ua);
    GM_xmlhttpRequest({
      method: "POST",
      url: "https://telemetry.thebluecorner.net/heartbeat",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        uuid: userSettings.uuid,
        version: version2,
        browser,
        os
      }),
      onload: (response) => {
        if (response.status !== 200) {
          consoleError("Failed to send heartbeat:", response.statusText);
        }
      },
      onerror: (error) => {
        consoleError("Error sending heartbeat:", error);
      }
    });
  }
  async #getBrowserFromUA(ua = navigator.userAgent) {
    ua = ua || "";
    if (ua.includes("OPR/") || ua.includes("Opera")) return "Opera";
    if (ua.includes("Edg/")) return "Edge";
    if (ua.includes("Vivaldi")) return "Vivaldi";
    if (ua.includes("YaBrowser")) return "Yandex";
    if (ua.includes("Kiwi")) return "Kiwi";
    if (ua.includes("Brave")) return "Brave";
    if (ua.includes("Firefox/")) return "Firefox";
    if (ua.includes("Chrome/")) return "Chrome";
    if (ua.includes("Safari/")) return "Safari";
    if (navigator.brave && typeof navigator.brave.isBrave === "function") {
      if (await navigator.brave.isBrave()) return "Brave";
    }
    return "Unknown";
  }
  #getOS(ua = navigator.userAgent) {
    ua = ua || "";
    if (/Windows NT 11/i.test(ua)) return "Windows 11";
    if (/Windows NT 10/i.test(ua)) return "Windows 10";
    if (/Windows NT 6\.3/i.test(ua)) return "Windows 8.1";
    if (/Windows NT 6\.2/i.test(ua)) return "Windows 8";
    if (/Windows NT 6\.1/i.test(ua)) return "Windows 7";
    if (/Windows NT 6\.0/i.test(ua)) return "Windows Vista";
    if (/Windows NT 5\.1|Windows XP/i.test(ua)) return "Windows XP";
    if (/Mac OS X 10[_\.]15/i.test(ua)) return "macOS Catalina";
    if (/Mac OS X 10[_\.]14/i.test(ua)) return "macOS Mojave";
    if (/Mac OS X 10[_\.]13/i.test(ua)) return "macOS High Sierra";
    if (/Mac OS X 10[_\.]12/i.test(ua)) return "macOS Sierra";
    if (/Mac OS X 10[_\.]11/i.test(ua)) return "OS X El Capitan";
    if (/Mac OS X 10[_\.]10/i.test(ua)) return "OS X Yosemite";
    if (/Mac OS X 10[_\.]/i.test(ua)) return "macOS";
    if (/Android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
    if (/Linux/i.test(ua)) return "Linux";
    return "Unknown";
  }
};

// src/main-simple.js
var name = GM_info.script.name.toString();
var version = GM_info.script.version.toString();
var consoleStyle = "color: cornflowerblue;";
function setupFetchInterception() {
  try {
    const scriptUrl = chrome.runtime.getURL("inject-fetch.js");
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.onload = () => {
      console.log(`%c${name}%c: Fetch interception setup complete`, consoleStyle, "");
      script.remove();
    };
    script.onerror = () => {
      console.error(`%c${name}%c: Failed to load fetch interception script`, consoleStyle, "");
      script.remove();
    };
    (document.head || document.documentElement).appendChild(script);
  } catch (error) {
    console.error(`%c${name}%c: Setup fetch interception failed:`, consoleStyle, "", error);
  }
}
setupFetchInterception();
var cssOverlay = GM_getResourceText("CSS-BM-File");
GM_addStyle(cssOverlay);
var stylesheetLink = document.createElement("link");
stylesheetLink.href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap";
stylesheetLink.rel = "preload";
stylesheetLink.as = "style";
stylesheetLink.onload = function() {
  this.onload = null;
  this.rel = "stylesheet";
};
var _a;
(_a = document.head) == null ? void 0 : _a.appendChild(stylesheetLink);
var observers = new Observers();
var overlayMain = new Overlay(name, version);
var overlayTabTemplate = new Overlay(name, version);
var templateManager = new TemplateManager(name, version, overlayMain);
var apiManager = new ApiManager(templateManager);
overlayMain.setApiManager(apiManager);
(async () => {
  try {
    const storageTemplates = JSON.parse(await GM.getValue("bmTemplates", "{}"));
    console.log(storageTemplates);
    templateManager.importJSON(storageTemplates);
    const userSettings = JSON.parse(await GM.getValue("bmUserSettings", "{}"));
    console.log(userSettings);
    console.log(Object.keys(userSettings).length);
    if (Object.keys(userSettings).length == 0) {
      const uuid = crypto.randomUUID();
      console.log(uuid);
      await GM.setValue("bmUserSettings", JSON.stringify({
        "uuid": uuid
      }));
    }
    console.log(`Telemetry is ${!((userSettings == null ? void 0 : userSettings.telemetry) == void 0)}`);
    if ((userSettings == null ? void 0 : userSettings.telemetry) == void 0 || (userSettings == null ? void 0 : userSettings.telemetry) > 1) {
      const telemetryOverlay = new Overlay(name, version);
      telemetryOverlay.setApiManager(apiManager);
      buildTelemetryOverlay(telemetryOverlay);
    }
  } catch (error) {
    console.error("Error loading storage data:", error);
  }
})();
setInterval(() => apiManager.sendHeartbeat(version), 1e3 * 60 * 30);
buildOverlayMain();
overlayMain.handleDrag("#bm-overlay", "#bm-bar-drag");
apiManager.spontaneousResponseListener(overlayMain);
observeBlack();
consoleLog(`%c${name}%c (${version}) userscript has loaded!`, "color: cornflowerblue;", "");
function observeBlack() {
  const observer = new MutationObserver((mutations, observer2) => {
    var _a2;
    const black = document.querySelector("#color-1");
    if (!black) {
      return;
    }
    let move = document.querySelector("#bm-button-move");
    if (!move) {
      move = document.createElement("button");
      move.id = "bm-button-move";
      move.textContent = "Move \u2191";
      move.className = "btn btn-soft";
      move.onclick = function() {
        const roundedBox = this.parentNode.parentNode.parentNode.parentNode;
        const shouldMoveUp = this.textContent == "Move \u2191";
        roundedBox.parentNode.className = roundedBox.parentNode.className.replace(shouldMoveUp ? "bottom" : "top", shouldMoveUp ? "top" : "bottom");
        roundedBox.style.borderTopLeftRadius = shouldMoveUp ? "0px" : "var(--radius-box)";
        roundedBox.style.borderTopRightRadius = shouldMoveUp ? "0px" : "var(--radius-box)";
        roundedBox.style.borderBottomLeftRadius = shouldMoveUp ? "var(--radius-box)" : "0px";
        roundedBox.style.borderBottomRightRadius = shouldMoveUp ? "var(--radius-box)" : "0px";
        this.textContent = shouldMoveUp ? "Move \u2193" : "Move \u2191";
      };
      const paintPixel = black.parentNode.parentNode.parentNode.parentNode.querySelector("h2");
      (_a2 = paintPixel.parentNode) == null ? void 0 : _a2.appendChild(move);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
function buildOverlayMain() {
  let isMinimized = false;
  let savedCoords = {};
  (async () => {
    var _a2, _b, _c, _d;
    try {
      savedCoords = JSON.parse(await GM.getValue("bmCoords", "{}")) || {};
      (_a2 = document.querySelector("#bm-input-tx")) == null ? void 0 : _a2.setAttribute("value", savedCoords.tx ?? "");
      (_b = document.querySelector("#bm-input-ty")) == null ? void 0 : _b.setAttribute("value", savedCoords.ty ?? "");
      (_c = document.querySelector("#bm-input-px")) == null ? void 0 : _c.setAttribute("value", savedCoords.px ?? "");
      (_d = document.querySelector("#bm-input-py")) == null ? void 0 : _d.setAttribute("value", savedCoords.py ?? "");
    } catch (_) {
      savedCoords = {};
    }
  })();
  const persistCoords = async () => {
    var _a2, _b, _c, _d;
    try {
      const tx = Number(((_a2 = document.querySelector("#bm-input-tx")) == null ? void 0 : _a2.value) || "");
      const ty = Number(((_b = document.querySelector("#bm-input-ty")) == null ? void 0 : _b.value) || "");
      const px = Number(((_c = document.querySelector("#bm-input-px")) == null ? void 0 : _c.value) || "");
      const py = Number(((_d = document.querySelector("#bm-input-py")) == null ? void 0 : _d.value) || "");
      const data = { tx, ty, px, py };
      await GM.setValue("bmCoords", JSON.stringify(data));
    } catch (_) {
    }
  };
  overlayMain.addDiv({ "id": "bm-overlay", "style": "top: 10px; right: 75px;" }).addDiv({ "id": "bm-contain-header" }).addDiv({ "id": "bm-bar-drag" }).buildElement().addImg(
    { "alt": "Blue Marble Icon - Click to minimize/maximize", "src": "https://raw.githubusercontent.com/SwingTheVine/Wplace-BlueMarble/main/dist/assets/Favicon.png", "style": "cursor: pointer;" },
    (instance, img) => {
      img.addEventListener("click", () => {
        isMinimized = !isMinimized;
        const overlay = document.querySelector("#bm-overlay");
        const header = document.querySelector("#bm-contain-header");
        const dragBar = document.querySelector("#bm-bar-drag");
        const coordsContainer = document.querySelector("#bm-contain-coords");
        const coordsButton = document.querySelector("#bm-button-coords");
        const createButton = document.querySelector("#bm-button-create");
        const enableButton = document.querySelector("#bm-button-enable");
        const disableButton = document.querySelector("#bm-button-disable");
        const coordInputs = document.querySelectorAll("#bm-contain-coords input");
        if (!isMinimized) {
          overlay.style.width = "auto";
          overlay.style.maxWidth = "300px";
          overlay.style.minWidth = "200px";
          overlay.style.padding = "10px";
        }
        const elementsToToggle = [
          "#bm-overlay h1",
          "#bm-contain-userinfo",
          "#bm-overlay hr",
          "#bm-contain-automation > *:not(#bm-contain-coords)",
          "#bm-input-file-template",
          "#bm-contain-buttons-action",
          `#${instance.outputStatusId}`,
          "#bm-contain-colorfilter"
        ];
        elementsToToggle.forEach((selector) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            element.style.display = isMinimized ? "none" : "";
          });
        });
        if (isMinimized) {
          if (coordsContainer) coordsContainer.style.display = "none";
          if (coordsButton) coordsButton.style.display = "none";
          if (createButton) createButton.style.display = "none";
          if (enableButton) enableButton.style.display = "none";
          if (disableButton) disableButton.style.display = "none";
          coordInputs.forEach((input) => input.style.display = "none");
          overlay.style.width = "60px";
          overlay.style.height = "76px";
          overlay.style.maxWidth = "60px";
          overlay.style.minWidth = "60px";
          overlay.style.padding = "8px";
          img.style.marginLeft = "3px";
          header.style.textAlign = "center";
          header.style.margin = "0";
          header.style.marginBottom = "0";
          if (dragBar) {
            dragBar.style.display = "";
            dragBar.style.marginBottom = "0.25em";
          }
        } else {
          if (coordsContainer) {
            coordsContainer.style.display = "";
            coordsContainer.style.flexDirection = "";
            coordsContainer.style.justifyContent = "";
            coordsContainer.style.alignItems = "";
            coordsContainer.style.gap = "";
            coordsContainer.style.textAlign = "";
            coordsContainer.style.margin = "";
          }
          if (coordsButton) coordsButton.style.display = "";
          if (createButton) {
            createButton.style.display = "";
            createButton.style.marginTop = "";
          }
          if (enableButton) {
            enableButton.style.display = "";
            enableButton.style.marginTop = "";
          }
          if (disableButton) {
            disableButton.style.display = "";
            disableButton.style.marginTop = "";
          }
          coordInputs.forEach((input) => input.style.display = "");
          img.style.marginLeft = "";
          overlay.style.padding = "10px";
          header.style.textAlign = "";
          header.style.margin = "";
          header.style.marginBottom = "";
          if (dragBar) dragBar.style.marginBottom = "0.5em";
          overlay.style.width = "";
          overlay.style.height = "";
        }
        img.alt = isMinimized ? "Blue Marble Icon - Minimized (Click to maximize)" : "Blue Marble Icon - Maximized (Click to minimize)";
      });
    }
  ).buildElement().addHeader(1, { "textContent": name }).buildElement().buildElement().addHr().buildElement().addDiv({ "id": "bm-contain-userinfo" }).addP({ "id": "bm-user-name", "textContent": "Username:" }).buildElement().addP({ "id": "bm-user-droplets", "textContent": "Droplets:" }).buildElement().addP({ "id": "bm-user-nextlevel", "textContent": "Next level in..." }).buildElement().buildElement().addHr().buildElement().addDiv({ "id": "bm-contain-automation" }).addDiv({ "id": "bm-contain-coords" }).addButton(
    { "id": "bm-button-coords", "className": "bm-help", "style": "margin-top: 0;", "innerHTML": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6"><circle cx="2" cy="2" r="2"></circle><path d="M2 6 L3.7 3 L0.3 3 Z"></path><circle cx="2" cy="2" r="0.7" fill="white"></circle></svg></svg>' },
    (instance, button) => {
      button.onclick = () => {
        var _a2, _b;
        console.log("Blue Marble: Coordinate button clicked");
        console.log("Blue Marble: API Manager available:", !!instance.apiManager);
        console.log("Blue Marble: Stored coordinates:", (_a2 = instance.apiManager) == null ? void 0 : _a2.coordsTilePixel);
        const coords = (_b = instance.apiManager) == null ? void 0 : _b.coordsTilePixel;
        if (!(coords == null ? void 0 : coords[0])) {
          console.log("Blue Marble: No valid coordinates found:", coords);
          instance.handleDisplayError("Coordinates are malformed! Did you try clicking on the canvas first?");
          return;
        }
        console.log("Blue Marble: Using coordinates:", coords);
        instance.updateInnerHTML("bm-input-tx", (coords == null ? void 0 : coords[0]) || "");
        instance.updateInnerHTML("bm-input-ty", (coords == null ? void 0 : coords[1]) || "");
        instance.updateInnerHTML("bm-input-px", (coords == null ? void 0 : coords[2]) || "");
        instance.updateInnerHTML("bm-input-py", (coords == null ? void 0 : coords[3]) || "");
        persistCoords();
      };
    }
  ).buildElement().addInput({ "type": "number", "id": "bm-input-tx", "placeholder": "Tl X", "min": 0, "max": 2047, "step": 1, "required": true, "value": savedCoords.tx ?? "" }, (instance, input) => {
    input.addEventListener("paste", (event) => {
      let splitText = (event.clipboardData || window.clipboardData).getData("text").split(" ").filter((n) => n).map(Number).filter((n) => !isNaN(n));
      if (splitText.length !== 4) return;
      let coords = selectAllCoordinateInputs(document);
      for (let i = 0; i < coords.length; i++) {
        coords[i].value = splitText[i];
      }
      event.preventDefault();
    });
    const handler = () => persistCoords();
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  }).buildElement().addInput({ "type": "number", "id": "bm-input-ty", "placeholder": "Tl Y", "min": 0, "max": 2047, "step": 1, "required": true, "value": savedCoords.ty ?? "" }, (instance, input) => {
    const handler = () => persistCoords();
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  }).buildElement().addInput({ "type": "number", "id": "bm-input-px", "placeholder": "Px X", "min": 0, "max": 2047, "step": 1, "required": true, "value": savedCoords.px ?? "" }, (instance, input) => {
    const handler = () => persistCoords();
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  }).buildElement().addInput({ "type": "number", "id": "bm-input-py", "placeholder": "Px Y", "min": 0, "max": 2047, "step": 1, "required": true, "value": savedCoords.py ?? "" }, (instance, input) => {
    const handler = () => persistCoords();
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  }).buildElement().buildElement().addInputFile({ "id": "bm-input-file-template", "textContent": "Upload Template", "accept": "image/png, image/jpeg, image/webp, image/bmp, image/gif" }).buildElement().addDiv({ "id": "bm-contain-buttons-template" }).addButton({ "id": "bm-button-enable", "textContent": "Enable" }, (instance, button) => {
    button.onclick = () => {
      var _a2, _b;
      (_b = (_a2 = instance.apiManager) == null ? void 0 : _a2.templateManager) == null ? void 0 : _b.setTemplatesShouldBeDrawn(true);
      instance.handleDisplayStatus(`Enabled templates!`);
    };
  }).buildElement().addButton({ "id": "bm-button-create", "textContent": "Create" }, (instance, button) => {
    button.onclick = () => {
      var _a2;
      const input = document.querySelector("#bm-input-file-template");
      const coordTlX = document.querySelector("#bm-input-tx");
      if (!coordTlX.checkValidity()) {
        coordTlX.reportValidity();
        instance.handleDisplayError("Coordinates are malformed! Did you try clicking on the canvas first?");
        return;
      }
      const coordTlY = document.querySelector("#bm-input-ty");
      if (!coordTlY.checkValidity()) {
        coordTlY.reportValidity();
        instance.handleDisplayError("Coordinates are malformed! Did you try clicking on the canvas first?");
        return;
      }
      const coordPxX = document.querySelector("#bm-input-px");
      if (!coordPxX.checkValidity()) {
        coordPxX.reportValidity();
        instance.handleDisplayError("Coordinates are malformed! Did you try clicking on the canvas first?");
        return;
      }
      const coordPxY = document.querySelector("#bm-input-py");
      if (!coordPxY.checkValidity()) {
        coordPxY.reportValidity();
        instance.handleDisplayError("Coordinates are malformed! Did you try clicking on the canvas first?");
        return;
      }
      if (!(input == null ? void 0 : input.files[0])) {
        instance.handleDisplayError(`No file selected!`);
        return;
      }
      templateManager.createTemplate(input.files[0], (_a2 = input.files[0]) == null ? void 0 : _a2.name.replace(/\.[^/.]+$/, ""), [Number(coordTlX.value), Number(coordTlY.value), Number(coordPxX.value), Number(coordPxY.value)]);
      instance.handleDisplayStatus(`Drew to canvas!`);
    };
  }).buildElement().addButton({ "id": "bm-button-disable", "textContent": "Disable" }, (instance, button) => {
    button.onclick = () => {
      var _a2, _b;
      (_b = (_a2 = instance.apiManager) == null ? void 0 : _a2.templateManager) == null ? void 0 : _b.setTemplatesShouldBeDrawn(false);
      instance.handleDisplayStatus(`Disabled templates!`);
    };
  }).buildElement().buildElement().addTextarea({ "id": overlayMain.outputStatusId, "placeholder": `Status: Sleeping...
Version: ${version}`, "readOnly": true }).buildElement().addDiv({ "id": "bm-contain-buttons-action" }).addDiv().addButton(
    { "id": "bm-button-convert", "className": "bm-help", "innerHTML": "\u{1F3A8}", "title": "Template Color Converter" },
    (instance, button) => {
      button.addEventListener("click", () => {
        window.open("https://wplacetool.org/template-planner/", "_blank", "noopener noreferrer");
      });
    }
  ).buildElement().addButton(
    { "id": "bm-button-website", "className": "bm-help", "innerHTML": "\u{1F310}", "title": "Official Blue Marble Website" },
    (instance, button) => {
      button.addEventListener("click", () => {
        window.open("https://wplacetool.org/browser-extensions/", "_blank", "noopener noreferrer");
      });
    }
  ).buildElement().buildElement().addSmall({ "textContent": "Made by SwingTheVine", "style": "margin-top: auto;" }).buildElement().buildElement().buildElement().buildOverlay(document.body);
}
function buildTelemetryOverlay(overlay) {
  overlay.addDiv({ "id": "bm-overlay-telemetry", style: "top: 0px; left: 0px; width: 100vw; max-width: 100vw; height: 100vh; max-height: 100vh; z-index: 9999;" }).addDiv({ "id": "bm-contain-all-telemetry", style: "display: flex; flex-direction: column; align-items: center;" }).addDiv({ "id": "bm-contain-header-telemetry", style: "margin-top: 10%;" }).addHeader(1, { "textContent": `${name} Telemetry` }).buildElement().buildElement().addDiv({ "id": "bm-contain-telemetry", style: "max-width: 50%; overflow-y: auto; max-height: 80vh;" }).addHr().buildElement().addBr().buildElement().addDiv({ "style": "width: fit-content; margin: auto; text-align: center;" }).addButton({ "id": "bm-button-telemetry-more", "textContent": "More Information" }, (instance, button) => {
    button.onclick = () => {
      window.open("https://github.com/SwingTheVine/Wplace-TelemetryServer#telemetry-data", "_blank", "noopener noreferrer");
    };
  }).buildElement().buildElement().addBr().buildElement().addDiv({ style: "width: fit-content; margin: auto; text-align: center;" }).addButton({ "id": "bm-button-telemetry-enable", "textContent": "Enable Telemetry", "style": "margin-right: 2ch;" }, (instance, button) => {
    button.onclick = async () => {
      try {
        const userSettings = JSON.parse(await GM.getValue("bmUserSettings", "{}"));
        userSettings.telemetry = 1;
        await GM.setValue("bmUserSettings", JSON.stringify(userSettings));
        const element = document.getElementById("bm-overlay-telemetry");
        if (element) {
          element.style.display = "none";
        }
      } catch (error) {
        console.error("Error enabling telemetry:", error);
      }
    };
  }).buildElement().addButton({ "id": "bm-button-telemetry-disable", "textContent": "Disable Telemetry" }, (instance, button) => {
    button.onclick = async () => {
      try {
        const userSettings = JSON.parse(await GM.getValue("bmUserSettings", "{}"));
        userSettings.telemetry = 0;
        await GM.setValue("bmUserSettings", JSON.stringify(userSettings));
        const element = document.getElementById("bm-overlay-telemetry");
        if (element) {
          element.style.display = "none";
        }
      } catch (error) {
        console.error("Error disabling telemetry:", error);
      }
    };
  }).buildElement().buildElement().addBr().buildElement().addP({ "textContent": 'We collect anonymous telemetry data such as your browser, OS, and script version to make the experience better for everyone. The data is never shared personally. The data is never sold. You can turn this off by pressing the "Disable" button, but keeping it on helps us improve features and reliability faster. Thank you for supporting the Blue Marble!' }).buildElement().addP({ "textContent": 'You can disable telemetry by pressing the "Disable" button below.' }).buildElement().buildElement().buildElement().buildOverlay(document.body);
}

// content.js
console.log(
  "%cBlue Marble Chrome Extension%c loaded successfully!",
  "color: cornflowerblue; font-weight: bold;",
  ""
);

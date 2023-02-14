"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.m-\\[1px\\] {\n  margin: 1px;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.mx-\\[3px\\] {\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.my-\\[20px\\] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-full {\n  height: 100%;\n}\n.h-\\[40px\\] {\n  height: 40px;\n}\n.h-\\[5px\\] {\n  height: 5px;\n}\n.h-\\[7px\\] {\n  height: 7px;\n}\n.h-\\[10px\\] {\n  height: 10px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[100vh\\] {\n  height: 100vh;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-\\[30px\\] {\n  height: 30px;\n}\n.h-\\[100\\%\\] {\n  height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.w-\\[40px\\] {\n  width: 40px;\n}\n.w-\\[5px\\] {\n  width: 5px;\n}\n.w-\\[7px\\] {\n  width: 7px;\n}\n.w-\\[10px\\] {\n  width: 10px;\n}\n.w-\\[50px\\] {\n  width: 50px;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-\\[30px\\] {\n  width: 30px;\n}\n.max-w-\\[1500px\\] {\n  max-width: 1500px;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.gap-y-3 {\n  row-gap: 0.75rem;\n}\n.gap-y-5 {\n  row-gap: 1.25rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.gap-x-1 {\n  -moz-column-gap: 0.25rem;\n       column-gap: 0.25rem;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.self-center {\n  align-self: center;\n}\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.border-\\[1\\.5px\\] {\n  border-width: 1.5px;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, 1);\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgba(156, 163, 175, 1);\n  border-color: rgba(156, 163, 175, var(--tw-border-opacity));\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, 1);\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 213, 219, 1);\n  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, 1);\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.fill-blue-300 {\n  fill: #93c5fd;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-poppins {\n  font-family: Poppins, sans-serif;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgba(245, 158, 11, 1);\n  color: rgba(245, 158, 11, var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, 1);\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-\\[\\#9ba3ae\\] {\n  --tw-text-opacity: 1;\n  color: rgba(155, 163, 174, 1);\n  color: rgba(155, 163, 174, var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, 1);\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, 1);\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.text-teal-400 {\n  --tw-text-opacity: 1;\n  color: rgba(45, 212, 191, 1);\n  color: rgba(45, 212, 191, var(--tw-text-opacity));\n}\n.text-amber-400 {\n  --tw-text-opacity: 1;\n  color: rgba(251, 191, 36, 1);\n  color: rgba(251, 191, 36, var(--tw-text-opacity));\n}\n.text-violet-400 {\n  --tw-text-opacity: 1;\n  color: rgba(167, 139, 250, 1);\n  color: rgba(167, 139, 250, var(--tw-text-opacity));\n}\n.text-rose-400 {\n  --tw-text-opacity: 1;\n  color: rgba(251, 113, 133, 1);\n  color: rgba(251, 113, 133, var(--tw-text-opacity));\n}\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 182, 212, 1);\n  color: rgba(6, 182, 212, var(--tw-text-opacity));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgba(243, 244, 246, 1);\n  color: rgba(243, 244, 246, var(--tw-text-opacity));\n}\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgba(107, 114, 128, 1);\n    color: rgba(107, 114, 128, var(--tw-text-opacity));\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .md\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .md\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n\n  .md\\:mx-9 {\n    margin-left: 2.25rem;\n    margin-right: 2.25rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:h-\\[100vh\\] {\n    height: 100vh;\n  }\n\n  .md\\:max-h-\\[600px\\] {\n    max-height: 600px;\n  }\n\n  .md\\:grid-cols-sidebar {\n    grid-template-columns: 1fr 2.3fr;\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:gap-3 {\n    gap: 0.75rem;\n  }\n\n  .md\\:rounded-r-none {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n\n  .md\\:rounded-l-xl {\n    border-top-left-radius: 0.75rem;\n    border-bottom-left-radius: 0.75rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/conversion.js":
/*!***************************!*\
  !*** ./src/conversion.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sunRiseSet": () => (/* binding */ sunRiseSet),
/* harmony export */   "toC": () => (/* binding */ toC),
/* harmony export */   "toF": () => (/* binding */ toF),
/* harmony export */   "toMph": () => (/* binding */ toMph),
/* harmony export */   "toTime": () => (/* binding */ toTime)
/* harmony export */ });
function toF(temp) {
  return Math.floor((1.8 * (temp - 273.15) + 32));
}

function toC(temp) {
  return Math.floor(temp - 273.15);
}

function toTime(zone, form) {
  return moment().utcOffset(zone / 60).format(form); // eslint-disable-line
}

function sunRiseSet(zone, time) {
  return moment.utc(time, 'X').add(zone, 'seconds').format('h:mm A'); // eslint-disable-line
}

function toMph(speed) {
  return Math.floor(speed * 2.2369);
}




/***/ }),

/***/ "./src/degree.js":
/*!***********************!*\
  !*** ./src/degree.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDegree": () => (/* binding */ changeDegree),
/* harmony export */   "displayTemp": () => (/* binding */ displayTemp),
/* harmony export */   "displayUnit": () => (/* binding */ displayUnit)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./src/conversion.js");
// import { parseInt } from 'lodash';


/* eslint-disable */
function updateUnit(unit){
  const units = document.querySelectorAll('.unit')

  if (unit.dataset.temp == 'f'){
    unit.dataset.temp = 'c'
    units.forEach((u) => u.innerHTML = 'C')

  } else {
    unit.dataset.temp = 'f'
    units.forEach((u) => u.innerHTML = 'F')
  }
}

function changeDegree() {
  const temps = document.querySelectorAll('.temp');
  let unit = document.querySelector('#results')

  temps.forEach((temp) => {
    (unit.dataset.temp == 'f') ? temp.innerHTML = temp.dataset.c : temp.innerHTML = temp.dataset.f
  })
  updateUnit(unit)
}

function displayTemp(temp) {
  if (document.querySelector('#results').dataset.temp === 'c') {
    return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(temp);
  }
  return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(temp);
}

function displayUnit(){
  if (document.querySelector('#results').dataset.temp == 'c') {
    return 'C'
  } else {
    return 'F'
  }
}


/* eslint-enable */


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendResults": () => (/* binding */ appendResults),
/* harmony export */   "displayContent": () => (/* binding */ displayContent),
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "displayResults": () => (/* binding */ displayResults),
/* harmony export */   "hideContent": () => (/* binding */ hideContent),
/* harmony export */   "weatherCard": () => (/* binding */ weatherCard)
/* harmony export */ });
/* harmony import */ var _left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left */ "./src/left.js");
/* harmony import */ var _right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right */ "./src/right.js");
/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./degree */ "./src/degree.js");




function appendResults(content) {
  const results = document.querySelector('#results');
  results.innerHTML = content;
}

function hideContent() {
  document.querySelector('#results').classList.add('hidden');
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#title').classList.add('hidden');
  document.querySelector('#error').innerHTML = '';
}

function displayContent() {
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';
}

function displayError(city) {
  document.querySelector('#form').classList.remove('hidden');
  document.querySelector('#load').innerHTML = '';
  document.querySelector('#error').innerHTML = `Invalid search for "${city}"`;
}

function weatherCard(current, forcast) {
  appendResults(
    `
      ${(0,_left__WEBPACK_IMPORTED_MODULE_0__.leftBar)(current)}
      ${(0,_right__WEBPACK_IMPORTED_MODULE_1__.rightBar)(current, forcast)}
    `,
  );
}

function displayResults(current, forcast) {
  weatherCard(current, forcast);
  displayContent();
  document.querySelectorAll('.degree').forEach((btn) => btn.addEventListener('click', _degree__WEBPACK_IMPORTED_MODULE_2__.changeDegree));
}




/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./src/load.js");



async function fetchApi(city) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideContent)();
  (0,_load__WEBPACK_IMPORTED_MODULE_1__.loading)();
  try {
    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const current = await response1.json();

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=e7775dd9f2432256b7d57eb357896009`);
    const forcast = await response2.json();

    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayResults)(current, forcast);
  } catch {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayError)(city);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);


/***/ }),

/***/ "./src/forcast.js":
/*!************************!*\
  !*** ./src/forcast.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forcastCards": () => (/* binding */ forcastCards)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./src/conversion.js");
/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./degree */ "./src/degree.js");
/* eslint-disable */



function forcastCards(forcast, i = 0, date = '', cards = '') {

  forcast.list.forEach((day) => {
    if (date != moment(day.dt_txt).format('MMM D') && i < 5 && day.weather[0].icon.includes('d')) {
      i += 1
      cards += 
       `
        <div class="bg-white flex flex-col items-center justify-center gap-y-3 py-3 rounded-lg shadow-md">
            <span class="text-md md:text-lg">${moment(day.dt_txt).format('MMM D')}</span> 
            <img class="w-[40px] h-[40px]"src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            <div class="flex text-sm items-center justify-center gap-x-2">
              <div class="flex">
                <span data-f="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(day.main.temp_max)}" data-c="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(day.main.temp_max)}" class="temp">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayTemp)(day.main.temp_max)}</span>
                <div class="w-[5px] h-[5px] border-black border-[1.5px] rounded-full"></div>
              </div>
              <div class="flex text-gray-400">
              <span data-f="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(day.main.temp_min)}" data-c="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(day.main.temp_min)}" class="temp">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayTemp)(day.main.temp_min)}</span>
                <div class="w-[5px] h-[5px] border-gray-400 border-[1.5px] rounded-full"></div>
              </div>
            </div>
          </div>
        `;
      date = moment(day.dt_txt).format('MMM D');
    }
  });
  return cards;
}


/* eslint-enable */


/***/ }),

/***/ "./src/highlights.js":
/*!***************************!*\
  !*** ./src/highlights.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightCards": () => (/* binding */ highlightCards)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./src/conversion.js");


function highlightCards(current) {
  return `
  <!-- Humidity -->
    <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Humidity</span>
        <ion-icon class="text-blue-600 text-2xl" name="water"></ion-icon>
      </div>
      <div class="flex">
        <span class="text-4xl">${current.main.humidity}</span>
        <span>%</span>
      </div>
    </div>

    <!-- Visibility -->
    <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Visibility</span>
        <ion-icon class="text-2xl text-teal-400" name="eye"></ion-icon>
      </div>
      <span class="text-4xl">${Math.floor(current.visibility / 1000)}k</span>
    </div>

    <!-- Sun rise/set -->
    <div class="bg-white flex flex-col justify-center gap-y-2 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Sunset & Sunrise</span>
        <ion-icon class="text-amber-400 text-2xl" name="sunny"></ion-icon>
      </div>
      <div>
        <div class="flex items-center gap-x-2">
          <ion-icon class="text-black" name="arrow-up"></ion-icon>
          <span class="text-md">${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.sunRiseSet)(current.sys.sunrise, current.timezone)}</span>
        </div>
        <div class="flex items-center gap-x-2">
          <ion-icon class="text-black" name="arrow-down"></ion-icon>
          <span class="text-md">${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.sunRiseSet)(current.sys.sunset, current.timezone)}</span>
        </div>
      </div>
    </div>

    <!-- CLOUDINESS -->
    <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Cloudiness</span>
        <ion-icon class="text-violet-400 text-2xl" name="cloud"></ion-icon>
      </div>
      <div class="flex">
        <span class="text-4xl">${current.clouds.all}</span>
        <span>%</span>
      </div>
    </div>

    <!-- WIND -->
    <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Wind speed</span>
        <ion-icon class="text-rose-400 text-2xl" name="speedometer"></ion-icon>
      </div>
      <div class="flex">
        <span class="text-4xl">${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toMph)(current.wind.speed)}mph</span>
      </div>
    </div>

    <!-- DIRECTION -->
    <div class="bg-white flex flex-col justify-center gap-y-5 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <span class="text-md">Wind direction</span>
        <ion-icon class="text-cyan-500 text-2xl" name="compass"></ion-icon>
      </div>
      <div class="flex">
        <span class="text-4xl">${current.wind.deg}</span>
        <div class="w-[7px] h-[7px] border-black border-[2px] rounded-full mx-[3px]"></div>
      </div>
    </div>
  `;
}

 // eslint-disable-line


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import your function

// import { changeDegree } from './degree';


document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  const city = document.querySelector('#search');
  (0,_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(city.value);
  city.value = '';
});


/***/ }),

/***/ "./src/left.js":
/*!*********************!*\
  !*** ./src/left.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftBar": () => (/* binding */ leftBar)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./src/conversion.js");
/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./degree */ "./src/degree.js");



function leftBar(current) {
  return `
    <!-- LEFT -->
    <div class="bg-white flex flex-col py-2 px-3 rounded-t-xl md:rounded-r-none md:rounded-l-xl justify-evenly">

        <!-- City -->
        <div class="flex flex-col gap-y-2 my-[20px] md:my-0">
          <h3 class="self-center text-3xl text-center">${current.name}</h3>

          <!-- Date time -->
          <div class="flex justify-center items-center gap-x-1 text-lg">
            <span>${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toTime)(current.timezone, 'dddd')}</span>
            <span>${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toTime)(current.timezone, 'h:mm A')}</span>
          </div>
          <hr class="border-gray-200">
        </div>

        <!-- Temp -->
        <div class="flex justify-center">
          <span data-f="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(current.main.temp)}" data-c="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(current.main.temp)}" class="temp text-6xl md:text-7xl">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayTemp)(current.main.temp)}</span>
          <div class="w-[10px] h-[10px] border-black border-[2px] rounded-full mx-[3px]"></div>
          <span class="unit text-4xl">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayUnit)()}</span>
        </div>

        <!-- High/Low -->
        <div class="flex gap-x-3 text-xl justify-center">

          <!-- High -->
          <div class="flex text-black">
            <span data-f="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(current.main.temp_max)}" data-c="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(current.main.temp_max)}" class="temp">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayTemp)(current.main.temp_max)}</span>
            <div class="w-[5px] h-[5px] border-black border-[1.5px] rounded-full"></div>
            <span class="unit">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayUnit)()}</span>
          </div>

          <!-- Low -->
          <div class="flex text-gray-400">
            <span data-f="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toF)(current.main.temp_min)}" data-c="${(0,_conversion__WEBPACK_IMPORTED_MODULE_0__.toC)(current.main.temp_min)}" class="temp">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayTemp)(current.main.temp_min)}</span>
            <div class="w-[5px] h-[5px] border-gray-400 border-[1.5px] rounded-full"></div>
            <span class="unit">${(0,_degree__WEBPACK_IMPORTED_MODULE_1__.displayUnit)()}</span>
          </div>
        </div>

        <!-- Icon -->
        <div class="self-center flex justify-center items-center">
          <img class="w-[50px] h-[50px]"src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png">
          <h3 class="text-lg">${current.weather[0].main}</h3>
        </div>
    </div>
    `;
}

 // eslint-disable-line

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loading": () => (/* binding */ loading)
/* harmony export */ });
function loading() {
  const icon = `
    <div role="status" class="h-[100vh] flex items-center justify-center">
      <svg aria-hidden="true" class="w-20 h-20 mr-2 text-gray-100 animate-spin dark:text-gray-500 fill-blue-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    `;
  const load = document.querySelector('#load');
  load.innerHTML = icon;
}

 // eslint-disable-line


/***/ }),

/***/ "./src/right.js":
/*!**********************!*\
  !*** ./src/right.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rightBar": () => (/* binding */ rightBar)
/* harmony export */ });
/* harmony import */ var _degree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./degree */ "./src/degree.js");
/* harmony import */ var _forcast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forcast */ "./src/forcast.js");
/* harmony import */ var _highlights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlights */ "./src/highlights.js");




function rightBar(current, forcast) {
  return `
  <!-- RIGHT -->
  <div class="my-3 mx-3 md:mx-9 flex flex-col gap-y-3">

  <div class="flex justify-between">
  <span class="cursor-pointer text-2xl text-center md:text-left">5-day Forcast</span>

  <div class="degree flex items-center justify-center bg-white text-black rounded-full w-[30px] h-[30px] shadow-md cursor-pointer">
      <div class="flex">
        <div class="w-[5px] h-[5px] border-black border-[1px] rounded-full m-[1px]"></div>
        <span class="unit text-sm">${(0,_degree__WEBPACK_IMPORTED_MODULE_0__.displayUnit)()}</span>
      </div>
  </div>
</div>  

  <!-- Forcast -->
  <div class="grid grid-cols-5 gap-1 md:gap-3">
    ${(0,_forcast__WEBPACK_IMPORTED_MODULE_1__.forcastCards)(forcast)}
  </div>

  <!-- Todays Highlights -->
  <h5 class="text-2xl my-1 text-center md:text-left">Today's Highlights</h5>
  <div class=" h-[100%] grid grid-cols-2 md:grid-cols-3 gap-4">
    ${(0,_highlights__WEBPACK_IMPORTED_MODULE_2__.highlightCards)(current)}
  </div>
</div>
  `;
}

 // eslint-disable-line


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVILE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUM3SjtBQUNBLDBYQUEwWCw0QkFBNEIsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsVUFBVSx3QkFBd0IscUJBQXFCLEdBQUcsNFRBQTRULHNCQUFzQiwyQ0FBMkMsNkJBQTZCLDBCQUEwQixvQkFBb0IsbVRBQW1ULDBDQUEwQyxVQUFVLGdLQUFnSyxlQUFlLGlDQUFpQyxVQUFVLDJOQUEyTixlQUFlLDJCQUEyQixrQ0FBa0MsVUFBVSxpR0FBaUcsdUNBQXVDLCtCQUErQixHQUFHLGtHQUFrRyx1QkFBdUIseUJBQXlCLEdBQUcsaUZBQWlGLG1CQUFtQiw2QkFBNkIsR0FBRywyRUFBMkUsd0JBQXdCLEdBQUcsMEpBQTBKLHlIQUF5SCwyQkFBMkIsVUFBVSxpRUFBaUUsbUJBQW1CLEdBQUcsMkdBQTJHLG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxnYkFBZ2Isb0JBQW9CLGtDQUFrQyxzQ0FBc0MsVUFBVSxrTUFBa00sMEJBQTBCLDRCQUE0QixpQ0FBaUMsaUNBQWlDLDJCQUEyQixzQkFBc0IsdUJBQXVCLFVBQVUsOEZBQThGLHlCQUF5QixHQUFHLG1MQUFtTCxnQ0FBZ0MsMENBQTBDLG1DQUFtQyxVQUFVLCtGQUErRixrQkFBa0IsR0FBRywrTUFBK00scUJBQXFCLEdBQUcsbUZBQW1GLDZCQUE2QixHQUFHLGlKQUFpSixpQkFBaUIsR0FBRyw2SEFBNkgsbUNBQW1DLGlDQUFpQyxVQUFVLG9HQUFvRyw2QkFBNkIsR0FBRyxxS0FBcUssZ0NBQWdDLDBCQUEwQixVQUFVLHNFQUFzRSx1QkFBdUIsR0FBRyw0SkFBNEosY0FBYyxHQUFHLGNBQWMsY0FBYyxlQUFlLEdBQUcsWUFBWSxlQUFlLEdBQUcsb0JBQW9CLHFCQUFxQixjQUFjLGVBQWUsR0FBRyw2RUFBNkUscUJBQXFCLEdBQUcsa1FBQWtRLGdCQUFnQiwyQkFBMkIsVUFBVSxnREFBZ0QsZ0JBQWdCLDJCQUEyQixVQUFVLCtFQUErRSxvQkFBb0IsR0FBRyxpRkFBaUYsb0JBQW9CLEdBQUcsbWJBQW1iLG9CQUFvQixtQ0FBbUMsVUFBVSx3S0FBd0ssb0JBQW9CLGlCQUFpQixHQUFHLHlGQUF5RixrQkFBa0IsR0FBRywwQkFBMEIsNkJBQTZCLDZCQUE2Qix3QkFBd0Isd0JBQXdCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixvQkFBb0Isa0JBQWtCLGtCQUFrQix1QkFBdUIsMkNBQTJDLG9CQUFvQix5QkFBeUIsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsNkNBQTZDLCtDQUErQyx3Q0FBd0MsbUNBQW1DLDJDQUEyQyxpQkFBaUIsdUJBQXVCLHFCQUFxQixzQkFBc0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsOEJBQThCLDJCQUEyQixHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLG9CQUFvQixrQkFBa0Isa0JBQWtCLHVCQUF1QiwyQ0FBMkMsb0JBQW9CLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsZ0NBQWdDLGlDQUFpQyw2Q0FBNkMsK0NBQStDLHdDQUF3QyxtQ0FBbUMsMkNBQTJDLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUJBQW1CLHFCQUFxQixrQkFBa0Isd0JBQXdCLDBCQUEwQixnQ0FBZ0MsOEJBQThCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLEdBQUcsWUFBWSx1QkFBdUIsZUFBZSxnQkFBZ0IsZUFBZSxpQkFBaUIscUJBQXFCLDJCQUEyQix3QkFBd0Isb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLFNBQVMsdUJBQXVCLDBCQUEwQixHQUFHLFNBQVMseUJBQXlCLDBCQUEwQixHQUFHLGlCQUFpQixxQkFBcUIsc0JBQXNCLEdBQUcsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsR0FBRyxTQUFTLHFCQUFxQixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsU0FBUyx3QkFBd0IsR0FBRyxTQUFTLHlCQUF5QixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsU0FBUyxpQkFBaUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLFdBQVcsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLGdCQUFnQixlQUFlLEdBQUcsZ0JBQWdCLGVBQWUsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxtQkFBbUIsVUFBVSxnQ0FBZ0MsS0FBSyxHQUFHLGlCQUFpQix1Q0FBdUMsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsZ0JBQWdCLHFEQUFxRCxHQUFHLGdCQUFnQixxREFBcUQsR0FBRyxhQUFhLDJCQUEyQixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxtQkFBbUIsNEJBQTRCLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsY0FBYyxHQUFHLFlBQVksNEJBQTRCLDRCQUE0QixHQUFHLFlBQVkscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxZQUFZLG9CQUFvQixHQUFHLFlBQVksNkJBQTZCLDZCQUE2QixHQUFHLFlBQVksNkJBQTZCLDZCQUE2QixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsZUFBZSwyQkFBMkIsR0FBRyxlQUFlLDBCQUEwQixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxpQkFBaUIsb0NBQW9DLHFDQUFxQyxHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLGlCQUFpQiwyQkFBMkIsbUNBQW1DLDBEQUEwRCxHQUFHLG9CQUFvQiwyQkFBMkIseUNBQXlDLGdFQUFnRSxHQUFHLG9CQUFvQiwyQkFBMkIseUNBQXlDLGdFQUFnRSxHQUFHLGdCQUFnQix1QkFBdUIsNkNBQTZDLGdFQUFnRSxHQUFHLGFBQWEsdUJBQXVCLDZDQUE2QyxnRUFBZ0UsR0FBRyxnQkFBZ0IsdUJBQXVCLDZDQUE2QyxnRUFBZ0UsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxTQUFTLDBCQUEwQiwyQkFBMkIsR0FBRyxTQUFTLHlCQUF5Qiw0QkFBNEIsR0FBRyxTQUFTLHlCQUF5Qiw0QkFBNEIsR0FBRyxTQUFTLHVCQUF1Qix3QkFBd0IsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsaUJBQWlCLHFDQUFxQyxHQUFHLGFBQWEsdUJBQXVCLHdCQUF3QixHQUFHLFlBQVksdUJBQXVCLHlCQUF5QixHQUFHLFlBQVksd0JBQXdCLHlCQUF5QixHQUFHLGFBQWEsc0JBQXNCLHNCQUFzQixHQUFHLGFBQWEsd0JBQXdCLHlCQUF5QixHQUFHLFlBQVksd0JBQXdCLHlCQUF5QixHQUFHLGFBQWEsdUJBQXVCLG1CQUFtQixHQUFHLG1CQUFtQix5QkFBeUIsaUNBQWlDLHNEQUFzRCxHQUFHLGVBQWUseUJBQXlCLDRCQUE0QixpREFBaUQsR0FBRyx5QkFBeUIseUJBQXlCLGtDQUFrQyx1REFBdUQsR0FBRyxrQkFBa0IseUJBQXlCLGtDQUFrQyx1REFBdUQsR0FBRyxrQkFBa0IseUJBQXlCLGdDQUFnQyxxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLGlDQUFpQyxzREFBc0QsR0FBRyxtQkFBbUIseUJBQXlCLGlDQUFpQyxzREFBc0QsR0FBRyxvQkFBb0IseUJBQXlCLGtDQUFrQyx1REFBdUQsR0FBRyxrQkFBa0IseUJBQXlCLGtDQUFrQyx1REFBdUQsR0FBRyxrQkFBa0IseUJBQXlCLGdDQUFnQyxxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLGtDQUFrQyx1REFBdUQsR0FBRyxlQUFlLHVEQUF1RCxrRUFBa0UsNEZBQTRGLDRIQUE0SCxHQUFHLGNBQWMsc0ZBQXNGLHNHQUFzRywySEFBMkgsNEhBQTRILEdBQUcsK0JBQStCLG1DQUFtQyx3QkFBd0IsR0FBRyx1Q0FBdUMsNkJBQTZCLDJCQUEyQixvQ0FBb0MseURBQXlELEtBQUssR0FBRyw2QkFBNkIsa0JBQWtCLHlCQUF5Qiw0QkFBNEIsS0FBSyxtQkFBbUIsMEJBQTBCLDJCQUEyQixLQUFLLGtCQUFrQixzQkFBc0IseUJBQXlCLEtBQUssa0JBQWtCLDJCQUEyQiw0QkFBNEIsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLCtCQUErQix3QkFBd0IsS0FBSywrQkFBK0IsdUNBQXVDLEtBQUsseUJBQXlCLHVEQUF1RCxLQUFLLG1CQUFtQixtQkFBbUIsS0FBSyw0QkFBNEIsbUNBQW1DLHNDQUFzQyxLQUFLLDBCQUEwQixzQ0FBc0MseUNBQXlDLEtBQUssdUJBQXVCLHVCQUF1QixLQUFLLHNCQUFzQix5QkFBeUIscUJBQXFCLEtBQUsscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyxzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcsT0FBTywrRkFBK0YsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1B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QUNBLHdDQUF3QyxvREFBVyxHQUFHO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixnREFBRyx3QkFBd0IsWUFBWSxnREFBRyx3QkFBd0IsaUJBQWlCLG9EQUFXLHdCQUF3QjtBQUNsSjtBQUNBLGlDQUFpQyxvREFBVyxHQUFHO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQUcsd0JBQXdCLFlBQVksZ0RBQUcsd0JBQXdCLGlCQUFpQixvREFBVyx3QkFBd0I7QUFDbEo7QUFDQSxpQ0FBaUMsb0RBQVcsR0FBRztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRkFBZ0Ysd0JBQXdCO0FBQ3hHLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdERwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZG1CO0FBQ0U7QUFDSzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQVcsR0FBRztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sc0RBQVk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFb0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZGVncmVlLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9mb3JjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2hpZ2hsaWdodHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbGVmdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3JpZ2h0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG4ubS1cXFxcWzFweFxcXFxdIHtcXG4gIG1hcmdpbjogMXB4O1xcbn1cXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5teC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ubXgtXFxcXFszcHhcXFxcXSB7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5teS1cXFxcWzIwcHhcXFxcXSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLm15LTMge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5teS0xIHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ubXQtOCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4ubWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmgtXFxcXFs0MHB4XFxcXF0ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaC1cXFxcWzVweFxcXFxdIHtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4uaC1cXFxcWzdweFxcXFxdIHtcXG4gIGhlaWdodDogN3B4O1xcbn1cXG4uaC1cXFxcWzEwcHhcXFxcXSB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5oLVxcXFxbNTBweFxcXFxdIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmgtXFxcXFsxMDB2aFxcXFxdIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5oLTIwIHtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuLmgtXFxcXFszMHB4XFxcXF0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uaC1cXFxcWzEwMFxcXFwlXFxcXF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udy1cXFxcWzQwcHhcXFxcXSB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuLnctXFxcXFs1cHhcXFxcXSB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG4udy1cXFxcWzdweFxcXFxdIHtcXG4gIHdpZHRoOiA3cHg7XFxufVxcbi53LVxcXFxbMTBweFxcXFxdIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4udy1cXFxcWzUwcHhcXFxcXSB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLnctMjAge1xcbiAgd2lkdGg6IDVyZW07XFxufVxcbi53LVxcXFxbMzBweFxcXFxdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubWF4LXctXFxcXFsxNTAwcHhcXFxcXSB7XFxuICBtYXgtd2lkdGg6IDE1MDBweDtcXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmFuaW1hdGUtc3BpbiB7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1jb2xzLTUge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5nYXAtMSB7XFxuICBnYXA6IDAuMjVyZW07XFxufVxcbi5nYXAtNCB7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYXAteC0yIHtcXG4gIC1tb3otY29sdW1uLWdhcDogMC41cmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxufVxcbi5nYXAteS0zIHtcXG4gIHJvdy1nYXA6IDAuNzVyZW07XFxufVxcbi5nYXAteS01IHtcXG4gIHJvdy1nYXA6IDEuMjVyZW07XFxufVxcbi5nYXAteS0yIHtcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXG59XFxuLmdhcC14LTEge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjI1cmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjI1cmVtO1xcbn1cXG4uZ2FwLXgtMyB7XFxuICAtbW96LWNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxufVxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5yb3VuZGVkLTN4bCB7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxufVxcbi5yb3VuZGVkLXhsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxufVxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5yb3VuZGVkLXQteGwge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43NXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjc1cmVtO1xcbn1cXG4uYm9yZGVyLVxcXFxbMVxcXFwuNXB4XFxcXF0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxLjVweDtcXG59XFxuLmJvcmRlci1cXFxcWzJweFxcXFxdIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG4uYm9yZGVyLVxcXFxbMXB4XFxcXF0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItYmxhY2sge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktNDAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1ncmF5LTIwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIDEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5maWxsLWJsdWUtMzAwIHtcXG4gIGZpbGw6ICM5M2M1ZmQ7XFxufVxcbi5wLTEge1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnB5LTEge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLnB5LTMge1xcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb250LXBvcHBpbnMge1xcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC02eGwge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LWFtYmVyLTUwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI0NSwgMTU4LCAxMSwgMSk7XFxuICBjb2xvcjogcmdiYSgyNDUsIDE1OCwgMTEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ibGFjayB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LVxcXFxbXFxcXCM5YmEzYWVcXFxcXSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDE1NSwgMTYzLCAxNzQsIDEpO1xcbiAgY29sb3I6IHJnYmEoMTU1LCAxNjMsIDE3NCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgMSk7XFxuICBjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtYmx1ZS02MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgMSk7XFxuICBjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXRlYWwtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoNDUsIDIxMiwgMTkxLCAxKTtcXG4gIGNvbG9yOiByZ2JhKDQ1LCAyMTIsIDE5MSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWFtYmVyLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI1MSwgMTkxLCAzNiwgMSk7XFxuICBjb2xvcjogcmdiYSgyNTEsIDE5MSwgMzYsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC12aW9sZXQtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMTY3LCAxMzksIDI1MCwgMSk7XFxuICBjb2xvcjogcmdiYSgxNjcsIDEzOSwgMjUwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcm9zZS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTEsIDExMywgMTMzLCAxKTtcXG4gIGNvbG9yOiByZ2JhKDI1MSwgMTEzLCAxMzMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1jeWFuLTUwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDYsIDE4MiwgMjEyLCAxKTtcXG4gIGNvbG9yOiByZ2JhKDYsIDE4MiwgMjEyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0xMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCAxKTtcXG4gIGNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uc2hhZG93LTJ4bCB7XFxuICAtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMjVweCA1MHB4IC0xMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1tZCB7XFxuICAtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDRweCA2cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuXFxuICAuZGFya1xcXFw6dGV4dC1ncmF5LTUwMCB7XFxuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCAxKTtcXG4gICAgY29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLm1kXFxcXDpteS0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOm14LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOm15LTAge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6bXgtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjI1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIuMjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOmZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLm1kXFxcXDpoLVxcXFxbMTAwdmhcXFxcXSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAubWRcXFxcOm1heC1oLVxcXFxbNjAwcHhcXFxcXSB7XFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgfVxcblxcbiAgLm1kXFxcXDpncmlkLWNvbHMtc2lkZWJhciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuM2ZyO1xcbiAgfVxcblxcbiAgLm1kXFxcXDpncmlkLWNvbHMtMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Z2FwLTMge1xcbiAgICBnYXA6IDAuNzVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnJvdW5kZWQtci1ub25lIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6cm91bmRlZC1sLXhsIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC43NXJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6dGV4dC1sZWZ0IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6dGV4dC02eGwge1xcbiAgICBmb250LXNpemU6IDMuNzVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLm1kXFxcXDp0ZXh0LWxnIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnRleHQtN3hsIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLHdSQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtDQUFjO0VBQWQsMEJBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FB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QjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO09BQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFB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QTtJQUFBO0dDQUE7O0VEQUE7SUFBQSw2QkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQ0NBQTtJREFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsb0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsa0JDQUE7SURBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdG9GKHRlbXApIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKDEuOCAqICh0ZW1wIC0gMjczLjE1KSArIDMyKSk7XG59XG5cbmZ1bmN0aW9uIHRvQyh0ZW1wKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHRlbXAgLSAyNzMuMTUpO1xufVxuXG5mdW5jdGlvbiB0b1RpbWUoem9uZSwgZm9ybSkge1xuICByZXR1cm4gbW9tZW50KCkudXRjT2Zmc2V0KHpvbmUgLyA2MCkuZm9ybWF0KGZvcm0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59XG5cbmZ1bmN0aW9uIHN1blJpc2VTZXQoem9uZSwgdGltZSkge1xuICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lLCAnWCcpLmFkZCh6b25lLCAnc2Vjb25kcycpLmZvcm1hdCgnaDptbSBBJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuZnVuY3Rpb24gdG9NcGgoc3BlZWQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3Ioc3BlZWQgKiAyLjIzNjkpO1xufVxuXG5leHBvcnQge1xuICB0b0YsIHRvQywgdG9UaW1lLCBzdW5SaXNlU2V0LCB0b01waCxcbn07XG4iLCIvLyBpbXBvcnQgeyBwYXJzZUludCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB0b0YsIHRvQyB9IGZyb20gJy4vY29udmVyc2lvbic7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5mdW5jdGlvbiB1cGRhdGVVbml0KHVuaXQpe1xuICBjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0JylcblxuICBpZiAodW5pdC5kYXRhc2V0LnRlbXAgPT0gJ2YnKXtcbiAgICB1bml0LmRhdGFzZXQudGVtcCA9ICdjJ1xuICAgIHVuaXRzLmZvckVhY2goKHUpID0+IHUuaW5uZXJIVE1MID0gJ0MnKVxuXG4gIH0gZWxzZSB7XG4gICAgdW5pdC5kYXRhc2V0LnRlbXAgPSAnZidcbiAgICB1bml0cy5mb3JFYWNoKCh1KSA9PiB1LmlubmVySFRNTCA9ICdGJylcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VEZWdyZWUoKSB7XG4gIGNvbnN0IHRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAnKTtcbiAgbGV0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cycpXG5cbiAgdGVtcHMuZm9yRWFjaCgodGVtcCkgPT4ge1xuICAgICh1bml0LmRhdGFzZXQudGVtcCA9PSAnZicpID8gdGVtcC5pbm5lckhUTUwgPSB0ZW1wLmRhdGFzZXQuYyA6IHRlbXAuaW5uZXJIVE1MID0gdGVtcC5kYXRhc2V0LmZcbiAgfSlcbiAgdXBkYXRlVW5pdCh1bml0KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGVtcCh0ZW1wKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cycpLmRhdGFzZXQudGVtcCA9PT0gJ2MnKSB7XG4gICAgcmV0dXJuIHRvQyh0ZW1wKTtcbiAgfVxuICByZXR1cm4gdG9GKHRlbXApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VW5pdCgpe1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKS5kYXRhc2V0LnRlbXAgPT0gJ2MnKSB7XG4gICAgcmV0dXJuICdDJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnRidcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFuZ2VEZWdyZWUsIGRpc3BsYXlUZW1wLCBkaXNwbGF5VW5pdCB9O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuIiwiaW1wb3J0IHsgbGVmdEJhciB9IGZyb20gJy4vbGVmdCc7XG5pbXBvcnQgeyByaWdodEJhciB9IGZyb20gJy4vcmlnaHQnO1xuaW1wb3J0IHsgY2hhbmdlRGVncmVlIH0gZnJvbSAnLi9kZWdyZWUnO1xuXG5mdW5jdGlvbiBhcHBlbmRSZXN1bHRzKGNvbnRlbnQpIHtcbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzJyk7XG4gIHJlc3VsdHMuaW5uZXJIVE1MID0gY29udGVudDtcbn1cblxuZnVuY3Rpb24gaGlkZUNvbnRlbnQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkJykuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihjaXR5KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkJykuaW5uZXJIVE1MID0gJyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpLmlubmVySFRNTCA9IGBJbnZhbGlkIHNlYXJjaCBmb3IgXCIke2NpdHl9XCJgO1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyQ2FyZChjdXJyZW50LCBmb3JjYXN0KSB7XG4gIGFwcGVuZFJlc3VsdHMoXG4gICAgYFxuICAgICAgJHtsZWZ0QmFyKGN1cnJlbnQpfVxuICAgICAgJHtyaWdodEJhcihjdXJyZW50LCBmb3JjYXN0KX1cbiAgICBgLFxuICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0cyhjdXJyZW50LCBmb3JjYXN0KSB7XG4gIHdlYXRoZXJDYXJkKGN1cnJlbnQsIGZvcmNhc3QpO1xuICBkaXNwbGF5Q29udGVudCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVncmVlJykuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VEZWdyZWUpKTtcbn1cblxuZXhwb3J0IHtcbiAgYXBwZW5kUmVzdWx0cywgd2VhdGhlckNhcmQsIGhpZGVDb250ZW50LCBkaXNwbGF5Q29udGVudCwgZGlzcGxheUVycm9yLCBkaXNwbGF5UmVzdWx0cyxcbn07XG4iLCJpbXBvcnQge1xuICBoaWRlQ29udGVudCwgZGlzcGxheUVycm9yLCBkaXNwbGF5UmVzdWx0cyxcbn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgbG9hZGluZyB9IGZyb20gJy4vbG9hZCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKGNpdHkpIHtcbiAgaGlkZUNvbnRlbnQoKTtcbiAgbG9hZGluZygpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlMSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZTc3NzVkZDlmMjQzMjI1NmI3ZDU3ZWIzNTc4OTYwMDlgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7Y3VycmVudC5jb29yZC5sYXR9Jmxvbj0ke2N1cnJlbnQuY29vcmQubG9ufSZhcHBpZD1lNzc3NWRkOWYyNDMyMjU2YjdkNTdlYjM1Nzg5NjAwOWApO1xuICAgIGNvbnN0IGZvcmNhc3QgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xuXG4gICAgZGlzcGxheVJlc3VsdHMoY3VycmVudCwgZm9yY2FzdCk7XG4gIH0gY2F0Y2gge1xuICAgIGRpc3BsYXlFcnJvcihjaXR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyB0b0YsIHRvQyB9IGZyb20gJy4vY29udmVyc2lvbic7XG5pbXBvcnQgeyBkaXNwbGF5VGVtcCB9IGZyb20gJy4vZGVncmVlJztcblxuZnVuY3Rpb24gZm9yY2FzdENhcmRzKGZvcmNhc3QsIGkgPSAwLCBkYXRlID0gJycsIGNhcmRzID0gJycpIHtcblxuICBmb3JjYXN0Lmxpc3QuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgaWYgKGRhdGUgIT0gbW9tZW50KGRheS5kdF90eHQpLmZvcm1hdCgnTU1NIEQnKSAmJiBpIDwgNSAmJiBkYXkud2VhdGhlclswXS5pY29uLmluY2x1ZGVzKCdkJykpIHtcbiAgICAgIGkgKz0gMVxuICAgICAgY2FyZHMgKz0gXG4gICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXktMyBweS0zIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWQgbWQ6dGV4dC1sZ1wiPiR7bW9tZW50KGRheS5kdF90eHQpLmZvcm1hdCgnTU1NIEQnKX08L3NwYW4+IFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInctWzQwcHhdIGgtWzQwcHhdXCJzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RheS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggdGV4dC1zbSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtZj1cIiR7dG9GKGRheS5tYWluLnRlbXBfbWF4KX1cIiBkYXRhLWM9XCIke3RvQyhkYXkubWFpbi50ZW1wX21heCl9XCIgY2xhc3M9XCJ0ZW1wXCI+JHtkaXNwbGF5VGVtcChkYXkubWFpbi50ZW1wX21heCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs1cHhdIGgtWzVweF0gYm9yZGVyLWJsYWNrIGJvcmRlci1bMS41cHhdIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWY9XCIke3RvRihkYXkubWFpbi50ZW1wX21pbil9XCIgZGF0YS1jPVwiJHt0b0MoZGF5Lm1haW4udGVtcF9taW4pfVwiIGNsYXNzPVwidGVtcFwiPiR7ZGlzcGxheVRlbXAoZGF5Lm1haW4udGVtcF9taW4pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1bNXB4XSBoLVs1cHhdIGJvcmRlci1ncmF5LTQwMCBib3JkZXItWzEuNXB4XSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgIGRhdGUgPSBtb21lbnQoZGF5LmR0X3R4dCkuZm9ybWF0KCdNTU0gRCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjYXJkcztcbn1cblxuZXhwb3J0IHsgZm9yY2FzdENhcmRzIH07XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iLCJpbXBvcnQgeyBzdW5SaXNlU2V0LCB0b01waCB9IGZyb20gJy4vY29udmVyc2lvbic7XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodENhcmRzKGN1cnJlbnQpIHtcbiAgcmV0dXJuIGBcbiAgPCEtLSBIdW1pZGl0eSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAteS01IHB4LTQgcHktMyByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWRcIj5IdW1pZGl0eTwvc3Bhbj5cbiAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwidGV4dC1ibHVlLTYwMCB0ZXh0LTJ4bFwiIG5hbWU9XCJ3YXRlclwiPjwvaW9uLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC00eGxcIj4ke2N1cnJlbnQubWFpbi5odW1pZGl0eX08L3NwYW4+XG4gICAgICAgIDxzcGFuPiU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gVmlzaWJpbGl0eSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAteS01IHB4LTQgcHktMyByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWRcIj5WaXNpYmlsaXR5PC9zcGFuPlxuICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJ0ZXh0LTJ4bCB0ZXh0LXRlYWwtNDAwXCIgbmFtZT1cImV5ZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC00eGxcIj4ke01hdGguZmxvb3IoY3VycmVudC52aXNpYmlsaXR5IC8gMTAwMCl9azwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gU3VuIHJpc2Uvc2V0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC15LTIgcHgtNCBweS0zIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tZFwiPlN1bnNldCAmIFN1bnJpc2U8L3NwYW4+XG4gICAgICAgIDxpb24taWNvbiBjbGFzcz1cInRleHQtYW1iZXItNDAwIHRleHQtMnhsXCIgbmFtZT1cInN1bm55XCI+PC9pb24taWNvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cbiAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJ0ZXh0LWJsYWNrXCIgbmFtZT1cImFycm93LXVwXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWRcIj4ke3N1blJpc2VTZXQoY3VycmVudC5zeXMuc3VucmlzZSwgY3VycmVudC50aW1lem9uZSl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cbiAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJ0ZXh0LWJsYWNrXCIgbmFtZT1cImFycm93LWRvd25cIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tZFwiPiR7c3VuUmlzZVNldChjdXJyZW50LnN5cy5zdW5zZXQsIGN1cnJlbnQudGltZXpvbmUpfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gQ0xPVURJTkVTUyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAteS01IHB4LTQgcHktMyByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWRcIj5DbG91ZGluZXNzPC9zcGFuPlxuICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJ0ZXh0LXZpb2xldC00MDAgdGV4dC0yeGxcIiBuYW1lPVwiY2xvdWRcIj48L2lvbi1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtNHhsXCI+JHtjdXJyZW50LmNsb3Vkcy5hbGx9PC9zcGFuPlxuICAgICAgICA8c3Bhbj4lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFdJTkQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZ2FwLXktNSBweC00IHB5LTMgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW1kXCI+V2luZCBzcGVlZDwvc3Bhbj5cbiAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwidGV4dC1yb3NlLTQwMCB0ZXh0LTJ4bFwiIG5hbWU9XCJzcGVlZG9tZXRlclwiPjwvaW9uLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC00eGxcIj4ke3RvTXBoKGN1cnJlbnQud2luZC5zcGVlZCl9bXBoPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIERJUkVDVElPTiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAteS01IHB4LTQgcHktMyByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbWRcIj5XaW5kIGRpcmVjdGlvbjwvc3Bhbj5cbiAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwidGV4dC1jeWFuLTUwMCB0ZXh0LTJ4bFwiIG5hbWU9XCJjb21wYXNzXCI+PC9pb24taWNvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LTR4bFwiPiR7Y3VycmVudC53aW5kLmRlZ308L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs3cHhdIGgtWzdweF0gYm9yZGVyLWJsYWNrIGJvcmRlci1bMnB4XSByb3VuZGVkLWZ1bGwgbXgtWzNweF1cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xufVxuXG5leHBvcnQgeyBoaWdobGlnaHRDYXJkcyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iLCIvLyBpbXBvcnQgeW91ciBmdW5jdGlvblxuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2gnO1xuLy8gaW1wb3J0IHsgY2hhbmdlRGVncmVlIH0gZnJvbSAnLi9kZWdyZWUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgZmV0Y2hBcGkoY2l0eS52YWx1ZSk7XG4gIGNpdHkudmFsdWUgPSAnJztcbn0pO1xuIiwiaW1wb3J0IHsgdG9GLCB0b0MsIHRvVGltZSB9IGZyb20gJy4vY29udmVyc2lvbic7XG5pbXBvcnQgeyBkaXNwbGF5VGVtcCwgZGlzcGxheVVuaXQgfSBmcm9tICcuL2RlZ3JlZSc7XG5cbmZ1bmN0aW9uIGxlZnRCYXIoY3VycmVudCkge1xuICByZXR1cm4gYFxuICAgIDwhLS0gTEVGVCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBweS0yIHB4LTMgcm91bmRlZC10LXhsIG1kOnJvdW5kZWQtci1ub25lIG1kOnJvdW5kZWQtbC14bCBqdXN0aWZ5LWV2ZW5seVwiPlxuXG4gICAgICAgIDwhLS0gQ2l0eSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgZ2FwLXktMiBteS1bMjBweF0gbWQ6bXktMFwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInNlbGYtY2VudGVyIHRleHQtM3hsIHRleHQtY2VudGVyXCI+JHtjdXJyZW50Lm5hbWV9PC9oMz5cblxuICAgICAgICAgIDwhLS0gRGF0ZSB0aW1lIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteC0xIHRleHQtbGdcIj5cbiAgICAgICAgICAgIDxzcGFuPiR7dG9UaW1lKGN1cnJlbnQudGltZXpvbmUsICdkZGRkJyl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+JHt0b1RpbWUoY3VycmVudC50aW1lem9uZSwgJ2g6bW0gQScpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgY2xhc3M9XCJib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBUZW1wIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxzcGFuIGRhdGEtZj1cIiR7dG9GKGN1cnJlbnQubWFpbi50ZW1wKX1cIiBkYXRhLWM9XCIke3RvQyhjdXJyZW50Lm1haW4udGVtcCl9XCIgY2xhc3M9XCJ0ZW1wIHRleHQtNnhsIG1kOnRleHQtN3hsXCI+JHtkaXNwbGF5VGVtcChjdXJyZW50Lm1haW4udGVtcCl9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LVsxMHB4XSBoLVsxMHB4XSBib3JkZXItYmxhY2sgYm9yZGVyLVsycHhdIHJvdW5kZWQtZnVsbCBteC1bM3B4XVwiPjwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5pdCB0ZXh0LTR4bFwiPiR7ZGlzcGxheVVuaXQoKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gSGlnaC9Mb3cgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC14LTMgdGV4dC14bCBqdXN0aWZ5LWNlbnRlclwiPlxuXG4gICAgICAgICAgPCEtLSBIaWdoIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtZj1cIiR7dG9GKGN1cnJlbnQubWFpbi50ZW1wX21heCl9XCIgZGF0YS1jPVwiJHt0b0MoY3VycmVudC5tYWluLnRlbXBfbWF4KX1cIiBjbGFzcz1cInRlbXBcIj4ke2Rpc3BsYXlUZW1wKGN1cnJlbnQubWFpbi50ZW1wX21heCl9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctWzVweF0gaC1bNXB4XSBib3JkZXItYmxhY2sgYm9yZGVyLVsxLjVweF0gcm91bmRlZC1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXRcIj4ke2Rpc3BsYXlVbml0KCl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBMb3cgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1mPVwiJHt0b0YoY3VycmVudC5tYWluLnRlbXBfbWluKX1cIiBkYXRhLWM9XCIke3RvQyhjdXJyZW50Lm1haW4udGVtcF9taW4pfVwiIGNsYXNzPVwidGVtcFwiPiR7ZGlzcGxheVRlbXAoY3VycmVudC5tYWluLnRlbXBfbWluKX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1bNXB4XSBoLVs1cHhdIGJvcmRlci1ncmF5LTQwMCBib3JkZXItWzEuNXB4XSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5pdFwiPiR7ZGlzcGxheVVuaXQoKX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gSWNvbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGYtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInctWzUwcHhdIGgtWzUwcHhdXCJzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2N1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnXCI+JHtjdXJyZW50LndlYXRoZXJbMF0ubWFpbn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5leHBvcnQgeyBsZWZ0QmFyIH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUiLCJmdW5jdGlvbiBsb2FkaW5nKCkge1xuICBjb25zdCBpY29uID0gYFxuICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIGNsYXNzPVwiaC1bMTAwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidy0yMCBoLTIwIG1yLTIgdGV4dC1ncmF5LTEwMCBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNTAwIGZpbGwtYmx1ZS0zMDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIiBmaWxsPVwiY3VycmVudEZpbGxcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgY29uc3QgbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkJyk7XG4gIGxvYWQuaW5uZXJIVE1MID0gaWNvbjtcbn1cblxuZXhwb3J0IHsgbG9hZGluZyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iLCJpbXBvcnQgeyBkaXNwbGF5VW5pdCB9IGZyb20gJy4vZGVncmVlJztcbmltcG9ydCB7IGZvcmNhc3RDYXJkcyB9IGZyb20gJy4vZm9yY2FzdCc7XG5pbXBvcnQgeyBoaWdobGlnaHRDYXJkcyB9IGZyb20gJy4vaGlnaGxpZ2h0cyc7XG5cbmZ1bmN0aW9uIHJpZ2h0QmFyKGN1cnJlbnQsIGZvcmNhc3QpIHtcbiAgcmV0dXJuIGBcbiAgPCEtLSBSSUdIVCAtLT5cbiAgPGRpdiBjbGFzcz1cIm15LTMgbXgtMyBtZDpteC05IGZsZXggZmxleC1jb2wgZ2FwLXktM1wiPlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICA8c3BhbiBjbGFzcz1cImN1cnNvci1wb2ludGVyIHRleHQtMnhsIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPjUtZGF5IEZvcmNhc3Q8L3NwYW4+XG5cbiAgPGRpdiBjbGFzcz1cImRlZ3JlZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbCB3LVszMHB4XSBoLVszMHB4XSBzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LVs1cHhdIGgtWzVweF0gYm9yZGVyLWJsYWNrIGJvcmRlci1bMXB4XSByb3VuZGVkLWZ1bGwgbS1bMXB4XVwiPjwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInVuaXQgdGV4dC1zbVwiPiR7ZGlzcGxheVVuaXQoKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4gIFxuXG4gIDwhLS0gRm9yY2FzdCAtLT5cbiAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTUgZ2FwLTEgbWQ6Z2FwLTNcIj5cbiAgICAke2ZvcmNhc3RDYXJkcyhmb3JjYXN0KX1cbiAgPC9kaXY+XG5cbiAgPCEtLSBUb2RheXMgSGlnaGxpZ2h0cyAtLT5cbiAgPGg1IGNsYXNzPVwidGV4dC0yeGwgbXktMSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5Ub2RheSdzIEhpZ2hsaWdodHM8L2g1PlxuICA8ZGl2IGNsYXNzPVwiIGgtWzEwMCVdIGdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAke2hpZ2hsaWdodENhcmRzKGN1cnJlbnQpfVxuICA8L2Rpdj5cbjwvZGl2PlxuICBgO1xufVxuXG5leHBvcnQgeyByaWdodEJhciB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
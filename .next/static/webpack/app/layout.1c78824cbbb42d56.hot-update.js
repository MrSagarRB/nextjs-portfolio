"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4b4496096cb6\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/OTYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRiNDQ5NjA5NmNiNlwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"(app-client)/./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"(app-client)/./node_modules/react-icons/io/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst NAV_ITEM = [\n    {\n        label: \"Home\",\n        page: \"home\"\n    },\n    {\n        label: \"About\",\n        page: \"about\"\n    },\n    {\n        label: \"Project\",\n        page: \"project\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const { systemTheme , theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    const currentTheme = theme === \"system\" ? systemTheme : theme;\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:flex md:items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between py-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:py-5 md:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: \"Sagar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: navbar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdClose, {\n                                        size: 30\n                                    }, void 0, false, {\n                                        fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 27\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdMenu, {\n                                        size: 30\n                                    }, void 0, false, {\n                                        fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 53\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:flex md:space-x-6 justify-center items-center\",\n                        children: [\n                            NAV_ITEM.map((item, idx)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: item.label\n                                }, idx, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 22\n                                }, undefined);\n                            }),\n                            systemTheme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setTheme(\"light\"),\n                                className: \"bg-slate-100 p-2 rounded-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiSunLine, {\n                                    color: \"black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setTheme(\"dark\"),\n                                className: \"bg-slate-100 p-2 rounded-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiMoonFill, {}, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/coverletter/tailwindcss-and-nextjs-portfolio/components/Navbar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"hM9V5TmXlqihuJaZYojEfXJG4FI=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUNZO0FBQ0k7QUFDRjtBQU9yRCxNQUFNTyxXQUEyQjtJQUMvQjtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdiLHFEQUFRQTtJQUNqRCxNQUFNYyxlQUFlRixVQUFVLFdBQVdELGNBQWNDLEtBQUs7SUFDN0QsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQTtJQUVwQyxxQkFDRSw4REFBQ2U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFDQyw0RUFBQ0E7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQUdGLFdBQVU7OENBQXFCOzs7Ozs7Ozs7Ozs0QkFDOUI7MENBQ1AsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDRzs4Q0FDRU4sdUJBQVMsOERBQUNWLHFEQUFTQTt3Q0FBQ2lCLE1BQU07Ozs7O2tFQUFTLDhEQUFDaEIsb0RBQVFBO3dDQUFDZ0IsTUFBTTs7Ozs7aURBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2xFLDhEQUFDSDs4QkFDQyw0RUFBQ0E7d0JBQUlELFdBQVU7OzRCQUNaWCxTQUFTZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLE1BQVE7Z0NBQzNCLHFCQUFPLDhEQUFDQzs4Q0FBYUYsS0FBS2hCLEtBQUs7bUNBQWhCaUI7Ozs7OzRCQUNqQjs0QkFDQ2QsZ0JBQWdCLHVCQUNmLDhEQUFDVTtnQ0FDQ00sU0FBUyxJQUFNZCxTQUFTO2dDQUN4QkssV0FBVTswQ0FFViw0RUFBQ2YscURBQVNBO29DQUFDeUIsT0FBTTs7Ozs7Ozs7OzswREFHbkIsOERBQUNQO2dDQUNDTSxTQUFTLElBQU1kLFNBQVM7Z0NBQ3hCSyxXQUFVOzBDQUVWLDRFQUFDZCxzREFBVUE7Ozs7Ozs7Ozt5Q0FFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTdDTU07O1FBQ3FDVixpREFBUUE7OztLQUQ3Q1U7QUErQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJpU3VuTGluZSwgUmlNb29uRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuXG5pbnRlcmZhY2UgTmF2SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgTkFWX0lURU06IEFycmF5PE5hdkl0ZW0+ID0gW1xuICB7XG4gICAgbGFiZWw6IFwiSG9tZVwiLFxuICAgIHBhZ2U6IFwiaG9tZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQWJvdXRcIixcbiAgICBwYWdlOiBcImFib3V0XCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJQcm9qZWN0XCIsXG4gICAgcGFnZTogXCJwcm9qZWN0XCIsXG4gIH0sXG5dO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3lzdGVtVGhlbWUsIHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY3VycmVudFRoZW1lID0gdGhlbWUgPT09IFwic3lzdGVtXCIgPyBzeXN0ZW1UaGVtZSA6IHRoZW1lO1xuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gcHgtNCBiZy13aGl0ZSBzaGFkb3cgZml4ZWQgdG9wLTAgei01MCBkYXJrOmJnLXN0b25lLTkwMCBkYXJrOmJvcmRlci1iIGRhcms6Ym9yZGVyLXN0b25lLTYwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnB5LTUgbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlNhZ2FyPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAge25hdmJhciA/IDxJb01kQ2xvc2Ugc2l6ZT17MzB9IC8+IDogPElvTWRNZW51IHNpemU9ezMwfSAvPn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IG1kOnNwYWNlLXgtNiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtOQVZfSVRFTS5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGEga2V5PXtpZHh9PntpdGVtLmxhYmVsfTwvYT47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtzeXN0ZW1UaGVtZSA9PT0gXCJkYXJrXCIgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCBwLTIgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmlTdW5MaW5lIGNvbG9yPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImRhcmtcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHAtMiByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSaU1vb25GaWxsIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJSaVN1bkxpbmUiLCJSaU1vb25GaWxsIiwiSW9NZENsb3NlIiwiSW9NZE1lbnUiLCJOQVZfSVRFTSIsImxhYmVsIiwicGFnZSIsIk5hdmJhciIsInN5c3RlbVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsImN1cnJlbnRUaGVtZSIsIm5hdmJhciIsInNldE5hdmJhciIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiYnV0dG9uIiwic2l6ZSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJhIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});
webpackHotUpdate("static\\development\\pages\\questions\\[slug].js",{

/***/ "./components/tag/index.js":
/*!*********************************!*\
  !*** ./components/tag/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag.module.css */ "./components/tag/tag.module.css");
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Shivraj\\OneDrive\\Documents\\GitHub\\community-front-end\\components\\tag\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Tag = function Tag(_ref) {
  var children = _ref.children,
      className = _ref.className,
      count = _ref.count,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className", "count"]);

  return count ? __jsx("div", {
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tag, className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), children)), __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.multiplier,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "\xD7"), "\xA0", __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.count,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, count)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tag, className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), children));
};

_c = Tag;
/* harmony default export */ __webpack_exports__["default"] = (Tag);

var _c;

$RefreshReg$(_c, "Tag");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWciLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvdW50IiwicHJvcHMiLCJwYXRobmFtZSIsInF1ZXJ5IiwidGFnIiwiY24iLCJzdHlsZXMiLCJtdWx0aXBsaWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEM7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsTUFBakNDLFNBQWlDLFFBQWpDQSxTQUFpQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUN4RCxTQUFPRCxLQUFLLEdBQ1Y7QUFBSyxTQUFLLEVBQUUsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTtBQUFFRSxjQUFRLEVBQUUsR0FBWjtBQUFpQkMsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRU47QUFBUDtBQUF4QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRU8saURBQUUsQ0FBQ0Msc0RBQU0sQ0FBQ0YsR0FBUixFQUFhTCxTQUFiO0FBQWhCLEtBQTZDRSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dILFFBREgsQ0FERixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVRLHNEQUFNLENBQUNDLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixVQVFFO0FBQU0sYUFBUyxFQUFFRCxzREFBTSxDQUFDTixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDQSxLQUFoQyxDQVJGLENBRFUsR0FhVixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFO0FBQUVFLGNBQVEsRUFBRSxHQUFaO0FBQWlCQyxXQUFLLEVBQUU7QUFBRUMsV0FBRyxFQUFFTjtBQUFQO0FBQXhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFTyxpREFBRSxDQUFDQyxzREFBTSxDQUFDRixHQUFSLEVBQWFMLFNBQWI7QUFBaEIsS0FBNkNFLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0gsUUFESCxDQURGLENBYkY7QUFtQkQsQ0FwQkQ7O0tBQU1ELEc7QUFzQlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxxdWVzdGlvbnNcXFtzbHVnXS5qcy4zYWZiMGEyMTg2YzJkYjQ1ZWMzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhZy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgVGFnID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY291bnQsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gY291bnQgPyAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgdGFnOiBjaGlsZHJlbiB9IH19PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZywgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVsdGlwbGllcn0+w5c8L3NwYW4+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudH0+e2NvdW50fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKSA6IChcclxuICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgdGFnOiBjaGlsZHJlbiB9IH19PlxyXG4gICAgICA8YSBjbGFzc05hbWU9e2NuKHN0eWxlcy50YWcsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/auth-forms/index.js":
/*!****************************************!*\
  !*** ./components/auth-forms/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form */ "./components/auth-forms/login-form/index.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-form */ "./components/auth-forms/signup-form/index.js");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-forms.module.css */ "./components/auth-forms/auth-forms.module.css");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Shivraj\\OneDrive\\Documents\\GitHub\\community-front-end\\components\\auth-forms\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var AuthForms = function AuthForms(_ref) {
  _s();

  var _ref$screen = _ref.screen,
      screen = _ref$screen === void 0 ? 'signup' : _ref$screen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(screen),
      form = _useState[0],
      setForm = _useState[1];

  return __jsx("div", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, form == 'login' ? 'Log In' : 'Sign Up', " - Community")), __jsx(_icons__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), form === 'login' ? __jsx(_login_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 27
    }
  }) : __jsx(_signup_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }
  }), form === 'login' ? __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Don\u2019t have an account?", ' ', __jsx("a", {
    onClick: function onClick() {
      return setForm('signup');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Sign up")) : __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Already have an account?", ' ', __jsx("a", {
    onClick: function onClick() {
      return setForm('login');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Log in")));
};

_s(AuthForms, "etdXuEfWTN4NVJeHv8BDczt8rsQ=");

_c = AuthForms;
/* harmony default export */ __webpack_exports__["default"] = (AuthForms);

var _c;

$RefreshReg$(_c, "AuthForms");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgtZm9ybXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXV0aEZvcm1zIiwic2NyZWVuIiwidXNlU3RhdGUiLCJmb3JtIiwic2V0Rm9ybSIsInN0eWxlcyIsImF1dGhNb2RhbCIsImxvZ28iLCJhdXRoU3dpY2hNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTJCO0FBQUE7O0FBQUEseUJBQXhCQyxNQUF3QjtBQUFBLE1BQXhCQSxNQUF3Qiw0QkFBZixRQUFlOztBQUFBLGtCQUNuQkMsc0RBQVEsQ0FBQ0QsTUFBRCxDQURXO0FBQUEsTUFDcENFLElBRG9DO0FBQUEsTUFDOUJDLE9BRDhCOztBQUczQyxTQUNFO0FBQUssYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCxJQUFJLElBQUksT0FBUixHQUFrQixRQUFsQixHQUE2QixTQUFyQywwQkFERixDQURGLEVBS0UsTUFBQywyQ0FBRDtBQUFNLGFBQVMsRUFBRUUsNkRBQU0sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBT0dKLElBQUksS0FBSyxPQUFULEdBQW1CLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQixHQUFtQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQdEMsRUFTR0EsSUFBSSxLQUFLLE9BQVQsR0FDQztBQUFHLGFBQVMsRUFBRUUsNkRBQU0sQ0FBQ0csZ0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQ3lCLEdBRHpCLEVBRUU7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFNSixPQUFPLENBQUMsUUFBRCxDQUFiO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsQ0FERCxHQU1DO0FBQUcsYUFBUyxFQUFFQyw2REFBTSxDQUFDRyxnQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDMkIsR0FEM0IsRUFFRTtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQU1KLE9BQU8sQ0FBQyxPQUFELENBQWI7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQWZKLENBREY7QUF1QkQsQ0ExQkQ7O0dBQU1KLFM7O0tBQUFBLFM7QUE0QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmI4OThhMjc5M2JlM2UyOTVlNDg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4tZm9ybSdcclxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi9zaWdudXAtZm9ybSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdXRoLWZvcm1zLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBdXRoRm9ybXMgPSAoeyBzY3JlZW4gPSAnc2lnbnVwJyB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoc2NyZWVuKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoTW9kYWx9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2Zvcm0gPT0gJ2xvZ2luJyA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnfSAtIENsb25lIG9mIENvbW11bml0eTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxMb2dvIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XHJcblxyXG4gICAgICB7Zm9ybSA9PT0gJ2xvZ2luJyA/IDxMb2dpbkZvcm0gLz4gOiA8U2lnblVwRm9ybSAvPn1cclxuXHJcbiAgICAgIHtmb3JtID09PSAnbG9naW4nID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhTd2ljaE1lc3NhZ2V9PlxyXG4gICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/eycgJ31cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ251cCcpfT5TaWduIHVwPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hdXRoU3dpY2hNZXNzYWdlfT5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtKCdsb2dpbicpfT5Mb2cgaW48L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate("static\\development\\pages\\tags.js",{

/***/ "./pages/tags.js":
/*!***********************!*\
  !*** ./pages/tags.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_page_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/page-title */ "./components/page-title/index.js");
/* harmony import */ var _components_search_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/search-input */ "./components/search-input/index.js");
/* harmony import */ var _components_tag_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tag-list */ "./components/tag-list/index.js");
/* harmony import */ var _components_tag_list_tag_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tag-list/tag-item */ "./components/tag-list/tag-item/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/icons */ "./components/icons/index.js");



var _jsxFileName = "C:\\Users\\Shivraj\\OneDrive\\Documents\\GitHub\\community-front-end\\pages\\tags.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










function TagsPage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (searchTerm === null) {
      var fetchUser = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _yield$publicFetch$ge, data;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _util_fetcher__WEBPACK_IMPORTED_MODULE_4__["publicFetch"].get('/tags');

                case 2:
                  _yield$publicFetch$ge = _context.sent;
                  data = _yield$publicFetch$ge.data;
                  setTags(data);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function fetchUser() {
          return _ref.apply(this, arguments);
        };
      }();

      fetchUser();
    } else {
      var delayDebounceFn = setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$publicFetch$ge2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoading(true);
                _context2.next = 3;
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_4__["publicFetch"].get(searchTerm ? "/tags/".concat(searchTerm) : "/tags");

              case 3:
                _yield$publicFetch$ge2 = _context2.sent;
                data = _yield$publicFetch$ge2.data;
                setTags(data);
                setLoading(false);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), 500);
      return function () {
        return clearTimeout(delayDebounceFn);
      };
    }
  }, [searchTerm]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    extra: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Tags - Community")), __jsx(_components_page_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Tags",
    borderBottom: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question."), __jsx(_components_search_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "Filter by tag name",
    autoFocus: true,
    isLoading: loading,
    autoComplete: "off",
    type: "text",
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), !tags && __jsx("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), tags && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_tag_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, tags === null || tags === void 0 ? void 0 : tags.map(function (_ref3) {
    var count = _ref3.count,
        _id = _ref3._id;
    return __jsx(_components_tag_list_tag_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: _id,
      count: count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, _id);
  })), tags.length == 0 && __jsx("p", {
    className: "not-found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 32
    }
  }, "No tags matched your search.")));
}

_s(TagsPage, "Ep05xYLYfyilvdUW5UViwrEG6dU=");

_c = TagsPage;
/* harmony default export */ __webpack_exports__["default"] = (TagsPage);

var _c;

$RefreshReg$(_c, "TagsPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YWdzLmpzIl0sIm5hbWVzIjpbIlRhZ3NQYWdlIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInRhZ3MiLCJzZXRUYWdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXIiLCJwdWJsaWNGZXRjaCIsImdldCIsImRhdGEiLCJkZWxheURlYm91bmNlRm4iLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiY291bnQiLCJfaWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsSUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVNRixzREFBUSxDQUFDLElBQUQsQ0FGZDtBQUFBLE1BRVhHLElBRlc7QUFBQSxNQUVMQyxPQUZLOztBQUFBLG1CQUdZSixzREFBUSxDQUFDLEtBQUQsQ0FIcEI7QUFBQSxNQUdYSyxPQUhXO0FBQUEsTUFHRkMsVUFIRTs7QUFLbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QixVQUFNTyxTQUFTO0FBQUEsb01BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ09DLHlEQUFXLENBQUNDLEdBQVosQ0FBZ0IsT0FBaEIsQ0FEUDs7QUFBQTtBQUFBO0FBQ1JDLHNCQURRLHlCQUNSQSxJQURRO0FBRWhCUCx5QkFBTyxDQUFDTyxJQUFELENBQVA7O0FBRmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUg7O0FBQUEsd0JBQVRILFNBQVM7QUFBQTtBQUFBO0FBQUEsU0FBZjs7QUFLQUEsZUFBUztBQUNWLEtBUEQsTUFPTztBQUNMLFVBQU1JLGVBQWUsR0FBR0MsVUFBVSxnTUFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pDUCwwQkFBVSxDQUFDLElBQUQsQ0FBVjtBQURpQztBQUFBLHVCQUVWRyx5REFBVyxDQUFDQyxHQUFaLENBQ3JCVCxVQUFVLG1CQUFZQSxVQUFaLFdBRFcsQ0FGVTs7QUFBQTtBQUFBO0FBRXpCVSxvQkFGeUIsMEJBRXpCQSxJQUZ5QjtBQUtqQ1AsdUJBQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0FMLDBCQUFVLENBQUMsS0FBRCxDQUFWOztBQU5pQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFELElBTy9CLEdBUCtCLENBQWxDO0FBU0EsYUFBTztBQUFBLGVBQU1RLFlBQVksQ0FBQ0YsZUFBRCxDQUFsQjtBQUFBLE9BQVA7QUFDRDtBQUNGLEdBcEJRLEVBb0JOLENBQUNYLFVBQUQsQ0FwQk0sQ0FBVDtBQXNCQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixDQURGLEVBS0UsTUFBQyw4REFBRDtBQUFXLFNBQUssRUFBQyxNQUFqQjtBQUF3QixnQkFBWSxFQUFFLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUxBTEYsRUFXRSxNQUFDLGdFQUFEO0FBQ0UsZUFBVyxFQUFDLG9CQURkO0FBRUUsYUFBUyxNQUZYO0FBR0UsYUFBUyxFQUFFSSxPQUhiO0FBSUUsZ0JBQVksRUFBQyxLQUpmO0FBS0UsUUFBSSxFQUFDLE1BTFA7QUFNRSxZQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxhQUFPYixhQUFhLENBQUNhLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFvQkcsQ0FBQ2QsSUFBRCxJQUNDO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckJKLEVBMEJHQSxJQUFJLElBQ0gsbUVBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFZSxHQUFOLENBQVU7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxRQUFVQyxHQUFWLFNBQVVBLEdBQVY7QUFBQSxXQUNULE1BQUMscUVBQUQ7QUFBUyxTQUFHLEVBQUVBLEdBQWQ7QUFBbUIsV0FBSyxFQUFFRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLEdBREgsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGLEVBU0dqQixJQUFJLENBQUNrQixNQUFMLElBQWUsQ0FBZixJQUFvQjtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBVHZCLENBM0JKLENBREY7QUEwQ0Q7O0dBckVRdEIsUTs7S0FBQUEsUTtBQXVFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRhZ3MuanMuYjg5OGEyNzkzYmUzZTI5NWU0ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vdXRpbC9mZXRjaGVyJ1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUnXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dCdcclxuaW1wb3J0IFRhZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90YWctbGlzdCdcclxuaW1wb3J0IFRhZ0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy90YWctbGlzdC90YWctaXRlbSdcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMnXHJcblxyXG5mdW5jdGlvbiBUYWdzUGFnZSgpIHtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy90YWdzJylcclxuICAgICAgICBzZXRUYWdzKGRhdGEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoVXNlcigpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkZWxheURlYm91bmNlRm4gPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID8gYC90YWdzLyR7c2VhcmNoVGVybX1gIDogYC90YWdzYFxyXG4gICAgICAgIClcclxuICAgICAgICBzZXRUYWdzKGRhdGEpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSwgNTAwKVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWxheURlYm91bmNlRm4pXHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaFRlcm1dKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBleHRyYT17ZmFsc2V9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGFncyAtIENsb25lIG9mIENvbW11bml0eTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJUYWdzXCIgYm9yZGVyQm90dG9tPXtmYWxzZX0+XHJcbiAgICAgICAgQSB0YWcgaXMgYSBrZXl3b3JkIG9yIGxhYmVsIHRoYXQgY2F0ZWdvcml6ZXMgeW91ciBxdWVzdGlvbiB3aXRoIG90aGVyLFxyXG4gICAgICAgIHNpbWlsYXIgcXVlc3Rpb25zLiBVc2luZyB0aGUgcmlnaHQgdGFncyBtYWtlcyBpdCBlYXNpZXIgZm9yIG90aGVycyB0b1xyXG4gICAgICAgIGZpbmQgYW5kIGFuc3dlciB5b3VyIHF1ZXN0aW9uLlxyXG4gICAgICA8L1BhZ2VUaXRsZT5cclxuXHJcbiAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IHRhZyBuYW1lXCJcclxuICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHshdGFncyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3RhZ3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAge3RhZ3M/Lm1hcCgoeyBjb3VudCwgX2lkIH0pID0+IChcclxuICAgICAgICAgICAgICA8VGFnSXRlbSBrZXk9e19pZH0gY291bnQ9e2NvdW50fT5cclxuICAgICAgICAgICAgICAgIHtfaWR9XHJcbiAgICAgICAgICAgICAgPC9UYWdJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFnTGlzdD5cclxuXHJcbiAgICAgICAgICB7dGFncy5sZW5ndGggPT0gMCAmJiA8cCBjbGFzc05hbWU9XCJub3QtZm91bmRcIj5ObyB0YWdzIG1hdGNoZWQgeW91ciBzZWFyY2guPC9wPn1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnc1BhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
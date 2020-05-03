webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_googleAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/googleAnalytics */ "./utils/googleAnalytics.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook-pixel */ "./node_modules/react-facebook-pixel/dist/fb-pixel.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/matthew/reactSandbox/bemoapp/client/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var __N_SSG = true;
function Home(_ref) {
  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get("password") === null && local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get("password") !== "8188739d9c64226d7f5e79ac13a73b9a2880089d") {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace("/login");
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data.analytics[0].google_analytics) {
      if (!window.GA_INITIALIZED) {
        Object(_utils_googleAnalytics__WEBPACK_IMPORTED_MODULE_2__["initGA"])(data.analytics[0].google_analytics);
        window.GA_INITIALIZED = true;
      }

      Object(_utils_googleAnalytics__WEBPACK_IMPORTED_MODULE_2__["logPageView"])();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data.analytics[0].facebook_analytics) {
      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default.a.init(data.analytics[0].facebook_analytics);
      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default.a.pageView();
    }
  });

  if (local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get("password") === null && local_storage__WEBPACK_IMPORTED_MODULE_10___default.a.get("password") !== "8188739d9c64226d7f5e79ac13a73b9a2880089d") {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "Redirecting..."));
  }

  return __jsx("div", {
    className: "jsx-764878121" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, data.homes[0].title), data.homes[0].meta_title && __jsx("meta", {
    name: "title",
    content: data.homes[0].meta_title,
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), data.homes[0].meta_description && __jsx("meta", {
    name: "description",
    content: data.homes[0].meta_description,
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), data.homes[0].no_index_enabled && __jsx("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx("main", {
    className: "jsx-764878121",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: data.homes[0].title,
    content: data.homes[0].content,
    image: data.homes[0].image.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "764878121",
    __self: this
  }, "html,body{margin:0;padding:0;font-family:Arial,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdHRoZXcvcmVhY3RTYW5kYm94L2JlbW9hcHAvY2xpZW50L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGK0IsQUFJOEIsQUFNYSxTQUxaLFVBQ29CLEdBS2xDLDBCQUpBIiwiZmlsZSI6Ii9ob21lL21hdHRoZXcvcmVhY3RTYW5kYm94L2JlbW9hcHAvY2xpZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSBcIi4uL3V0aWxzL2dvb2dsZUFuYWx5dGljc1wiO1xuaW1wb3J0IFJlYWN0UGl4ZWwgZnJvbSBcInJlYWN0LWZhY2Vib29rLXBpeGVsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBoYXNoIGZyb20gXCJvYmplY3QtaGFzaFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBscyBmcm9tIFwibG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbHMuZ2V0KFwicGFzc3dvcmRcIikgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxzLmdldChcInBhc3N3b3JkXCIpICE9PSBcIjgxODg3MzlkOWM2NDIyNmQ3ZjVlNzlhYzEzYTczYjlhMjg4MDA4OWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hbmFseXRpY3NbMF0uZ29vZ2xlX2FuYWx5dGljcykge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgICAgICAgICAgICBpbml0R0EoZGF0YS5hbmFseXRpY3NbMF0uZ29vZ2xlX2FuYWx5dGljcyk7XG4gICAgICAgICAgICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ1BhZ2VWaWV3KCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hbmFseXRpY3NbMF0uZmFjZWJvb2tfYW5hbHl0aWNzKSB7XG4gICAgICAgICAgICBSZWFjdFBpeGVsLmluaXQoZGF0YS5hbmFseXRpY3NbMF0uZmFjZWJvb2tfYW5hbHl0aWNzKTtcbiAgICAgICAgICAgIFJlYWN0UGl4ZWwucGFnZVZpZXcoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgICBscy5nZXQoXCJwYXNzd29yZFwiKSA9PT0gbnVsbCAmJlxuICAgICAgICBscy5nZXQoXCJwYXNzd29yZFwiKSAhPT0gXCI4MTg4NzM5ZDljNjQyMjZkN2Y1ZTc5YWMxM2E3M2I5YTI4ODAwODlkXCJcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJlZGlyZWN0aW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e2RhdGEuaG9tZXNbMF0udGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5ob21lc1swXS5tZXRhX3RpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhLmhvbWVzWzBdLm1ldGFfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgID48L21ldGE+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5ob21lc1swXS5tZXRhX2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhLmhvbWVzWzBdLm1ldGFfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgID48L21ldGE+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5ob21lc1swXS5ub19pbmRleF9lbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPE5hdkJhcj48L05hdkJhcj5cbiAgICAgICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5ob21lc1swXS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZGF0YS5ob21lc1swXS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGF0YS5ob21lc1swXS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgPjwvUGFnZT5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsXCI7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcXVlcnk6IGB7XG4gICAgICAgICAgICAgICAgaG9tZXMgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIG1ldGFfdGl0bGUsXG4gICAgICAgICAgICAgICAgICBtZXRhX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgbm9faW5kZXhfZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFuYWx5dGljcyB7XG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIGdvb2dsZV9hbmFseXRpY3MsXG4gICAgICAgICAgICAgICAgICBmYWNlYm9va19hbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWAsXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5lcnJvcnMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IGpzb24uZGF0YSxcbiAgICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/matthew/reactSandbox/bemoapp/client/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2aab3749c7021cdc8dd2.hot-update.js.map
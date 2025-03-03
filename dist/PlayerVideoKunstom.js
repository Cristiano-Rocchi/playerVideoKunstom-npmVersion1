"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _video = _interopRequireDefault(require("video.js"));
require("video.js/dist/video-js.css");
var _PlayerVideoKunstomModule = _interopRequireDefault(require("./PlayerVideoKunstom.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PlayerVideoKunstom = function PlayerVideoKunstom(_ref) {
  var _ref$videoList = _ref.videoList,
    videoList = _ref$videoList === void 0 ? [] : _ref$videoList,
    onVideoChange = _ref.onVideoChange,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
    _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? false : _ref$loop,
    _ref$muted = _ref.muted,
    muted = _ref$muted === void 0 ? false : _ref$muted,
    _ref$volume = _ref.volume,
    volume = _ref$volume === void 0 ? 1 : _ref$volume,
    _ref$aspectRatio = _ref.aspectRatio,
    aspectRatio = _ref$aspectRatio === void 0 ? "16:9" : _ref$aspectRatio,
    _ref$doubleClickFulls = _ref.doubleClickFullscreen,
    doubleClickFullscreen = _ref$doubleClickFulls === void 0 ? true : _ref$doubleClickFulls,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? true : _ref$controls;
  var videoRef = (0, _react.useRef)(null);
  var playerRef = (0, _react.useRef)(null);
  var previewRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMounted = _useState2[0],
    setIsMounted = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentVideoIndex = _useState4[0],
    setCurrentVideoIndex = _useState4[1];
  (0, _react.useEffect)(function () {
    setIsMounted(true);
  }, []);
  (0, _react.useEffect)(function () {
    if (isMounted && videoRef.current && !playerRef.current && videoList.length > 0) {
      var _videoList$currentVid, _videoList$currentVid2;
      //wrapper div per le icons in controlBar
      var Component = _video["default"].getComponent("Component");
      var GroupedControls = /*#__PURE__*/function (_Component) {
        function GroupedControls(player, options) {
          var _this;
          _classCallCheck(this, GroupedControls);
          _this = _callSuper(this, GroupedControls, [player, options]);
          _this.addClass("vjs-grouped-controls");
          return _this;
        }
        _inherits(GroupedControls, _Component);
        return _createClass(GroupedControls, [{
          key: "createEl",
          value: function createEl() {
            var el = _video["default"].dom.createEl("div", {
              className: "vjs-grouped-controls"
            });
            return el;
          }
        }]);
      }(Component);
      _video["default"].registerComponent("GroupedControls", GroupedControls);
      var GroupedControls2 = /*#__PURE__*/function (_Component2) {
        function GroupedControls2(player, options) {
          var _this2;
          _classCallCheck(this, GroupedControls2);
          _this2 = _callSuper(this, GroupedControls2, [player, options]);
          _this2.addClass("vjs-grouped-controls-2");
          return _this2;
        }
        _inherits(GroupedControls2, _Component2);
        return _createClass(GroupedControls2, [{
          key: "createEl",
          value: function createEl() {
            var el = _video["default"].dom.createEl("div", {
              className: "vjs-grouped-controls-2"
            });
            var prevButton = _video["default"].dom.createEl("button", {
              className: "vjs-prev-button",
              innerHTML: "\n              <svg style=\"position: relative; top: 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <polyline points=\"15 18 9 12 15 6\"></polyline>\n              </svg><span style=\"position: relative; top: 2px;\">Precedente</span>\n            "
            });
            var nextButton = _video["default"].dom.createEl("button", {
              className: "vjs-next-button",
              innerHTML: "\n              <span style=\"position: relative; top: 2px;\">Successivo</span><svg style=\"position: relative; top: 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <polyline points=\"9 18 15 12 9 6\"></polyline>\n              </svg>\n            "
            });

            //Eventi click per cambiare video
            prevButton.addEventListener("click", function () {
              if (window.changeVideo) {
                window.changeVideo(-1); // Vai al video precedente
              }
            });
            nextButton.addEventListener("click", function () {
              if (window.changeVideo) {
                window.changeVideo(1); // Vai al video successivo
              }
            });
            el.appendChild(prevButton);
            el.appendChild(nextButton);
            return el;
          }
        }]);
      }(Component);
      _video["default"].registerComponent("GroupedControls2", GroupedControls2);
      playerRef.current = (0, _video["default"])(videoRef.current, {
        controls: controls,
        autoplay: autoplay,
        loop: loop,
        muted: muted,
        volume: volume,
        preload: "auto",
        fluid: true,
        responsive: true,
        aspectRatio: aspectRatio,
        doubleClickFullscreen: doubleClickFullscreen,
        controlBar: {
          children: [{
            name: "GroupedControls",
            children: ["playToggle", "progressControl", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay"]
          }, {
            name: "GroupedControls2",
            children: ["fullscreenToggle"]
          }]
        },
        sources: videoList.length > 0 ? [{
          src: ((_videoList$currentVid = videoList[currentVideoIndex]) === null || _videoList$currentVid === void 0 ? void 0 : _videoList$currentVid.src) || "",
          type: ((_videoList$currentVid2 = videoList[currentVideoIndex]) === null || _videoList$currentVid2 === void 0 ? void 0 : _videoList$currentVid2.type) || "video/mp4"
        }] : [{
          src: fallbackVideo.src,
          type: fallbackVideo.type
        }]
      });

      // ** Aggiunta del mini player per l'anteprima **
      var tooltipDiv = document.querySelector(".vjs-mouse-display");
      if (tooltipDiv) {
        var previewVideo = document.createElement("video");
        previewVideo.src = playerRef.current.currentSrc();
        previewVideo.muted = true;
        previewVideo.className = "progress-preview-video";
        tooltipDiv.appendChild(previewVideo);
        previewRef.current = previewVideo;
      }

      // ** Aggiornamento dell'anteprima sul progresso **
      var progressBar = document.querySelector(".vjs-progress-control");
      progressBar.addEventListener("mousemove", function (event) {
        if (previewRef.current && playerRef.current) {
          var rect = progressBar.getBoundingClientRect();
          var percentage = (event.clientX - rect.left) / rect.width;
          var duration = playerRef.current.duration();
          if (!isNaN(duration) && isFinite(duration)) {
            var videoTime = percentage * duration;
            previewRef.current.currentTime = videoTime;
          }
        }
      });
      progressBar.addEventListener("mouseleave", function () {
        if (previewRef.current) {
          previewRef.current.style.display = "none";
        }
      });
      progressBar.addEventListener("mouseenter", function () {
        if (previewRef.current) {
          previewRef.current.style.display = "block";
        }
      });
      setTimeout(function () {
        var remainingTimeDisplay = document.querySelector(".vjs-remaining-time");
        var currentTime = document.querySelector(".vjs-current-time");
        var duration = document.querySelector(".vjs-duration");
        var timeDivider = document.querySelector(".vjs-time-divider");
        if (remainingTimeDisplay) remainingTimeDisplay.style.display = "none";
        if (currentTime) currentTime.style.display = "inline";
        if (duration) duration.style.display = "inline";
        if (timeDivider) timeDivider.style.display = "inline";
      }, 500);
    }
    return function () {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isMounted]);
  var changeVideo = function changeVideo(direction) {
    if (videoList.length === 0) return;
    setCurrentVideoIndex(function (prevIndex) {
      var newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = videoList.length - 1;
      if (newIndex >= videoList.length) newIndex = 0;
      if (playerRef.current) {
        var _videoList$newIndex, _videoList$newIndex2;
        playerRef.current.pause();
        playerRef.current.src({
          type: ((_videoList$newIndex = videoList[newIndex]) === null || _videoList$newIndex === void 0 ? void 0 : _videoList$newIndex.type) || "video/mp4",
          src: ((_videoList$newIndex2 = videoList[newIndex]) === null || _videoList$newIndex2 === void 0 ? void 0 : _videoList$newIndex2.src) || ""
        });
        playerRef.current.load();
        playerRef.current.play();
      }
      if (previewRef.current) {
        var _videoList$newIndex3;
        previewRef.current.src = ((_videoList$newIndex3 = videoList[newIndex]) === null || _videoList$newIndex3 === void 0 ? void 0 : _videoList$newIndex3.src) || "";
        previewRef.current.load();
      }
      if (onVideoChange) {
        onVideoChange(newIndex);
      }
      return newIndex;
    });
  };
  window.changeVideo = changeVideo;
  (0, _react.useEffect)(function () {
    if (playerRef.current && videoList.length > 0) {
      var _videoList$currentVid3, _videoList$currentVid4;
      playerRef.current.src({
        type: ((_videoList$currentVid3 = videoList[currentVideoIndex]) === null || _videoList$currentVid3 === void 0 ? void 0 : _videoList$currentVid3.type) || "video/mp4",
        src: ((_videoList$currentVid4 = videoList[currentVideoIndex]) === null || _videoList$currentVid4 === void 0 ? void 0 : _videoList$currentVid4.src) || ""
      });
      playerRef.current.load();
      if (autoplay) {
        playerRef.current.play();
      }
      playerRef.current.volume(volume);
    }
  }, [videoList, currentVideoIndex, autoplay, volume]);
  var fallbackVideo = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video/mp4",
    title: "Video di Default"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _PlayerVideoKunstomModule["default"].playerContainer
  }, isMounted && (videoList.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    "data-vjs-player": true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _PlayerVideoKunstomModule["default"].videoPlayer
  }, /*#__PURE__*/_react["default"].createElement("video", {
    ref: videoRef,
    className: "video-js"
  }))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: _PlayerVideoKunstomModule["default"].noVideosMessage
  }, /*#__PURE__*/_react["default"].createElement("p", null, "\u26A0\uFE0F Nessun video disponibile. Aggiungi una lista di video per iniziare."))));
};
var _default = exports["default"] = PlayerVideoKunstom;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _video = _interopRequireDefault(require("video.js"));
require("video.js/dist/video-js.css");
require("./PlayerVideoKunstom.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PlayerVideoKunstom = _ref => {
  let {
    videoList = [],
    onVideoChange,
    autoplay = false,
    loop = false,
    muted = false,
    volume = 1,
    aspectRatio = "16:9",
    doubleClickFullscreen = true,
    controls = true
  } = _ref;
  const videoRef = (0, _react.useRef)(null);
  const playerRef = (0, _react.useRef)(null);
  const previewRef = (0, _react.useRef)(null);
  const [isMounted, setIsMounted] = (0, _react.useState)(false);
  const [currentVideoIndex, setCurrentVideoIndex] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    setIsMounted(true);
  }, []);
  (0, _react.useEffect)(() => {
    if (isMounted && videoRef.current && !playerRef.current && videoList.length > 0) {
      //wrapper div per le icons in controlBar
      const Component = _video.default.getComponent("Component");
      class GroupedControls extends Component {
        constructor(player, options) {
          super(player, options);
          this.addClass("vjs-grouped-controls");
        }
        createEl() {
          const el = _video.default.dom.createEl("div", {
            className: "vjs-grouped-controls"
          });
          return el;
        }
      }
      _video.default.registerComponent("GroupedControls", GroupedControls);
      class GroupedControls2 extends Component {
        constructor(player, options) {
          super(player, options);
          this.addClass("vjs-grouped-controls-2");
        }
        createEl() {
          const el = _video.default.dom.createEl("div", {
            className: "vjs-grouped-controls-2"
          });
          const prevButton = _video.default.dom.createEl("button", {
            className: "vjs-prev-button",
            innerHTML: `
              <svg style="position: relative; top: 10px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg><span style="position: relative; top: 2px;">Precedente</span>
            `
          });
          const nextButton = _video.default.dom.createEl("button", {
            className: "vjs-next-button",
            innerHTML: `
              <span style="position: relative; top: 2px;">Successivo</span><svg style="position: relative; top: 10px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            `
          });

          //Eventi click per cambiare video
          prevButton.addEventListener("click", () => {
            if (window.changeVideo) {
              window.changeVideo(-1); // Vai al video precedente
            }
          });
          nextButton.addEventListener("click", () => {
            if (window.changeVideo) {
              window.changeVideo(1); // Vai al video successivo
            }
          });
          el.appendChild(prevButton);
          el.appendChild(nextButton);
          return el;
        }
      }
      _video.default.registerComponent("GroupedControls2", GroupedControls2);
      playerRef.current = (0, _video.default)(videoRef.current, {
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
          src: videoList[currentVideoIndex]?.src || "",
          type: videoList[currentVideoIndex]?.type || "video/mp4"
        }] : [{
          src: fallbackVideo.src,
          type: fallbackVideo.type
        }]
      });

      // ** Aggiunta del mini player per l'anteprima **
      const tooltipDiv = document.querySelector(".vjs-mouse-display");
      if (tooltipDiv) {
        const previewVideo = document.createElement("video");
        previewVideo.src = playerRef.current.currentSrc();
        previewVideo.muted = true;
        previewVideo.className = "progress-preview-video";
        tooltipDiv.appendChild(previewVideo);
        previewRef.current = previewVideo;
      }

      // ** Aggiornamento dell'anteprima sul progresso **
      const progressBar = document.querySelector(".vjs-progress-control");
      progressBar.addEventListener("mousemove", event => {
        if (previewRef.current && playerRef.current) {
          const rect = progressBar.getBoundingClientRect();
          const percentage = (event.clientX - rect.left) / rect.width;
          const duration = playerRef.current.duration();
          if (!isNaN(duration) && isFinite(duration)) {
            const videoTime = percentage * duration;
            previewRef.current.currentTime = videoTime;
          }
        }
      });
      progressBar.addEventListener("mouseleave", () => {
        if (previewRef.current) {
          previewRef.current.style.display = "none";
        }
      });
      progressBar.addEventListener("mouseenter", () => {
        if (previewRef.current) {
          previewRef.current.style.display = "block";
        }
      });
      setTimeout(() => {
        const remainingTimeDisplay = document.querySelector(".vjs-remaining-time");
        const currentTime = document.querySelector(".vjs-current-time");
        const duration = document.querySelector(".vjs-duration");
        const timeDivider = document.querySelector(".vjs-time-divider");
        if (remainingTimeDisplay) remainingTimeDisplay.style.display = "none";
        if (currentTime) currentTime.style.display = "inline";
        if (duration) duration.style.display = "inline";
        if (timeDivider) timeDivider.style.display = "inline";
      }, 500);
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isMounted]);
  const changeVideo = direction => {
    if (videoList.length === 0) return;
    setCurrentVideoIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = videoList.length - 1;
      if (newIndex >= videoList.length) newIndex = 0;
      if (playerRef.current) {
        playerRef.current.pause();
        playerRef.current.src({
          type: videoList[newIndex]?.type || "video/mp4",
          src: videoList[newIndex]?.src || ""
        });
        playerRef.current.load();
        playerRef.current.play();
      }
      if (previewRef.current) {
        previewRef.current.src = videoList[newIndex]?.src || "";
        previewRef.current.load();
      }
      if (onVideoChange) {
        onVideoChange(newIndex);
      }
      return newIndex;
    });
  };
  window.changeVideo = changeVideo;
  (0, _react.useEffect)(() => {
    if (playerRef.current && videoList.length > 0) {
      playerRef.current.src({
        type: videoList[currentVideoIndex]?.type || "video/mp4",
        src: videoList[currentVideoIndex]?.src || ""
      });
      playerRef.current.load();
      if (autoplay) {
        playerRef.current.play();
      }
      playerRef.current.volume(volume);
    }
  }, [videoList, currentVideoIndex, autoplay, volume]);
  const fallbackVideo = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video/mp4",
    title: "Video di Default"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "player-container"
  }, isMounted && (videoList.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    "data-vjs-player": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "video-player"
  }, /*#__PURE__*/_react.default.createElement("video", {
    ref: videoRef,
    className: "video-js"
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "no-videos-message"
  }, /*#__PURE__*/_react.default.createElement("p", null, "\u26A0\uFE0F Nessun video disponibile. Aggiungi una lista di video per iniziare."))));
};
var _default = exports.default = PlayerVideoKunstom;
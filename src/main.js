import "./styles.css";

const preset = {
  title: "為我勇敢的媽媽",
  bpm: 129.2,
  firstBeatOffsetSec: 0.21,
  beatsPerBar: 4,
  phraseBeats: 8,
};

const state = {
  fileName: "",
  bpm: preset.bpm,
  firstBeatOffsetSec: preset.firstBeatOffsetSec,
  beatsPerBar: preset.beatsPerBar,
  phraseBeats: preset.phraseBeats,
  flashWindowMs: 110,
  beatNumber: 0,
  beatInBar: 1,
  phraseNumber: 1,
  nextBeatInSec: null,
  status: "選好音檔後按播放，燈號就會跟著拍點亮起。",
  playing: false,
};

const app = document.createElement("div");
app.className = "page";
app.innerHTML = `
  <main class="shell">
    <section class="hero card">
      <div class="hero-copy">
        <div class="eyebrow">SongWeaver</div>
        <h1>把節拍、歌詞與段落<br />慢慢織成一首歌</h1>
        <p class="lead">
          目前版本先聚焦在播放時的拍點提示。你可以載入音檔、套用預設 BPM、微調第一拍時間，
          讓燈號在每個拍點亮起，之後再延伸成歌詞辨識、段落分析與歌曲重組工具。
        </p>
        <div class="hero-grid">
          <div class="mini-card">
            <strong>現在可用</strong>
            <span>拍點燈號、BPM 微調、第一拍偏移、8 拍樂句提示。</span>
          </div>
          <div class="mini-card">
            <strong>這首歌預設</strong>
            <span>129.2 BPM，第一拍大約在 0.21 秒。</span>
          </div>
          <div class="mini-card">
            <strong>未來方向</strong>
            <span>歌詞辨識、段落卡片、律動口訣、歌曲拼接。</span>
          </div>
        </div>
      </div>
      <div class="stage">
        <div class="pulse-ring" data-pulse-ring>
          <div class="pulse-center">
            <p class="pulse-label">CURRENT BEAT</p>
            <p class="pulse-beat" data-beat-in-bar>1</p>
            <p class="pulse-status" data-status>選好音檔後按播放，燈號就會跟著拍點亮起。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="workspace">
      <div class="card controls">
        <h2>播放與拍點</h2>
        <p class="section-copy">
          先用這個頁面把音樂對到主要拍點。每小節第一拍會更亮，方便你後面拿來抓律動大動作。
        </p>
        <div class="field-grid">
          <label class="field field-wide">
            <span>音檔</span>
            <input id="audio-file" type="file" accept="audio/*" />
          </label>
          <label class="field">
            <span>BPM</span>
            <input id="bpm" type="number" min="30" max="240" step="0.1" value="${state.bpm}" />
          </label>
          <label class="field">
            <span>第一拍偏移（秒）</span>
            <input id="offset" type="number" min="0" max="30" step="0.01" value="${state.firstBeatOffsetSec}" />
          </label>
          <label class="field">
            <span>每小節拍數</span>
            <input id="beats-per-bar" type="number" min="1" max="12" step="1" value="${state.beatsPerBar}" />
          </label>
          <label class="field">
            <span>每樂句拍數</span>
            <input id="phrase-beats" type="number" min="1" max="32" step="1" value="${state.phraseBeats}" />
          </label>
          <label class="field field-wide">
            <span>亮燈寬度（毫秒）</span>
            <input id="flash-window" type="range" min="40" max="260" step="5" value="${state.flashWindowMs}" />
            <small data-flash-window-label>110 ms</small>
          </label>
        </div>

        <div class="button-row">
          <button class="primary" type="button" data-play-toggle disabled>播放</button>
          <button class="secondary" type="button" data-restart disabled>從頭重播</button>
          <button class="secondary" type="button" data-use-preset>套用範例歌曲預設</button>
        </div>

        <div class="status-grid">
          <div class="mini-card">
            <strong>目前音檔</strong>
            <span data-file-name>尚未選擇</span>
          </div>
          <div class="mini-card">
            <strong>下一拍倒數</strong>
            <span data-next-beat>--</span>
          </div>
          <div class="mini-card">
            <strong>拍點序號</strong>
            <span data-beat-count>第 0 拍</span>
          </div>
          <div class="mini-card">
            <strong>小節位置</strong>
            <span data-bar-position>第 1 拍 / 共 4 拍</span>
          </div>
          <div class="mini-card">
            <strong>樂句位置</strong>
            <span data-phrase-position>第 1 個樂句</span>
          </div>
          <div class="mini-card">
            <strong>目前狀態</strong>
            <span data-status-inline>等待載入音檔</span>
          </div>
        </div>

        <div class="audio-wrap">
          <audio controls preload="metadata" data-audio></audio>
        </div>
      </div>

      <aside class="card roadmap">
        <h2>SongWeaver 視角</h2>
        <p class="section-copy">
          這個專案不是只做閃燈。它會慢慢變成一個可以看懂歌曲、整理段落、幫助編律動與拼歌的工作台。
        </p>
        <ol>
          <li>先找出節拍與第一拍位置。</li>
          <li>再接歌詞辨識，補上時間軸。</li>
          <li>把主歌、副歌、間奏拆成可展開的段落卡。</li>
          <li>補上摘要、律動口訣與段落特徵描述。</li>
          <li>最後支援依拍點重組主歌、副歌與過門。</li>
        </ol>
        <p class="note">
          現在的畫面已經先把「拍點 UI」做成獨立底盤，之後新增段落清單與歌詞卡片時，不需要推翻重來。
        </p>
      </aside>
    </section>
  </main>
`;

document.body.append(app);

const audio = app.querySelector("[data-audio]");
const pulseRing = app.querySelector("[data-pulse-ring]");
const beatInBarText = app.querySelector("[data-beat-in-bar]");
const statusText = app.querySelector("[data-status]");
const fileNameText = app.querySelector("[data-file-name]");
const nextBeatText = app.querySelector("[data-next-beat]");
const beatCountText = app.querySelector("[data-beat-count]");
const barPositionText = app.querySelector("[data-bar-position]");
const phrasePositionText = app.querySelector("[data-phrase-position]");
const statusInlineText = app.querySelector("[data-status-inline]");
const playToggle = app.querySelector("[data-play-toggle]");
const restartButton = app.querySelector("[data-restart]");
const presetButton = app.querySelector("[data-use-preset]");
const fileInput = app.querySelector("#audio-file");
const bpmInput = app.querySelector("#bpm");
const offsetInput = app.querySelector("#offset");
const beatsPerBarInput = app.querySelector("#beats-per-bar");
const phraseBeatsInput = app.querySelector("#phrase-beats");
const flashWindowInput = app.querySelector("#flash-window");
const flashWindowLabel = app.querySelector("[data-flash-window-label]");

if (
  !audio ||
  !pulseRing ||
  !beatInBarText ||
  !statusText ||
  !fileNameText ||
  !nextBeatText ||
  !beatCountText ||
  !barPositionText ||
  !phrasePositionText ||
  !statusInlineText ||
  !playToggle ||
  !restartButton ||
  !presetButton ||
  !fileInput ||
  !bpmInput ||
  !offsetInput ||
  !beatsPerBarInput ||
  !phraseBeatsInput ||
  !flashWindowInput ||
  !flashWindowLabel
) {
  throw new Error("SongWeaver failed to initialize.");
}

let currentObjectUrl = null;
let rafId = 0;
let lastHighlightedBeat = -1;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatSeconds(value) {
  if (value == null || !Number.isFinite(value)) {
    return "--";
  }
  return `${value.toFixed(2)} 秒`;
}

function normalizeNumber(input, fallback, min, max, precision = 0) {
  const parsed = Number.parseFloat(input.value);
  if (!Number.isFinite(parsed)) {
    input.value = precision > 0 ? fallback.toFixed(precision) : String(fallback);
    return fallback;
  }
  const next = clamp(parsed, min, max);
  input.value = precision > 0 ? next.toFixed(precision) : String(Math.round(next));
  return next;
}

function syncStateFromInputs() {
  state.bpm = normalizeNumber(bpmInput, preset.bpm, 30, 240, 1);
  state.firstBeatOffsetSec = normalizeNumber(offsetInput, preset.firstBeatOffsetSec, 0, 30, 2);
  state.beatsPerBar = Math.round(normalizeNumber(beatsPerBarInput, preset.beatsPerBar, 1, 12));
  state.phraseBeats = Math.round(normalizeNumber(phraseBeatsInput, preset.phraseBeats, 1, 32));
  state.flashWindowMs = Math.round(normalizeNumber(flashWindowInput, 110, 40, 260));
  flashWindowLabel.textContent = `${state.flashWindowMs} ms`;
}

function updateLabels() {
  fileNameText.textContent = state.fileName || "尚未選擇";
  nextBeatText.textContent = formatSeconds(state.nextBeatInSec);
  beatCountText.textContent = `第 ${state.beatNumber} 拍`;
  barPositionText.textContent = `第 ${state.beatInBar} 拍 / 共 ${state.beatsPerBar} 拍`;
  phrasePositionText.textContent = `第 ${state.phraseNumber} 個樂句`;
  beatInBarText.textContent = String(state.beatInBar);
  statusText.textContent = state.status;
  statusInlineText.textContent = state.status;
  playToggle.textContent = state.playing ? "暫停" : "播放";
}

function clearPulse() {
  pulseRing.classList.remove("flash", "downbeat");
}

function updateBeatVisual(currentTime) {
  const secondsPerBeat = 60 / state.bpm;
  const elapsedFromFirstBeat = currentTime - state.firstBeatOffsetSec;

  if (elapsedFromFirstBeat < 0) {
    state.beatNumber = 0;
    state.beatInBar = 1;
    state.phraseNumber = 1;
    state.nextBeatInSec = Math.max(0, state.firstBeatOffsetSec - currentTime);
    state.status = "還沒到第一拍，準備亮燈。";
    clearPulse();
    updateLabels();
    return;
  }

  const rawBeatIndex = elapsedFromFirstBeat / secondsPerBeat;
  const nearestBeatIndex = Math.round(rawBeatIndex);
  const nearestBeatTime = state.firstBeatOffsetSec + nearestBeatIndex * secondsPerBeat;
  const distanceMs = Math.abs(currentTime - nearestBeatTime) * 1000;
  const currentBeatIndex = Math.floor(rawBeatIndex);
  const nextBeatTime = state.firstBeatOffsetSec + (currentBeatIndex + 1) * secondsPerBeat;
  const beatNumber = currentBeatIndex + 1;
  const beatInBar = ((beatNumber - 1) % state.beatsPerBar) + 1;
  const phraseNumber = Math.floor((beatNumber - 1) / state.phraseBeats) + 1;
  const flashActive = distanceMs <= state.flashWindowMs / 2;
  const isDownbeat = ((nearestBeatIndex % state.beatsPerBar) + state.beatsPerBar) % state.beatsPerBar === 0;

  state.beatNumber = Math.max(1, beatNumber);
  state.beatInBar = beatInBar;
  state.phraseNumber = Math.max(1, phraseNumber);
  state.nextBeatInSec = Math.max(0, nextBeatTime - currentTime);

  if (flashActive) {
    pulseRing.classList.add("flash");
    pulseRing.classList.toggle("downbeat", isDownbeat);
    if (nearestBeatIndex !== lastHighlightedBeat) {
      lastHighlightedBeat = nearestBeatIndex;
      state.status = isDownbeat ? "重拍到了，適合做大動作。" : "拍點命中。";
    }
  } else {
    clearPulse();
    state.status = state.nextBeatInSec < 0.12 ? "下一拍快到了。" : "播放中，等待下一拍。";
  }

  updateLabels();
}

function tick() {
  if (!state.playing) {
    return;
  }
  updateBeatVisual(audio.currentTime);
  rafId = window.requestAnimationFrame(tick);
}

function startTicker() {
  window.cancelAnimationFrame(rafId);
  rafId = window.requestAnimationFrame(tick);
}

function stopTicker() {
  window.cancelAnimationFrame(rafId);
  clearPulse();
}

function applyPreset() {
  bpmInput.value = preset.bpm.toFixed(1);
  offsetInput.value = preset.firstBeatOffsetSec.toFixed(2);
  beatsPerBarInput.value = String(preset.beatsPerBar);
  phraseBeatsInput.value = String(preset.phraseBeats);
  flashWindowInput.value = "110";
  syncStateFromInputs();
  state.status = `已套用 ${preset.title} 的建議拍點設定。`;
  updateBeatVisual(audio.currentTime || 0);
}

function loadSelectedFile(file) {
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
  }
  currentObjectUrl = URL.createObjectURL(file);
  audio.src = currentObjectUrl;
  audio.load();
  state.fileName = file.name;
  state.playing = false;
  state.status = "音檔已載入，可以開始播放。";
  playToggle.disabled = false;
  restartButton.disabled = false;
  lastHighlightedBeat = -1;
  updateBeatVisual(0);
}

function togglePlayback() {
  if (!audio.src) {
    return;
  }
  if (audio.paused) {
    void audio.play();
    return;
  }
  audio.pause();
}

function handlePlaybackState() {
  state.playing = !audio.paused && !audio.ended;
  if (state.playing) {
    state.status = "播放中，燈號會跟著拍點亮。";
    startTicker();
  } else {
    stopTicker();
    state.status = audio.ended ? "播放完成，可以從頭再播一次。" : "已暫停。";
  }
  updateLabels();
}

function handleRestart() {
  audio.currentTime = 0;
  lastHighlightedBeat = -1;
  updateBeatVisual(0);
  if (audio.paused) {
    void audio.play();
  }
}

fileInput.addEventListener("change", () => {
  const file = fileInput.files?.[0];
  if (!file) {
    return;
  }
  loadSelectedFile(file);
});

for (const input of [bpmInput, offsetInput, beatsPerBarInput, phraseBeatsInput]) {
  input.addEventListener("change", () => {
    syncStateFromInputs();
    updateBeatVisual(audio.currentTime || 0);
  });
}

flashWindowInput.addEventListener("input", () => {
  syncStateFromInputs();
  updateBeatVisual(audio.currentTime || 0);
});

playToggle.addEventListener("click", togglePlayback);
restartButton.addEventListener("click", handleRestart);
presetButton.addEventListener("click", applyPreset);
audio.addEventListener("play", handlePlaybackState);
audio.addEventListener("pause", handlePlaybackState);
audio.addEventListener("ended", handlePlaybackState);
audio.addEventListener("seeked", () => {
  lastHighlightedBeat = -1;
  updateBeatVisual(audio.currentTime);
});
audio.addEventListener("timeupdate", () => {
  if (!state.playing) {
    updateBeatVisual(audio.currentTime);
  }
});

syncStateFromInputs();
updateLabels();

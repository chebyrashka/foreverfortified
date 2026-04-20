<script setup lang="ts">
import { onMounted, ref } from "vue";

type PaletteOption = {
  id: string;
  label: string;
  colors: string[];
};

type TypeOption = {
  id: string;
  label: string;
  note: string;
  sampleFamily: string;
};

const palettes: PaletteOption[] = [
  { id: "forest", label: "Forest", colors: ["#17231D", "#2F5E40", "#FBFAF5"] },
  { id: "pine-bone", label: "Pine & Bone", colors: ["#17231D", "#285B3D", "#FBFAF6"] },
  { id: "olive-field", label: "Olive Field", colors: ["#242A1F", "#3F6A38", "#FBFAF2"] },
  { id: "emerald-slate", label: "Emerald Slate", colors: ["#14211F", "#0F684B", "#FBFAF6"] }
];

const typePairings: TypeOption[] = [
  {
    id: "original",
    label: "Sora · Atkinson",
    note: "Current",
    sampleFamily: "\"Sora\", \"Manrope\", system-ui, sans-serif"
  },
  {
    id: "source-serif",
    label: "Source Serif · Manrope",
    note: "Calm serif",
    sampleFamily: "\"Source Serif 4\", Georgia, serif"
  },
  {
    id: "lora-atkinson",
    label: "Lora · Atkinson",
    note: "Warm serif",
    sampleFamily: "\"Lora\", Georgia, serif"
  },
  {
    id: "literata",
    label: "Literata · Manrope",
    note: "Refined serif",
    sampleFamily: "\"Literata\", Georgia, serif"
  },
  {
    id: "condensed",
    label: "Roboto Condensed · Atkinson",
    note: "Condensed",
    sampleFamily: "\"Roboto Condensed\", \"Arial Narrow\", sans-serif"
  }
];

const isOpen = ref(false);
const selectedPalette = ref("forest");
const selectedType = ref("original");

function applySettings() {
  const root = document.documentElement;
  root.dataset.palette = selectedPalette.value;

  if (selectedType.value === "original") {
    delete root.dataset.type;
  } else {
    root.dataset.type = selectedType.value;
  }

  window.localStorage.setItem("ff-palette", selectedPalette.value);
  window.localStorage.setItem("ff-type", selectedType.value);
}

function choosePalette(id: string) {
  selectedPalette.value = id;
  applySettings();
}

function chooseType(id: string) {
  selectedType.value = id;
  applySettings();
}

function resetSettings() {
  selectedPalette.value = "forest";
  selectedType.value = "original";
  applySettings();
}

onMounted(() => {
  const storedPalette = window.localStorage.getItem("ff-palette") || "forest";
  const storedType = window.localStorage.getItem("ff-type") || "original";
  const paletteIds = palettes.map((palette) => palette.id);
  const typeIds = typePairings.map((type) => type.id);

  selectedPalette.value = paletteIds.includes(storedPalette) ? storedPalette : "forest";
  selectedType.value = typeIds.includes(storedType) ? storedType : "original";
  applySettings();
});
</script>

<template>
  <div class="settings-shell" :class="{ 'settings-shell--open': isOpen }">
    <button class="settings-trigger" type="button" aria-haspopup="dialog" :aria-expanded="isOpen" @click="isOpen = true">
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 6h12M4 10h12M4 14h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <path d="M8 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" />
      </svg>
      Settings
    </button>

    <section v-if="isOpen" class="settings-panel" role="dialog" aria-modal="false" aria-label="Brand direction settings">
      <div class="settings-panel__header">
        <div>
          <h2>Brand Direction</h2>
          <p>Pick a palette + type pairing.</p>
        </div>
        <button class="icon-button" type="button" aria-label="Close settings" @click="isOpen = false">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="settings-group">
        <h3>Color Palette</h3>
        <div class="palette-grid">
          <button
            v-for="palette in palettes"
            :key="palette.id"
            class="option-card palette-card"
            :class="{ 'option-card--active': selectedPalette === palette.id }"
            type="button"
            @click="choosePalette(palette.id)"
          >
            <span class="swatches" aria-hidden="true">
              <span v-for="color in palette.colors" :key="color" :style="{ background: color }" />
            </span>
            <span>{{ palette.label }}</span>
          </button>
        </div>
      </div>

      <div class="settings-group">
        <h3>Type Pairing</h3>
        <div class="type-list">
          <button
            v-for="type in typePairings"
            :key="type.id"
            class="option-card type-card"
            :class="{ 'option-card--active': selectedType === type.id }"
            type="button"
            @click="chooseType(type.id)"
          >
            <span class="type-card__sample" :style="{ fontFamily: type.sampleFamily }">Aa</span>
            <span class="type-card__name">{{ type.label }}</span>
            <span class="type-card__note">{{ type.note }}</span>
          </button>
        </div>
      </div>

      <div class="settings-actions">
        <button type="button" @click="resetSettings">Reset</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.settings-shell {
  position: fixed;
  z-index: 60;
  right: max(1rem, env(safe-area-inset-right));
  bottom: max(1rem, env(safe-area-inset-bottom));
  display: grid;
  justify-items: end;
  gap: var(--size-3);
  font-family: var(--font-label);
}

.settings-trigger {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: var(--size-2);
  border: 1px solid rgb(31 36 33 / 0.16);
  border-radius: 999px;
  background: rgb(247 243 236 / 0.92);
  box-shadow: var(--shadow-soft);
  color: var(--color-iron);
  padding: 0.66rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 800;
  backdrop-filter: blur(16px);
}

.settings-trigger svg {
  width: 1.1rem;
  height: 1.1rem;
}

.settings-panel {
  width: min(360px, calc(100vw - 2rem));
  max-height: min(760px, calc(100svh - 6rem));
  overflow: auto;
  border: 1px solid var(--preview-panel-border);
  border-radius: 14px;
  background: var(--preview-panel-bg);
  box-shadow: 0 24px 80px rgb(16 19 17 / 0.22);
  color: var(--color-iron);
  padding: var(--size-5);
}

.settings-panel__header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: var(--size-4);
}

.settings-panel h2,
.settings-panel h3,
.settings-panel p {
  margin: 0;
}

.settings-panel h2 {
  font-size: 0.88rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.settings-panel p {
  margin-top: var(--size-2);
  color: rgb(31 36 33 / 0.66);
  font-size: 0.95rem;
}

.icon-button {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgb(31 36 33 / 0.62);
}

.icon-button:hover {
  background: rgb(31 36 33 / 0.08);
  color: var(--color-iron);
}

.icon-button svg {
  width: 1rem;
  height: 1rem;
}

.settings-group {
  margin-top: var(--size-5);
}

.settings-group h3 {
  margin-bottom: var(--size-3);
  color: rgb(31 36 33 / 0.66);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.palette-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--size-2);
}

.type-list {
  display: grid;
  gap: var(--size-2);
}

.option-card {
  min-height: 52px;
  border: 1px solid rgb(31 36 33 / 0.1);
  border-radius: 10px;
  background: rgb(255 255 255 / 0.48);
  color: var(--color-iron);
  text-align: left;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.option-card:hover,
.option-card--active {
  border-color: var(--color-forest);
  background: rgb(255 255 255 / 0.7);
  box-shadow: inset 0 0 0 1px rgb(47 74 61 / 0.18);
}

.palette-card {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-3);
  font-weight: 850;
}

.swatches {
  display: flex;
}

.swatches span {
  width: 16px;
  height: 28px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 0.36) inset;
}

.swatches span + span {
  margin-left: -4px;
}

.type-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--size-3);
  padding: var(--size-3) var(--size-4);
}

.type-card__sample {
  color: var(--color-iron);
  font-size: 1.18rem;
  line-height: 1;
}

.type-card__name {
  color: rgb(31 36 33 / 0.72);
  font-size: 0.86rem;
  font-weight: 800;
}

.type-card__note {
  color: rgb(31 36 33 / 0.62);
  font-size: 0.76rem;
  font-weight: 800;
}

.settings-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--size-4);
}

.settings-actions button {
  border: 0;
  background: transparent;
  color: rgb(31 36 33 / 0.62);
  font-size: 0.82rem;
  font-weight: 850;
}

.settings-actions button:hover {
  color: var(--color-iron);
}

@media (max-width: 520px) {
  .settings-shell {
    right: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
  }

  .settings-trigger {
    justify-self: end;
  }

  .settings-panel {
    width: 100%;
  }
}
</style>

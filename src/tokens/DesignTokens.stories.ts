import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { defineComponent } from "vue";

const meta = {
  title: "Foundation/Design Tokens",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    docs: { canvas: { sourceState: "hidden" } },
  },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

const sectionHeader = `
  font-size: var(--davinci-text-size-md);
  font-weight: var(--davinci-text-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--davinci-text-letter-spacing-wide);
  color: var(--davinci-color-text-muted);
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--davinci-color-stroke-subtle);
`.trim();

const pageWrapper = `
  padding: 32px;
  background: var(--davinci-color-bg-base);
  min-height: 100vh;
  font-family: var(--davinci-text-font-main, sans-serif);
  display: flex;
  flex-direction: column;
  gap: 40px;
`.trim();

// ─── COLORS ──────────────────────────────────────────────────────────────────

const colorGroups = [
  {
    title: "Brand",
    tokens: [
      "--davinci-color-brand-background",
      "--davinci-color-brand-border",
      "--davinci-color-brand-default",
      "--davinci-color-brand-hover",
      "--davinci-color-brand-emphasis",
    ],
  },
  {
    title: "Text",
    tokens: [
      "--davinci-color-text-default",
      "--davinci-color-text-muted",
      "--davinci-color-text-on-brand",
      "--davinci-color-text-danger",
    ],
  },
  {
    title: "Stroke",
    tokens: [
      "--davinci-color-stroke-subtle",
      "--davinci-color-stroke-default",
      "--davinci-color-stroke-strong",
    ],
  },
  {
    title: "Icon",
    tokens: [
      "--davinci-color-icon-default",
      "--davinci-color-icon-muted",
      "--davinci-color-icon-on-brand",
    ],
  },
  {
    title: "Background",
    tokens: [
      "--davinci-color-bg-base",
      "--davinci-color-bg-subtle",
      "--davinci-color-bg-elevated",
      "--davinci-color-bg-brand",
      "--davinci-color-bg-danger",
    ],
  },
];

export const Colors: Story = {
  name: "Colors",
  render: () =>
    defineComponent({
      setup: () => ({ colorGroups, sectionHeader, pageWrapper }),
      template: `
        <div :style="pageWrapper">
          <div v-for="group in colorGroups" :key="group.title">
            <h2 :style="sectionHeader">{{ group.title }}</h2>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div
                v-for="token in group.tokens"
                :key="token"
                style="display: grid; grid-template-columns: 48px 1fr; align-items: center; gap: 16px; padding: 4px 0;"
              >
                <div
                  :style="{
                    width: '48px',
                    height: '32px',
                    borderRadius: 'var(--davinci-corner-radius-sm)',
                    background: 'var(' + token + ')',
                    border: '1px solid var(--davinci-color-stroke-default)',
                  }"
                />
                <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-default);">
                  {{ token }}
                </code>
              </div>
            </div>
          </div>
        </div>
      `,
    }),
};

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────

const typographySizes = [
  {
    token: "--davinci-text-size-xs",
    label: "xs — 0.75rem",
    sample: "Legal text, timestamps, metadata",
  },
  {
    token: "--davinci-text-size-sm",
    label: "sm — 0.875rem",
    sample: "Secondary labels, captions, badge text",
  },
  {
    token: "--davinci-text-size-md",
    label: "md — 1rem",
    sample: "Base body text, default for all paragraph and UI copy.",
  },
  {
    token: "--davinci-text-size-lg",
    label: "lg — 1.25rem",
    sample: "Subheadings, section intros, emphasized copy.",
  },
  {
    token: "--davinci-text-size-xl",
    label: "xl — 1.5rem",
    sample: "Card titles, modal headers, H3.",
  },
  {
    token: "--davinci-text-size-2xl",
    label: "2xl — 2rem",
    sample: "Page section titles, H2.",
  },
  {
    token: "--davinci-text-size-3xl",
    label: "3xl — 2.5rem",
    sample: "Hero display text, H1.",
  },
];

export const Typography: Story = {
  name: "Typography",
  render: () =>
    defineComponent({
      setup: () => ({ typographySizes, sectionHeader, pageWrapper }),
      template: `
        <div :style="pageWrapper">

          <div>
            <h2 :style="sectionHeader">Title Font — Poiret One</h2>
            <p style="font-family: var(--davinci-text-font-title); font-size: var(--davinci-text-size-2xl); color: var(--davinci-color-text-default); margin: 0;">
              La Renaissance et l'esprit du Da Vinci
            </p>
          </div>

          <div>
            <h2 :style="sectionHeader">Body Font — Overpass — Sizes</h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div
                v-for="size in typographySizes"
                :key="size.token"
                style="display: grid; grid-template-columns: 180px 1fr; gap: 24px; align-items: baseline; padding-bottom: 12px; border-bottom: 1px solid var(--davinci-color-stroke-subtle);"
              >
                <code style="font-family: monospace; font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ size.label }}</code>
                <span
                  :style="{
                    fontFamily: 'var(--davinci-text-font-main)',
                    fontSize: 'var(' + size.token + ')',
                    color: 'var(--davinci-color-text-default)',
                    lineHeight: 'var(--davinci-text-line-spacing-normal)',
                  }"
                >{{ size.sample }}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 :style="sectionHeader">Font Weights</h2>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div
                v-for="w in [
                  { label: 'regular — 400', weight: 'var(--davinci-text-weight-regular)' },
                  { label: 'medium — 500',  weight: 'var(--davinci-text-weight-medium)' },
                  { label: 'bold — 700',    weight: 'var(--davinci-text-weight-bold)' },
                ]"
                :key="w.label"
                style="display: grid; grid-template-columns: 180px 1fr; gap: 24px; align-items: center;"
              >
                <code style="font-family: monospace; font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ w.label }}</code>
                <span
                  :style="{
                    fontFamily: 'var(--davinci-text-font-main)',
                    fontSize: 'var(--davinci-text-size-lg)',
                    fontWeight: w.weight,
                    color: 'var(--davinci-color-text-default)',
                  }"
                >The quick brown fox jumps over the lazy dog</span>
              </div>
            </div>
          </div>

        </div>
      `,
    }),
};

// ─── SPACING ─────────────────────────────────────────────────────────────────

const gapTokens = [
  { token: "--davinci-spacing-gap-xs", label: "gap-xs — 4px" },
  { token: "--davinci-spacing-gap-sm", label: "gap-sm — 8px" },
  { token: "--davinci-spacing-gap-md", label: "gap-md — 16px" },
  { token: "--davinci-spacing-gap-lg", label: "gap-lg — 24px" },
  { token: "--davinci-spacing-gap-xl", label: "gap-xl — 40px" },
];

const paddingTokens = [
  { token: "--davinci-spacing-padding-xs", label: "padding-xs — 4px 8px" },
  { token: "--davinci-spacing-padding-sm", label: "padding-sm — 8px 12px" },
  { token: "--davinci-spacing-padding-md", label: "padding-md — 12px 16px" },
  { token: "--davinci-spacing-padding-lg", label: "padding-lg — 16px 24px" },
];

export const Spacing: Story = {
  name: "Spacing",
  render: () =>
    defineComponent({
      setup: () => ({ gapTokens, paddingTokens, sectionHeader, pageWrapper }),
      template: `
        <div :style="pageWrapper">

          <div>
            <h2 :style="sectionHeader">Gap</h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div
                v-for="item in gapTokens"
                :key="item.token"
                style="display: grid; grid-template-columns: 200px 1fr; gap: 16px; align-items: center;"
              >
                <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-muted);">{{ item.label }}</code>
                <div :style="{ display: 'flex', gap: 'var(' + item.token + ')' }">
                  <div
                    v-for="n in 5" :key="n"
                    style="width: 24px; height: 24px; background: var(--davinci-color-brand-default); border-radius: var(--davinci-corner-radius-sm);"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 :style="sectionHeader">Padding</h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div
                v-for="item in paddingTokens"
                :key="item.token"
                style="display: grid; grid-template-columns: 200px 1fr; gap: 16px; align-items: center;"
              >
                <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-muted);">{{ item.label }}</code>
                <div
                  :style="{
                    display: 'inline-flex',
                    padding: 'var(' + item.token + ')',
                    background: 'var(--davinci-color-brand-background)',
                    border: '1px solid var(--davinci-color-brand-border)',
                    borderRadius: 'var(--davinci-corner-radius-md)',
                  }"
                >
                  <div style="background: var(--davinci-color-brand-default); opacity: 0.6; border-radius: 2px; width: 80px; height: 16px;" />
                </div>
              </div>
            </div>
          </div>

        </div>
      `,
    }),
};

// ─── CORNER RADIUS ───────────────────────────────────────────────────────────

const radiusTokens = [
  {
    token: "--davinci-corner-radius-sm",
    label: "sm — 4px",
    usage: "Badges, tags, chips",
  },
  {
    token: "--davinci-corner-radius-md",
    label: "md — 8px",
    usage: "Buttons, inputs, small cards",
  },
  {
    token: "--davinci-corner-radius-lg",
    label: "lg — 12px",
    usage: "Cards, panels, banners",
  },
  {
    token: "--davinci-corner-radius-xl",
    label: "xl — 16px",
    usage: "Modals, large cards, drawers",
  },
  {
    token: "--davinci-corner-radius-full",
    label: "full — 9999px",
    usage: "Pills, avatars, toggles",
  },
];

export const CornerRadius: Story = {
  name: "Corner Radius",
  render: () =>
    defineComponent({
      setup: () => ({ radiusTokens, sectionHeader, pageWrapper }),
      template: `
        <div :style="pageWrapper">
          <h2 :style="sectionHeader">Corner Radius</h2>
          <div style="display: flex; flex-wrap: wrap; gap: var(--davinci-spacing-gap-lg);">
            <div
              v-for="item in radiusTokens"
              :key="item.token"
              style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px; min-width: 100px;"
            >
              <div
                :style="{
                  width: '80px',
                  height: '80px',
                  background: 'var(--davinci-color-bg-brand)',
                  borderRadius: 'var(' + item.token + ')',
                }"
              />
              <code style="font-family: monospace; font-size: 0.75rem; color: var(--davinci-color-text-default);">{{ item.label }}</code>
              <span style="font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ item.usage }}</span>
            </div>
          </div>
        </div>
      `,
    }),
};

// ─── LINE WEIGHT ─────────────────────────────────────────────────────────────

const lineWeightTokens = [
  {
    token: "--davinci-line-weight-thin",
    label: "thin — 1px",
    usage: "Decorative separators, table cells",
  },
  {
    token: "--davinci-line-weight-default",
    label: "default — 1.5px",
    usage: "Standard borders for inputs, cards",
  },
  {
    token: "--davinci-line-weight-strong",
    label: "strong — 2px",
    usage: "Focus rings, active borders, errors",
  },
];

export const LineWeight: Story = {
  name: "Line Weight",
  render: () =>
    defineComponent({
      setup: () => ({ lineWeightTokens, sectionHeader, pageWrapper }),
      template: `
        <div :style="pageWrapper">
          <h2 :style="sectionHeader">Line Weight</h2>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div
              v-for="item in lineWeightTokens"
              :key="item.token"
              style="display: grid; grid-template-columns: 240px 1fr; gap: 24px; align-items: center;"
            >
              <div>
                <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-default); display: block;">{{ item.label }}</code>
                <span style="font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ item.usage }}</span>
              </div>
              <div
                :style="{
                  borderBottom: 'var(' + item.token + ') solid var(--davinci-color-stroke-strong)',
                  width: '100%',
                }"
              />
            </div>
          </div>
        </div>
      `,
    }),
};

// ─── ANIMATION ───────────────────────────────────────────────────────────────

const animationDurations = [
  {
    token: "--davinci-animation-duration-fast",
    label: "fast — 100ms",
    usage: "Micro-interactions: checkbox, tooltip",
  },
  {
    token: "--davinci-animation-duration-default",
    label: "default — 200ms",
    usage: "Button states, input focus, tab switch",
  },
  {
    token: "--davinci-animation-duration-slow",
    label: "slow — 400ms",
    usage: "Modal open/close, drawer slide, page fade",
  },
];

const animationEasings = [
  {
    token: "--davinci-animation-ease-default",
    label: "ease-default",
    curve: "cubic-bezier(0.4, 0, 0.2, 1)",
    usage: "General UI transitions",
  },
  {
    token: "--davinci-animation-ease-bounce",
    label: "ease-bounce",
    curve: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    usage: "Positive feedback, badge pop",
  },
  {
    token: "--davinci-animation-ease-in",
    label: "ease-in",
    curve: "cubic-bezier(0.4, 0, 1, 1)",
    usage: "Elements exiting the screen",
  },
];

export const Animation: Story = {
  name: "Animation",
  render: () =>
    defineComponent({
      setup: () => ({
        animationDurations,
        animationEasings,
        sectionHeader,
        pageWrapper,
      }),
      template: `
        <div :style="pageWrapper">

          <div>
            <h2 :style="sectionHeader">Duration</h2>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <div
                v-for="item in animationDurations"
                :key="item.token"
                style="display: grid; grid-template-columns: 240px 1fr; gap: 24px; align-items: center;"
              >
                <div>
                  <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-default); display: block;">{{ item.label }}</code>
                  <span style="font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ item.usage }}</span>
                </div>
                <code style="font-family: monospace; font-size: 0.75rem; color: var(--davinci-color-text-muted); background: var(--davinci-color-bg-subtle); padding: 4px 8px; border-radius: var(--davinci-corner-radius-sm); display: inline-block;">
                  {{ item.token }}
                </code>
              </div>
            </div>
          </div>

          <div>
            <h2 :style="sectionHeader">Easing</h2>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <div
                v-for="item in animationEasings"
                :key="item.token"
                style="display: grid; grid-template-columns: 240px 1fr; gap: 24px; align-items: center;"
              >
                <div>
                  <code style="font-family: monospace; font-size: 0.8rem; color: var(--davinci-color-text-default); display: block;">{{ item.label }}</code>
                  <span style="font-size: 0.75rem; color: var(--davinci-color-text-muted);">{{ item.usage }}</span>
                </div>
                <code style="font-family: monospace; font-size: 0.75rem; color: var(--davinci-color-text-muted); background: var(--davinci-color-bg-subtle); padding: 4px 8px; border-radius: var(--davinci-corner-radius-sm); display: inline-block;">
                  {{ item.curve }}
                </code>
              </div>
            </div>
          </div>

        </div>
      `,
    }),
};

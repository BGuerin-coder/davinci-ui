import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import DvButton from "./DvButton.vue";

// @iconify/vue makes fetch requests to the CDN at runtime.
// Mock it to prevent happy-dom from aborting pending requests during teardown.
vi.mock("@iconify/vue", () => ({
  Icon: { template: "<span />" },
}));

describe("DvButton", () => {
  it("renders with default props", () => {
    const wrapper = mount(DvButton);
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.text()).toContain("Button");
  });

  it("renders the correct label", () => {
    const wrapper = mount(DvButton, { props: { label: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies the variant class", () => {
    const wrapper = mount(DvButton, { props: { variant: "danger" } });
    expect(wrapper.find("button").classes()).toContain("danger");
  });

  it("applies the size class", () => {
    const wrapper = mount(DvButton, { props: { size: "large" } });
    expect(wrapper.find("button").classes()).toContain("large");
  });

  it("emits click when clicked", async () => {
    const wrapper = mount(DvButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(DvButton, { props: { disabled: true } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  it("sets disabled attribute when disabled", () => {
    const wrapper = mount(DvButton, { props: { disabled: true } });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("applies loading class when loading", () => {
    const wrapper = mount(DvButton, { props: { loading: true } });
    expect(wrapper.find("button").classes()).toContain("davinci-btn--loading");
  });

  it("hides label when iconOnly", () => {
    const wrapper = mount(DvButton, {
      props: { icon: "settings", iconOnly: true, label: "Settings" },
    });
    expect(wrapper.text()).not.toContain("Settings");
  });
});

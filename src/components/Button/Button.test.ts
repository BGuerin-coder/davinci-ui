import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

// @iconify/vue makes fetch requests to the CDN at runtime.
// Mock it to prevent happy-dom from aborting pending requests during teardown.
vi.mock("@iconify/vue", () => ({
  Icon: { template: "<span />" },
}));

describe("Button", () => {
  it("renders with default props", () => {
    const wrapper = mount(Button);
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.text()).toContain("Button");
  });

  it("renders the correct label", () => {
    const wrapper = mount(Button, { props: { label: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies the variant class", () => {
    const wrapper = mount(Button, { props: { variant: "danger" } });
    expect(wrapper.find("button").classes()).toContain("danger");
  });

  it("applies the size class", () => {
    const wrapper = mount(Button, { props: { size: "large" } });
    expect(wrapper.find("button").classes()).toContain("large");
  });

  it("emits click when clicked", async () => {
    const wrapper = mount(Button);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  it("sets disabled attribute when disabled", () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("applies loading class when loading", () => {
    const wrapper = mount(Button, { props: { loading: true } });
    expect(wrapper.find("button").classes()).toContain("davinci-btn--loading");
  });

  it("hides label when iconOnly", () => {
    const wrapper = mount(Button, {
      props: { icon: "settings", iconOnly: true, label: "Settings" },
    });
    expect(wrapper.text()).not.toContain("Settings");
  });
});

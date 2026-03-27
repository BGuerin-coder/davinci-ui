import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Tag from "./Tag.vue";

// @iconify/vue makes fetch requests to the CDN at runtime.
// Mock it to prevent happy-dom from aborting pending requests during teardown.
vi.mock("@iconify/vue", () => ({
  Icon: { template: "<span />" },
}));

describe("Tag", () => {
  it("renders slot content", () => {
    const wrapper = mount(Tag, { slots: { default: "En cours" } });
    expect(wrapper.text()).toContain("En cours");
  });

  it("applies the variant class", () => {
    const wrapper = mount(Tag, { props: { variant: "danger" } });
    expect(wrapper.find(".davinci-tag").classes()).toContain("danger");
  });

  it("applies the size class", () => {
    const wrapper = mount(Tag, { props: { size: "small" } });
    expect(wrapper.find(".davinci-tag").classes()).toContain("small");
  });

  it("applies the appearance class", () => {
    const wrapper = mount(Tag, { props: { appearance: "outline" } });
    expect(wrapper.find(".davinci-tag").classes()).toContain("outline");
  });

  it("does not render dismiss button when dismissible is false", () => {
    const wrapper = mount(Tag);
    expect(wrapper.find(".davinci-tag--dismiss").exists()).toBe(false);
  });

  it("renders dismiss button when dismissible is true", () => {
    const wrapper = mount(Tag, { props: { dismissible: true } });
    expect(wrapper.find(".davinci-tag--dismiss").exists()).toBe(true);
  });

  it("emits dismiss when dismiss button is clicked", async () => {
    const wrapper = mount(Tag, { props: { dismissible: true } });
    await wrapper.find(".davinci-tag--dismiss").trigger("click");
    expect(wrapper.emitted("dismiss")).toBeTruthy();
    expect(wrapper.emitted("dismiss")).toHaveLength(1);
  });

  it("does not emit dismiss when clicking the tag itself", async () => {
    const wrapper = mount(Tag, { props: { dismissible: true } });
    await wrapper.find(".davinci-tag").trigger("click");
    expect(wrapper.emitted("dismiss")).toBeFalsy();
  });

  it("renders icon when icon prop is provided", () => {
    const wrapper = mount(Tag, { props: { icon: "star" } });
    expect(wrapper.find(".davinci-tag--icon").exists()).toBe(true);
  });

  it("does not render icon when icon prop is empty", () => {
    const wrapper = mount(Tag);
    expect(wrapper.find(".davinci-tag--icon").exists()).toBe(false);
  });
});

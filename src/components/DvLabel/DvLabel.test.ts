import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import DvLabel from "./DvLabel.vue";

describe("DvLabel", () => {
  it("renders with default props", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "div" },
      slots: {
        default: "Label text",
      },
    });
    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.text()).toBe("Label text");
  });

  it("renders as label by default", () => {
    const wrapper = mount(DvLabel, {
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.element.tagName).toBe("LABEL");
  });

  it("renders as span when as='span'", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "span" },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.element.tagName).toBe("SPAN");
  });

  it("renders as div when as='div'", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "div" },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.element.tagName).toBe("DIV");
  });

  it("applies uppercase class when uppercase prop is true", () => {
    const wrapper = mount(DvLabel, {
      props: { uppercase: true },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.find(".dv-label--uppercase").exists()).toBe(true);
  });

  it("does not apply uppercase class by default", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "div" },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.find(".dv-label--uppercase").exists()).toBe(false);
  });

  it("has dv-label class", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "div" },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.find(".dv-label").exists()).toBe(true);
  });

  it("sets the for attribute when as='label' and for is provided", () => {
    const wrapper = mount(DvLabel, {
      props: { as: "label" },
      attrs: { for: "input-id" },
      slots: {
        default: "Label",
      },
    });
    expect(wrapper.find("label").attributes("for")).toBe("input-id");
  });

  it("logs warning when as='label' and no for attribute", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    mount(DvLabel, {
      props: { as: "label" },
      slots: {
        default: "Label",
      },
    });
    expect(warnSpy).toHaveBeenCalledWith(
      'DvLabel: when as="label", the "for" attribute should be provided to associate with an input element',
    );
    warnSpy.mockRestore();
  });
});

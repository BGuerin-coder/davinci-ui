import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import DvCaption from "./DvCaption.vue";

describe("DvCaption", () => {
  it("renders with default props", () => {
    const wrapper = mount(DvCaption, {
      slots: {
        default: "Caption text",
      },
    });
    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.text()).toBe("Caption text");
  });

  it("renders as span by default", () => {
    const wrapper = mount(DvCaption, {
      slots: {
        default: "Caption",
      },
    });
    expect(wrapper.element.tagName).toBe("SPAN");
  });

  it("renders as p when as='p'", () => {
    const wrapper = mount(DvCaption, {
      props: { as: "p" },
      slots: {
        default: "Caption",
      },
    });
    expect(wrapper.element.tagName).toBe("P");
  });

  it("renders as time when as='time'", () => {
    const wrapper = mount(DvCaption, {
      props: { as: "time" },
      slots: {
        default: "2024-01-01",
      },
    });
    expect(wrapper.element.tagName).toBe("TIME");
  });

  it("has dv-caption class", () => {
    const wrapper = mount(DvCaption, {
      slots: {
        default: "Caption",
      },
    });
    expect(wrapper.find(".dv-caption").exists()).toBe(true);
  });

  it("sets datetime attribute when as='time' and datetime is provided", () => {
    const wrapper = mount(DvCaption, {
      props: { as: "time" },
      attrs: { datetime: "2024-01-01T12:00:00Z" },
      slots: {
        default: "January 1, 2024",
      },
    });
    expect(wrapper.find("time").attributes("datetime")).toBe(
      "2024-01-01T12:00:00Z",
    );
  });

  it("logs warning when as='time' and no datetime attribute", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    mount(DvCaption, {
      props: { as: "time" },
      slots: {
        default: "2024-01-01",
      },
    });
    expect(warnSpy).toHaveBeenCalledWith(
      'DvCaption: when as="time", the "datetime" attribute should be provided for machine-readable timestamp',
    );
    warnSpy.mockRestore();
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(DvCaption, {
      slots: {
        default: "Custom caption content",
      },
    });
    expect(wrapper.text()).toBe("Custom caption content");
  });
});

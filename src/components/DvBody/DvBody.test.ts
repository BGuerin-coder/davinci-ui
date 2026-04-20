import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DvBody from "./DvBody.vue";

describe("DvBody", () => {
  it("renders with default props", () => {
    const wrapper = mount(DvBody, {
      slots: {
        default: "Body text",
      },
    });
    expect(wrapper.find("p").exists()).toBe(true);
    expect(wrapper.text()).toBe("Body text");
  });

  it("renders as p by default", () => {
    const wrapper = mount(DvBody, {
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.element.tagName).toBe("P");
  });

  it("renders as div when as='div'", () => {
    const wrapper = mount(DvBody, {
      props: { as: "div" },
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.element.tagName).toBe("DIV");
  });

  it("renders as span when as='span'", () => {
    const wrapper = mount(DvBody, {
      props: { as: "span" },
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.element.tagName).toBe("SPAN");
  });

  it("has dv-body class", () => {
    const wrapper = mount(DvBody, {
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.find(".dv-body").exists()).toBe(true);
  });

  it("applies lead class when lead prop is true", () => {
    const wrapper = mount(DvBody, {
      props: { lead: true },
      slots: {
        default: "Body text",
      },
    });
    expect(wrapper.find(".dv-body--lead").exists()).toBe(true);
  });

  it("does not apply lead class by default", () => {
    const wrapper = mount(DvBody, {
      slots: {
        default: "Body",
      },
    });
    expect(wrapper.find(".dv-body--lead").exists()).toBe(false);
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(DvBody, {
      slots: {
        default: "Custom body content",
      },
    });
    expect(wrapper.text()).toBe("Custom body content");
  });

  it("can combine as and lead props", () => {
    const wrapper = mount(DvBody, {
      props: { as: "div", lead: true },
      slots: {
        default: "Body text",
      },
    });
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.find(".dv-body--lead").exists()).toBe(true);
  });
});

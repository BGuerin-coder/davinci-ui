import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DvHeading from "./DvHeading.vue";

describe("DvHeading", () => {
  it("renders with default props (h1)", () => {
    const wrapper = mount(DvHeading, {
      slots: {
        default: "Heading text",
      },
    });
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.text()).toBe("Heading text");
  });

  it("renders as h1 by default", () => {
    const wrapper = mount(DvHeading, {
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H1");
  });

  it("renders as h2 when as='h2'", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h2" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H2");
  });

  it("renders as h3 when as='h3'", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h3" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H3");
  });

  it("renders as h4 when as='h4'", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h4" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H4");
  });

  it("renders as h5 when as='h5'", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h5" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H5");
  });

  it("renders as h6 when as='h6'", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h6" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.element.tagName).toBe("H6");
  });

  it("has dv-heading class", () => {
    const wrapper = mount(DvHeading, {
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.find(".dv-heading").exists()).toBe(true);
  });

  it("applies correct heading level class", () => {
    const wrapper = mount(DvHeading, {
      props: { as: "h2" },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.find(".dv-heading--h2").exists()).toBe(true);
  });

  it("applies truncate class when truncate prop is true", () => {
    const wrapper = mount(DvHeading, {
      props: { truncate: true },
      slots: {
        default: "Heading text",
      },
    });
    expect(wrapper.find(".dv-heading--truncate").exists()).toBe(true);
  });

  it("does not apply truncate class by default", () => {
    const wrapper = mount(DvHeading, {
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.find(".dv-heading--truncate").exists()).toBe(false);
  });

  it("sets title attribute when truncate is true", async () => {
    const wrapper = mount(DvHeading, {
      props: { truncate: true },
      slots: {
        default: "Heading text",
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes("title")).toBe("Heading text");
  });

  it("does not set title attribute when truncate is false", () => {
    const wrapper = mount(DvHeading, {
      props: { truncate: false },
      slots: {
        default: "Heading",
      },
    });
    expect(wrapper.attributes("title")).toBeUndefined();
  });
});

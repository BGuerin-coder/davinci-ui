import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import DvInput from "./DvInput.vue";

// @iconify/vue makes fetch requests to the CDN at runtime.
// Mock it to prevent happy-dom from aborting pending requests during teardown.
vi.mock("@iconify/vue", () => ({
  Icon: { template: "<span />" },
}));

describe("DvInput", () => {
  it("renders label correctly associated to input", () => {
    const wrapper = mount(DvInput, {
      props: { label: "Email address", id: "email-input" },
    });
    const label = wrapper.find("label");
    const input = wrapper.find("input");

    expect(label.text()).toContain("Email address");
    expect(label.attributes("for")).toBe("email-input");
    expect(input.attributes("id")).toBe("email-input");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(DvInput, { props: { label: "Name" } });

    await wrapper.find("input").setValue("hello");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["hello"]);
  });

  it("displays errorMessage when error prop is set", () => {
    const wrapper = mount(DvInput, {
      props: { label: "Email", error: "This field is invalid" },
    });
    const errorMessage = wrapper.find(".davinci-input__error-message");

    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toContain("This field is invalid");
  });

  it("sets aria-invalid on input when error prop is set", () => {
    const wrapper = mount(DvInput, {
      props: { label: "Email", error: "Invalid value" },
    });

    expect(wrapper.find("input").attributes("aria-invalid")).toBe("true");
  });

  it("disabled attribute is applied and interaction class is set", () => {
    const wrapper = mount(DvInput, {
      props: { label: "Name" },
      attrs: { disabled: true },
    });
    const input = wrapper.find("input");

    expect(input.attributes("disabled")).toBeDefined();
    expect(input.classes()).toContain("davinci-input__field--disabled");
  });
});

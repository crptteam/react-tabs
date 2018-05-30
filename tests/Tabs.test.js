import React from "react";
import { Tabs } from "../src/";
import { mount } from "enzyme";

describe("Tabs", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <Tabs
        selectedId={2}
        tabs={[{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

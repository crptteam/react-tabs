import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs/react";

import { Tabs } from "../index";

const elements = storiesOf("Tabs", module);

elements.addDecorator(withKnobs);

elements.add("default", () => {
  return <Tabs tabs={[{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]} />;
});

elements.add("with selectedId", () => {
  return (
    <Tabs
      selectedId={2}
      tabs={[{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]}
    />
  );
});

elements.add("with onSelect", () => {
  return (
    <Tabs
      selectedId={2}
      tabs={[{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }]}
      onSelect={val => alert(JSON.stringify(val))}
    />
  );
});

elements.add("with disabled", () => {
  return (
    <Tabs
      tabs={[
        { id: 1, title: "Tab 1" },
        { id: 2, title: "Tab 2" },
        { id: 3, title: "Tab 3", disabled: true }
      ]}
    />
  );
});

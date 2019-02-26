import React, { Component } from "react";
import { render } from "react-dom";

import Tabs from "../../src";

class Demo extends Component {
  render() {
    const tabs = [{ id: 1, title: "Tab 1" }, { id: 2, title: "Tab 2" }];

    return (
      <div>
        <Tabs fillWidth tabs={tabs} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  border-bottom: ${props => props.borderBottom};
  padding: ${props => props.padding};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TabsWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Tabs.TabsWrap,
    (props.theme && props.theme.Tabs && props.theme.Tabs.TabsWrap) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default TabsWrap;

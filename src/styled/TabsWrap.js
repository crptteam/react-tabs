import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  border-bottom: ${props => props.borderBottom};
  padding: ${props => props.padding};
  display: ${props => props.fillWidth ? 'flex' : 'inline-flex'};
  align-items: center;
  justify-content: ${props => props.fillWidth ? '' : 'space-between'};
  position: relative;
`;

const TabsWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Tabs.TabsWrap,
    (props.theme && props.theme.Tabs && props.theme.Tabs.TabsWrap) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default TabsWrap;

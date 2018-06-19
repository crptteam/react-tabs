import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  width: ${props => (props.width ? props.width + "px" : 0)};
  left: ${props => (props.left ? props.left + "px" : 0)};
  height: ${props => props.height};
  background: ${props => (props.width ? props.background : "rgba(0,0,0,0)")};
  position: absolute;
  bottom: ${props => props.bottom};
  display: ${props => (props.visible ? "inline-block" : "none")};
  transition: ${props => (props.width ? props.transition : "none")};
`;

const TabUnderline = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Tabs.TabUnderline,
    (props.theme && props.theme.Tabs && props.theme.Tabs.TabUnderline) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default TabUnderline;

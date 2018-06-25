import React from "react";
import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";
import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";

const Elem = styled.div`
  margin-right: 40px;
  :last-child {
    margin-right: 0px;
  }
  padding-bottom: ${props => props.paddingBottom};
  color: ${props => props.color};
  cursor: ${props => props.cursor};
  font-size: ${props => props.fontSize};
`;

const TabWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Tabs,
    (props.theme && props.theme.Tabs) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedTabWrap = innerMerge(
    {},
    defaultTheme.Tabs.TabWrap,
    (props.theme && props.theme.Tabs && props.theme.Tabs.TabWrap) || {}
  );

  Object.assign(
    theme,
    getThemeAsPlainObjectByKeys(
      mergedTabWrap,
      props.disabled ? "disabled" : "main"
    )
  );

  return <Elem {...props} {...theme} />;
};

export default TabWrap;

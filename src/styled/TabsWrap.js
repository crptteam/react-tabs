import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';


const Elem = styled.div`
  border-bottom: ${props => props.borderBottom};
  padding: ${props => props.padding};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TabsWrap = props => {
  const theme = getThemeAsPlainTextByKeys(
    props.theme && props.theme.TabsWrap || defaultTheme.TabsWrap
  );


  return <Elem {...theme} {...props} />;
};

export default TabsWrap;

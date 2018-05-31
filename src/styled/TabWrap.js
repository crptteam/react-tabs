import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../theme/defaultTheme';
import {getThemeAsPlainTextByKeys} from '../utils';

const Elem = styled.div`
    margin-right: 40px;
    :last-child {
      margin-right: 0px;
    }
    padding-bottom: 12px;
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    font-size: ${props => props.fontSize};
  `;


const TabWrap = props => {

  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(theme, getThemeAsPlainTextByKeys(
    (props.theme && props.theme.TabWrap) || defaultTheme.TabWrap,
    props.disabled ? 'disabled' : 'main'
  ));


  return <Elem {...props} {...theme} />;
};

export default TabWrap;

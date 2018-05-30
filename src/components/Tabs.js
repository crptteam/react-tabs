import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabsWrap from '../styled/TabsWrap';
import TabWrap from '../styled/TabWrap';
import TabUnderline from '../styled/TabUnderline';
import defaultTheme from '../theme/defaultTheme';

class Tabs extends Component {
  tabsElems;

  constructor(props) {
    super(props);

    this.displayName = 'Tabs';

    this.tabsElems = [];

    this.state = {
      selectedId:
        this.props.selectedId !== undefined &&
        this.props.selectedId !== null &&
        this.props.tabs.find(v => v.id == this.props.selectedId)
          ? this.props.selectedId
          : (this.props.allwaysSelected &&
              this.props.tabs.length &&
              this.props.tabs[0].id) ||
            null,
      underlineVisible: true,
      underlineWidth: 0,
      underlineLeft: 0
    };
}

  componentWillReceiveProps(props) {

    if (props.tabs !== this.props.tabs) {
      this.tabsElems = [];

      const sId =
        props.selectedId !== undefined &&
        props.selectedId !== null &&
        props.tabs.find(v => v.id == props.selectedId)
          ? +props.selectedId
          : this.props.allwaysSelected ? +props.tabs.slice().shift().id : null;

      this.setState({ selectedId: sId, underlineVisible: sId !== null });
      this.updateUnderlineParams();
    }
  }

  onTabClick(e, item) {
    if (item.disabled) return;

    this.setState({
      selectedId: item.id,
      underlineVisible: true
    });

    this.props.onSelect && this.props.onSelect(item);
    this.updateUnderlineParams(item.id);
  }

  updateUnderlineParams(selectedId) {
    setTimeout(() => {

      const sId =
        selectedId !== undefined && selectedId !== null
          ? selectedId
          : this.state.selectedId;



      const selected =
        sId !== null
          ? this.tabsElems.filter(v => v.item.id === sId).shift()
          : this.tabsElems.slice().shift();

      if (!selected || !selected.el) return;


      this.setState({
        underlineWidth: selected.el.offsetWidth,
        underlineLeft: selected.el.offsetLeft,
        underlineVisible: this.state.underlineVisible || this.props.tabs.filter(v => v.id === this.props.selectedId).length
      });
    }, 0);
  }

  componentDidMount() {
    this.setState({
      underlineVisible: this.props.allwaysSelected
    });

    this.updateUnderlineParams();
  }

  render() {
    const { tabs, ...otherProps } = this.props;

    return (
      <TabsWrap theme={this.props.theme}>
        <TabUnderline
          left={this.state.underlineLeft}
          width={this.state.underlineWidth}
          visible={this.state.underlineVisible}
          theme={this.props.theme}
        />
        {tabs.map(item => (
          <TabWrap
            key={item.id}
            innerRef={el => (this.tabsElems[item.id] = { el, item })}
            onClick={e => this.onTabClick(e, item)}
            disabled={item.disabled}
          >
            {item.title}
          </TabWrap>
        ))}
      </TabsWrap>
    );
  }
}

Tabs.propTypes = {
  theme: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  selectedId: PropTypes.number,
  allwaysSelected: PropTypes.bool
};

Tabs.defaultProps = {
  theme: defaultTheme,
  allwaysSelected: false,
  tabs: [{ id: 1, title: '' }]
};

export default Tabs;

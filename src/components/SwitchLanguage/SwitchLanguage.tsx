import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { switchLanguage } from '../../store/reviewSlice';

import { cnSwitchLanguage } from './SwitchLanguage.classname';
import './SwitchLanguage.classname';

class SwitchLanguage extends Component<any, any> {
  handleChange = (value: string) => {
    this.props.switchLanguage(value);
  };
  render() {
    return (
      <Select
        defaultValue="RU"
        className={cnSwitchLanguage()}
        onChange={this.handleChange}
        options={[
          { value: 'ru', label: 'RU' },
          { value: 'en', label: 'EN' },
        ]}
      />
    );
  }
}
const mapStateToProps = (state: any) => ({
  language: state.review.language,
});

const mapDispatchToProps = { switchLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(SwitchLanguage);

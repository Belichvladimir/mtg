import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import CurrentDate from '../CurrentDate/CurrentDate';

import { cnHeader } from './Header.classname';
import './Header.css';

const { Header } = Layout;
const { Title } = Typography;

export default class Head extends Component {
  render() {
    return (
      <Header className={cnHeader()}>
        <Title level={2} className={cnHeader('Title')}>
          Здесь будет Ваш ЛОГОТИП
        </Title>
        <SwitchLanguage />
        <CurrentDate />
      </Header>
    );
  }
}

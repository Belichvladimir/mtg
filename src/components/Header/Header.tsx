import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import CurrentDate from '../CurrentDate/CurrentDate';

const { Header } = Layout;
const { Title } = Typography;

export default class Head extends Component {
  render() {
    return (
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Title level={2} style={{ color: 'white', flexGrow: '1' }}>
          Здесь будет Ваш ЛОГОТИП
        </Title>
        <SwitchLanguage />
        <CurrentDate />
      </Header>
    );
  }
}

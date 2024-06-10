import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDate } from '../../store/dateSlice';

import { cnCurrentDate } from './CurrentDate.classname';
import './CurrentDate.css';

type Props = any;

class CurrentDate extends Component<Props> {
  convertDate = () => {
    const date = new Date();
    const second = date.getSeconds();
    const minut = date.getMinutes();
    const hour = date.getHours();
    return `${hour < 10 ? '0' + hour : hour}:${
      minut < 10 ? '0' + minut : minut
    }:${second < 10 ? '0' + second : second}`;
  };
  componentDidMount(): void {
    setInterval(() => {
      const result = this.convertDate();
      this.props.setDate(result);
    }, 1000);
  }
  render() {
    return (
      <span className={cnCurrentDate()}>{this.props.date}</span>
    );
  }
}

const mapStateToProps = (state:any) => ({
  date: state.date.value,
});

const mapDispatchToProps = { setDate };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDate);

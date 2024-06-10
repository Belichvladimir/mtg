import React, { Component } from 'react';
import Head from '../components/Header/Header';
import Main from '../components/Main/Main';

import { connect } from 'react-redux';
import { Layout, Pagination } from 'antd';
import { changePage } from '../store/pageSlice';
import { withRouter } from '../router/WithRouter';
import { setReview } from '../store/reviewSlice';
import { REVIEW_PER_PAGE } from '../utils/consts';

import { cnHome } from './Home.classname';
import './Home.css';

class Home extends Component<any, any> {
  currentPage = this.props.page;
  begin = (this.currentPage - 1) * REVIEW_PER_PAGE;
  end = this.currentPage * (REVIEW_PER_PAGE - 1);
  fetchingData = () => {
    fetch('data.json')
      .then((response) => response.json())
      .then((result: any) => {
        if (result && Object.keys(result[this.props.review.language]).length) {
          this.props.setReview(result[this.props.review.language]);
        }
      });
  };
  componentDidMount() {
    this.fetchingData();
    console.log(this.begin, this.end);
  }
  componentDidUpdate() {
    this.fetchingData();
    this.currentPage = this.props.page;
    this.begin = (this.currentPage - 1) * REVIEW_PER_PAGE;
    this.end = this.currentPage * (REVIEW_PER_PAGE - 1);
  }
  changePage = (page: number) => {
    this.props.changePage(page);
    this.props.navigate('/?page=' + page);
  };
  render() {
    return (
      <Layout className={cnHome()}>
        <Head />
        <Main items={this.props.review.items?.slice(this.begin, this.end)} />
        <Pagination className={cnHome('Pagination')}
          onChange={this.changePage}
          defaultCurrent={this.props.page}
          total={this.props.review.count}
        />
      </Layout>
    );
  }
}
const mapStateToProps = (state: any) => ({
  page: state.page.value,
  review: state.review,
});

const mapDispatchToProps = { changePage, setReview };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

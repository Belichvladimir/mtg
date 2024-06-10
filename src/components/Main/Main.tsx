import React, { Component } from 'react';
import { Layout, Table, TableColumnsType } from 'antd';
import { withRouter } from '../../router/WithRouter';
import { connect } from 'react-redux';

const { Content } = Layout;

interface DataType {
  key: React.Key;
  name: string;
  review: string;
  date: string;
}

class Main extends Component<any, any> {
  data: DataType[] = [];
  columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Review',
      dataIndex: 'review',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
  ];
  render() {
    return (
      <Content
        style={{ flexGrow: '1', padding: '0 48px', textAlign: 'center' }}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.items}
          pagination={false}
        />
      </Content>
    );
  }
}

const mapStateToProps = (state: any) => ({
  review: state.review,
});

export default withRouter(connect(mapStateToProps)(Main));

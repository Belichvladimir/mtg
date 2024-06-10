import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/Home';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route key={'/'} path={'/'} Component={Home} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
}

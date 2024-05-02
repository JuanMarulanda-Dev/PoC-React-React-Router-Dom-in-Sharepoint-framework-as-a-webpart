import * as React from 'react';
import type { IAppProps } from './IAppProps';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './pages/HomeComponent';
import AboutComponent from './pages/AboutComponent';

export default class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Router>
    );
  }
}

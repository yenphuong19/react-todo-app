import React from 'react';
import Provider from './Provider';
import Header from '../header/Header';
import JobList from '../joblist/JobList';
import Footer from '../footer/Footer';

function App() {
  return (
    <Provider>
      <div className="container">
        <Header />
        <JobList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

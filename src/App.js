import React from 'react';
import PageWrapper from './components/PageWrapper';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
      <PageWrapper>
        <Routes>
          <Route
            exact={true}
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          {/*<Route*/}
          {/*path="/contact"*/}
          {/*component={Contact}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*path="/skill"*/}
          {/*component={Skill}*/}
          {/*/>*/}
        </Routes>
      </PageWrapper>
    </HashRouter>
  );
}

export default App;
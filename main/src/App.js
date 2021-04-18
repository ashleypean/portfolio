import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import BlogDetails from './pages/BlogDetails';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Portfolios from './pages/Portfolios';
import Resumes from './pages/Resumes';
import ThemeContext from './Global/ThemeContext';

function App() {
  // Made it true if you want to load your site light mode primary
  const [lightMode, setLightMode] = useState(false);

  // Set lightmode/darkmode properties on page load
  (() => {
    if (lightMode) document.body.classList.add('light');
    else document.body.classList.remove('light');
  })();

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add('light');
    } else {
      setLightMode(false);
      document.body.classList.remove('light');
    }
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={lightMode}>
        <div className="light-mode">
          <span className="icon">
            {lightMode ? <Icon.Moon /> : <Icon.Sun />}
          </span>
          <button
            type="button"
            aria-label="Toggle Light Mode"
            className={lightMode ? 'light-mode-switch active' : 'light-mode-switch'}
            onClick={handleMode}
          />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home lightMode={lightMode} />
          </Route>
          <Route path="/resume" component={Resumes} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/blog" exact component={Blogs} />
          <Route path="/blog/blog-details/:id/:title" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Notfound} />
        </Switch>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

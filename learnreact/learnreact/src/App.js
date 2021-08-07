// import HookUsestate from './components/HookUsestate';
import AllPostuseEffect from './components/AllPostuseEffect';
// import HookUseEffect from './components/HookUseEffect';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Blog from './page/blog';
import Privacy from './page/privacy';

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link
            to={{
              pathname: '/contact',
              search: '?sort=name',
              hash: '#the-hash',
              state: { fromDashboard: true },
            }}
          >
            Contact
          </Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/AllPostuseEffect">useEffect</Link>
        </div>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Blog} path="/blog" />
          <Route component={Contact} path="/contact" />
          <Route component={Privacy} path="/privacy" />
          <Route component={AllPostuseEffect} path="/AllPostuseEffect" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

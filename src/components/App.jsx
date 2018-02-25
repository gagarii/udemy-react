import React from 'react'; // React import
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

// Appクラスを定義
// exactがないと、/は何にでもヒットするらしい
const App = () => (
  <Router>
    <div className="app">
      <ul className="left-navi">
        <li><Link to="/">ホテル検索</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);


export default App; // これで外部ファイルで使えるようにする

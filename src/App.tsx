import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/nav/nav';
import Footer from './components/layout/footer/footer';
import Main from './components/layout/main/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/users" />
        </Switch>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;

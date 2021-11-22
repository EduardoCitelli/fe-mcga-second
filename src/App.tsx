import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/nav/nav';
import Footer from './components/layout/footer/footer';
import Main from './components/layout/main/main';
import MainUser from './components/users/mainUser/mainUser';
import PageNotFound from './components/layout/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <main className="content">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/users" component={MainUser} />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;

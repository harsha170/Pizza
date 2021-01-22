import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/header";
import Login from "./pages/LoginPage";
import Register from "./pages/Registration";
import Dashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart"
import AdminLoginPage from "./pages/AdminLoginPage"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact strict component={Login}/>
          <Route path="/registration" component={Register}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/cart" component={Cart}/>
          <Route path="admin-login" componenet={AdminLoginPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

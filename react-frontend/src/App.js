import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
              <Route path="/" exact component={ListEmployeesComponent}></Route>
              <Route path="/employees" component={ListEmployeesComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              <Route path ="/view-employee/:id" component={ViewEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;

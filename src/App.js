import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing all the Views here
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";

// Importing all the components here
import SignIn from "./components/signin/SignIn";
import Dashbaord from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          {/* Displaying the header here */}
          <Header />
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          {/* End Switch */}

          {/* Putting a constant Footer here */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

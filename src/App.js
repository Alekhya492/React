import React, { Component } from 'react';
import './App.css';
// import baseWrapper from './Components/HOC/baseWrapper';
import Header from './Components/Header/Header';
import MenuData from './Components/MainContent/MenuData';
import CategoryBasedComponent from './Components/MainContent/Partials/CategoryBasedComponent';
import ItemTypeBasedComponent from './Components/MainContent/Partials/ItemTypeBasedComponent';
import IndividualItemComponent from './Components/MainContent/Partials/IndividualItemComponent';
import {Container} from 'react-bootstrap';
import MainContent from './Components/MainContent/MainContent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <Router>
         <Container className="App noPadding" fluid="true">
          <Header/>
          <MenuData /> 
          {/* <FilterComponent/>      */}
          <Switch>
            <Route exact path="/" component={MainContent}></Route>
            <Route exact strict path="/:category/:type" component={CategoryBasedComponent}></Route>
            <Route exact strict path="/:category/:type/:itemType" component={ItemTypeBasedComponent}></Route>
            <Route exact strict path="/:category/:type/:itemType/:itemId" component={IndividualItemComponent}></Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}
 
// export default baseWrapper(App,"App");
export default App;
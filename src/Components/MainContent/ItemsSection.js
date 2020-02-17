import React,{Fragment} from 'react';
import {Row,Col} from'react-bootstrap';
import {Switch,Route} from 'react-router-dom';
import CategoryBasedComponent from './Partials/CategoryBasedComponent';
import ItemTypeBasedComponent from './Partials/ItemTypeBasedComponent';
import IndividualItemComponent from './Partials/IndividualItemComponent';

const ItemsSection =()=>{  
    return (
        <Fragment>
            <Row>
            <Col xs={3}>filter</Col>
            <Col xs={9}>
                <Switch>
                    <Route exact path="/" component={MainContent}></Route>
                    <Route exact strict path="/:category/:type" component={CategoryBasedComponent}></Route>
                    <Route exact strict path="/:category/:type/:itemType" component={ItemTypeBasedComponent}></Route>
                    <Route exact strict path="/:category/:type/:itemType/:itemId" component={IndividualItemComponent}></Route>
                </Switch>
            </Col>
            </Row>
        </Fragment>
    )
}

export default ItemsSection;
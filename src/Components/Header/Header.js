import React,{Fragment} from 'react';
import './Header.css';
import { Row,Col,Form,FormControl,Button,Image } from "react-bootstrap";
// import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
// import { FaShoppingCart } from 'react-icons/fa'; 

const Header= () =>{
    return (
       <Fragment>
          <div className="header">
            <Row>
                <Col xs={2} className="text-right">
                    <a href="/">
                        <Image className="logo" fluid="true" src="https://ekart.pk/wp-content/uploads/2019/11/Logopit_1572769756977-e1572770928861.png" alt="logo" roundedCircle />
                    </a>
                </Col>
                <Col xs={6}>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit"variant="warning" >Go</Button>
                    </Form>
                </Col>
                <Col xs={2} className="text-center">
                    <Button>Login In</Button>
                </Col>
                <Col xs={1} className="text-left">
                    <Button className="cart"> Cart</Button>
                </Col>
            </Row>
           </div>
       </Fragment> 
    )
}

export default Header;
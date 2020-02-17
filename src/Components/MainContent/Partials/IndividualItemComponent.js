import React,{useState,useEffect} from 'react';
import axios from'axios';
import '../ItemsList.css';
import {Row,Col,Card,Button} from 'react-bootstrap';

const IndividualItemComponent =(props)=>{
    console.log(props);
   const [itemRequired,setItem] = useState({});
   const [ratingVal,setRatingVal] = useState(0);
     
  const fetchItem= () =>{
    axios.get('https://jsonblob.com/api/72127bc9-509e-11ea-9bed-c1d2eef1045c')
    .then(res => {
         const response = res.data;
         let currItem = response.find(item => item.name === props.match.params.itemId)
         setItem(currItem);

     })
 }
 useEffect(()=>{
    fetchItem();
 },[]); 
 const ratingHandler =({target})=>{
    let ratingGiven = (target.value <= 5)?target.value:'';
    setRatingVal(ratingGiven);
 }
    return(
        <Row className="cardList noMargin"> 
              <Col xs={12} sm={8} md={6} className="individualItem m-auto">
                <Card className="text-left">
                  <Card.Img variant="top" src="https://i.stack.imgur.com/WeyM8.jpg" />
                  <Card.Body>
                    <Card.Title>{itemRequired.name}</Card.Title>
                     <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Text>Price : ${itemRequired.cost}</Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <Card.Text>
                      Please enter the rating: <input type="text" onChange={ratingHandler} value={ratingVal}/>
                    </Card.Text>
                    {
                      (ratingVal==='')?(<Card.Text className="alert alert-info">Note : Please enter less than 5</Card.Text>):(<Card.Text>Rating Given:{ratingVal}</Card.Text>)
                    }
                  </Card.Body>
                </Card>
            </Col>
      </Row>
    )
}

export default IndividualItemComponent;
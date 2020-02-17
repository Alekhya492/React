import React,{useEffect,useState} from 'react';
import axios from'axios';
import '../ItemsList.css';
import {Row,Col,Card} from 'react-bootstrap';

const ItemTypeBasedComponent =(props) =>{
  // console.log(props);
  const [itemsList, setItemsList] = useState([{}]);

  const fetchItemsList = () =>{
     axios.get('https://jsonblob.com/api/72127bc9-509e-11ea-9bed-c1d2eef1045c')
     .then(res => {
          const response = res.data;
          let filteredItemsList = response.filter((item,index)=>{
            let currType  = props.match.params.type,
                            currItem = props.match.params.itemType;  
             if(item.type === currType &&  item.brand=== currItem){ return item}
            })
          setItemsList([...filteredItemsList]);

      })
  }
  useEffect(()=>{
    fetchItemsList();
  },[]);

  return (
      <Row className="cardList">
        {(itemsList.length)?(
          itemsList.map(({name,cost,category,type,id},index) =>{ 
            return (
           <Col xs={12} sm={6} md={3} key={`item${index}`}><a href={`/${category}/${type}/${id}/${name}`}>
              <Card className="text-left">
              <Card.Img variant="top" src="https://i.stack.imgur.com/WeyM8.jpg" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
            <Card.Text className="amountData">Price : <span>${cost}</span></Card.Text>
              </Card.Body>
              </Card></a>
            </Col>
            )
          })): (<h4 className="m-auto">Sorry !! No Matches Found :(</h4>)
        }       
      </Row>
  )
}

export default ItemTypeBasedComponent;
import React,{useEffect,useState,Fragment} from 'react';
import axios from'axios';
import '../ItemsList.css';
import {Row,Col,Card} from 'react-bootstrap';
import FilterComponent from './FilterComponent';
 
const CategoryBasedComponent =(props) =>{
  console.log(props)
  const [categoryList, setCategoryList] = useState([{}]);
 
  const fetchcategoryList = () =>{
     axios.get('https://jsonblob.com/api/72127bc9-509e-11ea-9bed-c1d2eef1045c')
     .then(res => {
          const response = res.data;
          let filteredList = response.filter((item,index)=>{
            let currCategory  = props.match.params.category,
                            currType = props.match.params.type;  
             if(item.category === currCategory&&  item.type=== currType){ return item}
            })
          setCategoryList([...filteredList]);
      })
  }
  useEffect(()=>{
    fetchcategoryList();
  },[]);
 
  return (
    <Fragment>
      <Row className="noMargin">
        <Col xs={2} className="filterComponent"><FilterComponent/></Col>  
        <Col xs={10} className="cardList noMargin">
          <Row className="noMargin">
            {(categoryList.length)?(
              categoryList.map(({category,type,name,cost,id,src,rating,userRatings,userReviews},index) =>{ 
                return (
                  <Col xs={12} sm={6} md={3} key={`item${index}`}><a href={`/${category}/${type}/${id}/${name}`}>
                  <Card className="text-left">
                  <Card.Img variant="top" src={src} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                <Card.Text><span class="badge">{rating}</span><span>{userRatings} Ratings &</span> <span>{userReviews} Reviews</span></Card.Text>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Text>Price : <span className="amountData">${cost}</span></Card.Text>
                  </Card.Body>         
                  </Card></a>
                </Col>
                )
              })): (<h4>No Matches Found !!</h4>)
            } 
          </Row>      
      </Col>
      </Row>
    </Fragment>
  )
}

export default CategoryBasedComponent;
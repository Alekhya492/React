import React,{Component,Fragment } from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import ControlledCarousel from './CarouselSlider';
import './ItemsList.css';

class MainContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemList:{},
      catalogList:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonblob.com/api/72127bc9-509e-11ea-9bed-c1d2eef1045c')
    .then(response => response.json())
    .then(response=>{
        let catalogList = response.map(item => item.category);
        catalogList = [...new Set(catalogList)];
        console.log(catalogList);
        this.setState({
          itemList :[...response],
          catalogList:catalogList
        });
    })
  }
  render(){
    let newList ={};
    this.state.catalogList.map(catalogItem =>{
      let currList = [],count=0;
       currList = this.state.itemList.map((listItem,index) =>{        
        if(listItem.category === catalogItem && count < 4){
          count++;
          return listItem
        }else{
          count =count
        }
      });
      currList = [...new Set(currList)].filter(item => item!== undefined)
      newList[catalogItem] = [...currList];      
      console.log(newList)
    })
    return(
      <Fragment>
        <ControlledCarousel/>      
        <Row className="cardList homePage">        
          {  
            this.state.catalogList.map((catalogItem,index) =>{
              //let catalogItem = catalogItem;
              return(
               <Fragment key={`catalogItem${index}`}>
                  <Col xs={12}>
                    <h2 className="catalogName text-left">{catalogItem}</h2>
                  </Col>
                  {
                    newList[catalogItem].map((item,index )=> {
                      return(
                            <Col xs={12} sm={6} md={3} key={`items${index}`}><a href={`/${item.category}/${item.type}/${item.id}/${item.name}`}>
                            <Card className="text-left">
                            <Card.Img variant="top" src="./images/favicon.ico" />
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                              </Card.Text> */}
                              <Card.Text>Price :<span className="amountData"> ${item.cost}</span></Card.Text>
                              <p>Read More ..</p>
                            </Card.Body>
                            </Card></a>
                         </Col>
                      )                     
                    })
                }</Fragment>
              )       
            })
          }
      </Row>
      </Fragment>
    )
  }
}

export default MainContent;


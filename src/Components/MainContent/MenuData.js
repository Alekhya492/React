import React,{useState,useEffect,Fragment} from 'react';
import axios from 'axios';
import {Row,Col,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './MainContent.css'; 

const MenuData=()=>{
    const [menuList,setMenuList] = useState([
        {
            itemId:'',
            title:'',
            links:[]
        }
    ]);
    const fetchMenuData=()=>{
        axios.get('https://jsonblob.com/api/e248ecb3-507f-11ea-9bed-c50766312164')
        .then(res => {
          const response = res.data;
            setMenuList([
               ...response
            ]);
        })
    }
    useEffect(()=>{
        fetchMenuData()
    },[]);

    return(
        <Row className="menuBar noMargin">            
            <Col xs={12} className="noPadding">
               <Navbar bg="light" expand="lg"className="noPadding" >
               <Nav className="mr-auto">
                   {
                       menuList.map(({itemId,title,links},index) =>{
                           return(
                            <Fragment key={`itemid${index}`}>
                              <NavDropdown key={itemId} title={title} id="basic-nav-dropdown">
                               { links.map(item =>{
                                   const mainItemName  =item.sublinks[0];
                                   const sublinkNames =  item.sublinks[1].submenu;
                                   const mainTitle =title;
                                  return(
                                    <Fragment  key={`itemid${index}`+1}>       
                                      <NavLink className="CategoryName" to={`/${title}/${mainItemName.type}`}>{mainItemName.type}</NavLink>
                                      <NavDropdown.Divider key="Divider{index}"/>
                                       {
                                           sublinkNames.map(({title,index}) =>{
                                             return(
                                                <NavDropdown.Item  href={`/${mainTitle}/${mainItemName.type}/${title}`} className="CategoryItemName dropdown-item" key={`itemList${index}`}>{title}</NavDropdown.Item>
                                             )
                                           })
                                        }
                                   </Fragment>
                                  ) 
                                 })
                               }
                               </NavDropdown>                               
                            </Fragment>
                           )
                       })
                   }
                  </Nav>
               </Navbar>
            </Col>
        </Row>
    )
}
export default MenuData;

 
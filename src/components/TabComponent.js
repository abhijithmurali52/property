import React, { useState } from "react";
import {Tabs,Tab,Button, Container} from "react-bootstrap"
import CardComponent from "./CardsComponent";
import Header from "./Header";


const TabComponent = () => {

 
    return(
        <>
        <Header/>
        <div style={{ backgroundColor: "lightblue"}}>
        <div style={{
            textAlign: "center",
           
          }}>
        <h2>Featured Listed Property</h2>
          <p>
            Real estate can bought,sold,leased or rented and can be valubale
            <br /> investment oppertunity. The value of the investment can be
          </p>
        </div>
        <Container>
          <div >
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{marginLeft:"3rem"}}>
        <Tab eventKey="first" title="London">
          <div><CardComponent/></div>
        </Tab>
        <Tab eventKey="second" title="New York">
        <div><CardComponent/></div>
        </Tab>
        <Tab eventKey="third" title="Paris" >
        <div><CardComponent/></div>
        </Tab>
        <Tab eventKey="forth" title="Tokyo">
        <div><CardComponent/></div>
        </Tab>
        </Tabs>
        
        </div>
        
      
      </Container>
      
      <CardComponent/>
      </div>
       
        
        </>
    );
};
export default TabComponent;
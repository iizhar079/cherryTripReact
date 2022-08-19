
import React from "react";
import './card.css';

import Nav from 'react-bootstrap/Nav';



const CardDestination = (props) => (
  <div className="destinationcard1">

  
  <img  src={ props.imgUrl }  />
   
  
    <div className="destinationcard-content text-white ">
      <h2 className="destinationcardTitle">{ props.title }</h2>

      <div className="destinationshoppingCart mt-4">
      <Nav.Link className="link  "  href="#action1"><img  src={props.content }  /></Nav.Link>
      
      </div>
      
     
    </div>
  </div>
);
  
  const CardContainer = (props) => (
    <div className="destinationcards-container1 row">
      {
        props.cards.map((card) => (
          <div className="col-lg-4 col-md-6 col-sm-3">
          <CardDestination title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl } 
            />
          </div>
          
        ))
      }
    </div>
  );
  
  class App extends React.Component {
    render () {
      const cardsData = [
        {id: 1, title: 'KUMRAT', content: '/img/icons8-shopping-cart-24.png',  imgUrl: '/img/kumrat.png'},
        {id: 2, title: 'CHITRAL TOUR',content: '/img/icons8-shopping-cart-24.png',imgUrl: '/img/chitral.png' },
        {id: 3, title: 'SWAT TOUR',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/swat.png'},
        {id: 4, title: 'KUMRAT',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/kumrat.png'},
        {id: 5, title: 'KUMRAT', content: '/img/icons8-shopping-cart-24.png',imgUrl: '/img/kumrat.png'},
        {id: 6, title: 'CHITRAL TOUR',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/chitral.png'},
        {id: 7, title: 'SWAT TOUR',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/swat.png'},
        {id: 8, title: 'KUMRAT',content: '/img/icons8-shopping-cart-24.png',imgUrl: '/img/kumrat.png' },
        {id: 9, title: 'KUMRAT',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/kumrat.png'},
        {id: 10, title: 'CHITRAL TOUR',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/chitral.png'},
        {id: 11, title: 'SWAT TOUR',content: '/img/icons8-shopping-cart-24.png', imgUrl: '/img/swat.png'},
      ]
      
      return(
        <div className="container">
          
          <CardContainer cards={ cardsData } />
       
          
         
        </div>
      );
    }
  }
  export default App;
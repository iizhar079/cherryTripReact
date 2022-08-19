
import React from "react";
import { NavLink } from "react-bootstrap";
import './card2.css';


const Card2 = (props) => (
  <React.Fragment>
    <div >
      <div className="card">
        <img src={props.imgUrl} />
        <div className="card-content text-white ">
          <h2 className="cardTitle">{props.title}</h2>
          <h3 className="ms-4">{props.price}</h3>
        </div>

      </div>
      <p className="backText">{props.content}</p>
      <NavLink href="#" className=" text-danger text-center">{props.cardLink}</NavLink>


    </div>

  </React.Fragment>

);

const CardContainer = (props) => (
  <div className="cards-container ">
    {
      props.cards.map((card) => (
        <Card2 title={card.title}
          imgUrl={card.imgUrl}
          content={card.content}
          cardLink={card.cardLink}
          price={card.price}
        />
      ))
    }



  </div>

);

class App extends React.Component {
  render() {
    const cardsData = [
      { id: 1, title: 'KUMRAT', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ', cardLink: "view more", imgUrl: '/img/kumrat.png' },
      { id: 2, title: 'CHITRAL TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/chitral.png' },
      { id: 3, title: 'SWAT TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/swat.png' },
      { id: 4, title: 'KUMRAT', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/kumrat.png' },
      { id: 5, title: 'KUMRAT', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/kumrat.png' },
      { id: 6, title: 'CHITRAL TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/chitral.png' },
      { id: 7, title: 'SWAT TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/swat.png' },
      { id: 8, title: 'KUMRAT', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/kumrat.png' },
      { id: 9, title: 'KUMRAT', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/kumrat.png' },
      { id: 10, title: 'CHITRAL TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/chitral.png' },
      { id: 11, title: 'SWAT TOUR', price: "100$", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ,', cardLink: "view more", imgUrl: '/img/swat.png' },
    ]

    return (
      <div className="container-fluid">


        <CardContainer cards={cardsData} />

      </div>
    );
  }
}
export default App;

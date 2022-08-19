
import React from "react";
import './card.css';

const TourCard = (props) => (
    <div className="tourcard1">


        <img src={props.imgUrl} className="tourCardBg"/>


        <div className="tourcard-content  ">
            <h2 className="tourcardTitle m-2">{props.title}</h2>
            <span className="tourPrice m-2">{props.price}</span>
            <span className="tourPerson m-2">{props.Person}</span>
            <p className="tourCardText m-2">{props.text}</p>
            <div className="shoppingCart mt-4">
            <p className="tourWatch">
            <img  src={props.watch } style={{width:"18px",height:"18px"}} />
            </p>
            <p className="tourdays">{props.days}</p>
             
      
      </div>




        </div>
    </div>
);

const CardContainer = (props) => (
    <div className="tourcards-container1 row">
        {
            props.cards.map((card) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <TourCard title={card.title}
                        price={card.price}
                        Person={card.person}
                        text={card.text}
                        watch={ card.watch}
                        days={ card.days }
                        imgUrl={card.imgUrl}
                    />
                </div>

            ))
        }
    </div>
);

class App extends React.Component {
    render() {
        const cardsData = [
            { id: 1, title: 'KUMRAT', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights", imgUrl: '/img/kumrat.png' },
            { id: 2, title: 'CHITRAL TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights", imgUrl: '/img/chitral.png' },
            { id: 3, title: 'SWAT TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/swat.png' },
            { id: 4, title: 'KUMRAT', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/kumrat.png' },
            { id: 5, title: 'KUMRAT', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/kumrat.png' },
            { id: 6, title: 'CHITRAL TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/chitral.png' },
            { id: 7, title: 'SWAT TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/swat.png' },
            { id: 8, title: 'KUMRAT', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/kumrat.png' },
            { id: 9, title: 'KUMRAT', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/kumrat.png' },
            { id: 10, title: 'CHITRAL TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/chitral.png' },
            { id: 11, title: 'SWAT TOUR', price: "$100 ", person: "/ person", text: "Lorem Ipsum proin gravida  nibh vel velit auctor aliquee  ", watch:'/img/time.png',days:"12 days 11 nights",imgUrl: '/img/swat.png' },
        ]

        return (
            <div className="container ">


                <CardContainer cards={cardsData} />
            </div>
        );
    }
}
export default App;

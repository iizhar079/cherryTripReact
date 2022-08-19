import React from "react";



import './home.css';
const Counter = (props) => {
  
  
  const countStateArray = React.useState(0);
  const count = countStateArray[0];
  const setCount = countStateArray[1];
  
  const increase = () => {
    setCount(count + 1);
    console.log(props);
  }; 

  const decrease = () => setCount(prevCount => {
    if (prevCount <= 0) return 0;
    return prevCount - 1;
  })
  
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      
      <div className="counter">
        
        <button className="countMin rounded" onClick={decrease}>-</button>
        <span className="count">{count}</span>
        <button className="countPlus rounded" onClick={increase}>+</button>
      </div>
    </div>
  )
}

const ClickerApp = () => {
  return (
    <div className="App">
      <div className="counter-container">
        <Counter propLog={"log me from setState"} />
      </div>
    </div>
  );
};

export default ClickerApp;




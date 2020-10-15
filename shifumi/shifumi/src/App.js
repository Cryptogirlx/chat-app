import React,{useState} from 'react';
import './App.css';


// zsofieee
function App() {

  
  const [count1,setCount1]= useState(0);
  const [count2,setCount2]= useState(0);
  const options = ["rock","paper","sissor"];


  const countmyScore = () => {
    setCount1(count1 + 1)

  }
  const countCompScore = () => {
    setCount2(count2 + 1)

  }
  const generateComputerChoice = () => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice
  }
  
  const drawOrNot =(myChoice)=>{
 
    const compChoice = generateComputerChoice();
    compChoice === myChoice
    ? document.write("its a draw")
    : winOrLose(myChoice, compChoice);
  }


  const winOrLose =()=> {





  }

  

  return (
    <div className="App">
      <h1>Your score: {count1}</h1>
      <h1>Comp score: {count2}</h1>


     <button onClick={() => drawOrNot ('rock')}>Rock</button>
     <button onClick={() => drawOrNot ('paper')}> Paper</button>
     <button onClick={() => drawOrNot ('scissors')}>Scissors</button>
    </div>
  )
  };

export default App;

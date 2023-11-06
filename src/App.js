import './App.css';
import React, {useState} from 'react';
import Header from './components/header';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Card3 from './components/card3'; // Uncompleted
import Card4 from './components/card4';// Uncompleted

function App() {

  const [stage, setstage] = useState(1);
  const [detail, setdetail] = useState({});
  const [plan, setPlan] = useState("");
// add ons
// plans 
// contacts

  const userDetail = (name, email, phone) =>{
    setdetail({name, email, phone});
  }


  const planSelection = (plans) => {
    setPlan(plans);
  }

  const goNext = () => {
    setstage(stage + 1);
  };

  const goBack = () => {
    setstage(stage - 1);
  };

  

  return (
    <div className="App">
      <Header step={stage}/>
      <Card1 place={stage} handledetail={userDetail} onClick={goNext} GoBack={goBack}/>
      <Card2 place={stage} onClick={goNext} GoBack={goBack} planSelector={planSelection} />
      <Card3 /> 
      <Card4 /> 
    </div>
  );
}

export default App;
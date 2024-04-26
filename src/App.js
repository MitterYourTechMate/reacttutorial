import logo from './logo.svg';
import './App.css';
import './css/new.css'
import FirstLandingText from "../src/components/firstlandingtext"
import SecondLandingText from "../src/components/secondlandingtext"


function App() {
  
  return (
    <div className="container" style={{textAlign:"center"}}>
      <div style={{height:"30vh", backgroundColor:"red"}}>
        <FirstLandingText></FirstLandingText>
      </div>
      <div style={{height:"40vh", backgroundColor:"yellow", display:"grid", gridTemplateColumns:"50% 50%"}}>
        <div style={{backgroundColor:"green", height:"40vh"}}>
          <FirstLandingText></FirstLandingText>
        </div>
        <div style={{backgroundColor:"brown", height:"40vh"}}>
          <FirstLandingText></FirstLandingText>
        </div>
      </div>
      <div style={{height:"30vh", backgroundColor:"yellow", display:"grid", gridTemplateColumns:"33% 33% 34%"}}>
        <div style={{backgroundColor:"blue", height:"30vh"}}>
        <FirstLandingText></FirstLandingText>
        </div>
        <div style={{backgroundColor:"grey", height:"30vh"}}>
        <FirstLandingText></FirstLandingText>
        </div>
        <div style={{backgroundColor:"orange", height:"30vh"}}>
        <FirstLandingText></FirstLandingText>
        </div>
      </div>
    </div>
  );
}

export default App;

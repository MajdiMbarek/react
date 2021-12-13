
import './App.css';
import windows from './Windows.jpg'
import CAT from "./CAT.mp4"


function App() {
  return (
    <div>


      <div style={
        { border: "solid 1px black", maxWidth: "100vw" }

      }>

        <h1 className="title red">majdi mbarek</h1>

        <br />

        <img src={windows} alt="windows" />

        <br />

        <img src={"../Laptop.jpg"} alt="laptop" />


      </div>

      <video width="320" height="240" controls>

        <source src={CAT} />
      </video>


    </div>

  );

}


export default App;



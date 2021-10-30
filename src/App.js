
import Car from "./Car";

export default function App(props) {
  if(props.isLoad){
    return (
      <div className="container">
        <Car  color="black" year="2202">
          NEW 2021
        </Car>
        <Car name="Merc" color="silver" />
        <Car name="Lexus" color="red"/>
        <Car name="Nexus" color="red">
          "SUPER"
        </Car>
      </div>
    );

  }else{
    return (
      <div className="error">
        <h1>ERROR</h1>
      </div>
    )
  }

 
}

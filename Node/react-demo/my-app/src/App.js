import React from 'react';
import './App.css';

//const App = () => <p><Hola/></p>;
class ComponentePersonajes extends React.Component {
  state = {
    show: true
  }
cambiarEstado =()=>{
  this.setState({show:!this.state.show});
}
render() {
  if(this.state.show===false){
    return (
    <div>No hay personajes
      <p></p> <button onClick={this.cambiarEstado}>cambiar Estado</button>
  {/*     <button onClick={()=> this.setState({show:true})}>Cambiar estado</button> */}
    </div>);
  } 
  else{
  return(
    <div id="personajes_caja">{this.props.nombre}
      <h1 id="personajes_poder">
      {this.props.poder}
      </h1>
      <button onClick={this.cambiarEstado}>
        Cambiar Estado
      </button>
    </div>);
  }
}
};
function App(){
  return (<h5><h1>Los personajes de DBZ son: </h1>
  <ComponentePersonajes nombre="Goku" poder="Henkidama"/> 
  <ComponentePersonajes nombre="Vegeta" poder="Big Bang"/> 
  <ComponentePersonajes nombre="Piccoro" poder="Makankosapo"/></h5>);
}

export default App;

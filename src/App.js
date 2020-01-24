import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import routes from './routes';


function App () {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  )
}

export default App;



// class App extends Component {
//   constructor(){
//     super ()
//     this.state={
//       inventory: [],
//     }
//   }

//   componentDidMount(){
//     axios.get('api/inventory').then(res => this.setState({
//       inventory: res.data
//     }))
//   }

//   render(){
//     return (
//       <div className="App">
//         <Header/>
//         <Dashboard inventory={this.state.inventory}/>
//         <Form/>
//       </div>
//     )
//   }
// }

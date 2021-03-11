import React from 'react';
import './App.css';
import {Client} from './util/Client';

class App extends React.Component<any, any>{

    componentDidMount() {
      var client = new Client();
      client.get()
      .then(patient => {
          console.log(patient);
          this.setState({patient: patient})
      })
       setInterval(() => {
           console.log(this.state);
       }, 5000)
    }



    render(){
        if (this.state && this.state.patient) {
            return <div>Hi {this.state.patient.name[0].given[0]}</div>;
        }
        else {
            return <div>Loading...</div>
        }
    }
}

export default App;

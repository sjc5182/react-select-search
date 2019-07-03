import React from 'react';
import './App.css';
import Form from './components/search-form'
import AirportsList from './data-api'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      initData: []
    }
  }
  
  // async componentDidMount(){
  //   const config = {
  //     method: 'post',
  //     headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
  //   };
  //   const targetUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/fc39f58b-d3ab-4411-bc57-8e0b260e8ac0'
  //   let response = await fetch(targetUrl, config);
  //   let data = await response.json()
  //   this.setState({
  //     initData: data
  //   })
  // }
  render(){
    return (
      <Form List = {AirportsList}/>
    );
  }
}

export default App;

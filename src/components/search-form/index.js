import React from 'react';
import SearchWrapper from  './styled'
import Modal from '../drop-down-modal'
import AirportsList from '../../data-api'

class inputForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value: '',
      searchList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSearch = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      let airportSymbol,
          inputLength = this.state.value.length
      if(inputLength===3){
        airportSymbol = AirportsList.airportList.filter(airport => {
          let newValue = this.state.value.toLowerCase(),
              symbol = airport.symbol.toLowerCase(),
              airportNameString = airport.airportName.toLowerCase()
          if(symbol === newValue){
            return symbol === newValue
          }
            return airportNameString.includes(newValue)
        })
      }else{
        airportSymbol = AirportsList.airportList.filter(airport => {
          let airportName = airport.airportName.toLowerCase()
            return airportName.indexOf(this.state.value.toLowerCase())!==-1
        })
      }
      this.setState({
        searchList: [...airportSymbol]
      })
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let sendRequestBody = `inboundDate=2019-07-16&country=US&currency=USD&locale=en-US&originPlace=SFO-sky&destinationPlace=JFK-sky&outboundDate=2019-07-12&adults=1`
    
    
      const config = {
        method: 'POST',
        headers: {
          'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: sendRequestBody
      };
      const targetUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0'
      fetch(targetUrl, config).then(response => {
        console.log(response)
      })
      //let data = await response.formData()
      
  }
  render(){
    return (
      <SearchWrapper>
        <form onSubmit = {this.handleSubmit}>
          <div className = 'label_container'>
            <div className = 'label_input'>
              <label>From</label>
              <input type = 'text' placeholder = 'Country, city or airport' value = {this.state.value} onChange = {this.handleSearch}/>
            </div>
            <div className = 'label_input'>
              <label>To</label>
              <input type = 'text' placeholder = 'Country, city or airport'/>
            </div>
            <div className = 'label_input'>
              <label>Depart</label>
              <input type='date'></input>
            </div>
            <div className = 'label_input'>
              <label>Return</label>
              <input type='date'></input>
            </div>
            <div className = 'label_input'>
              <label>Cabin Class & Travelers</label>
              <select>
                <option>Economy</option>
                <option>First Class</option>
              </select>
            </div>
          </div>
          <input type = 'submit' value = "Search Flight" className = 'button_submit'/>
        </form>
        <Modal List = {this.state.searchList}/>
      </SearchWrapper>
    )
  }
}

export default inputForm
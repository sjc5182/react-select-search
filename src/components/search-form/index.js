import React from 'react';
import SearchWrapper from  './styled'

class inputForm extends React.Component{
 
  render(){
    return (
      <SearchWrapper>
        <form>
          <div className = 'label_container'>
            <div className = 'label_input'>
              <label>From</label>
              <input type = 'text'></input>
            </div>
            <div className = 'label_input'>
              <label>To</label>
              <input type = 'text'></input>
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
        </form>
      </SearchWrapper>
    )
  }
}

export default inputForm
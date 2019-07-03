import React from 'react'
import Drop from './styled'

class Modal extends React.Component{
  
  render(){
    return(
      <Drop>
        {
          this.props.List.map((ele, index) =>
              <ul key = {index}>
                <li>
                  {`${ele.city} ${ele.airportName} (${ele.symbol})`}
                </li>
              </ul>
            )
        }
      </Drop>
    )
  }

}

export default Modal
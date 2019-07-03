import styled from 'styled-components';

const SearchPage = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: .75rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  color: #ACB2A9;
  .label_container{
    width: 100%;
    height: 6rem;
    line-height: 2rem;
    display: flex;
    justify-content: center;
  }
  .label_input{
    display: flex;
    flex-direction: column;
  }
  .button_submit{
    float: right;
    margin-right: 4rem
  }

  input[type=text] {
    width: 18rem;
    height: 2.5rem;
    font-size: 2em;
  }
  input::placeholder{
    font-size: 1.25rem;
    font-family: cursive;
    color: #DCDCDC;
  }
  input[type=date]{
    width:8rem;
    height: 2.65rem;
  }
  input[type=submit]{
    width: 15rem;
    height: 3.5rem;
    background: #00d775;
    border-radius: 50px;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
  }

  select {
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
    width: 12rem;
    height: 2.85rem;
    background: none;
  }
`

export default SearchPage
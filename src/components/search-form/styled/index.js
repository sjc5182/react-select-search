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
    height: 4rem;
    line-height: 2rem;
    display: flex;
    justify-content: center;
  }
  .label_input{
    display: flex;
    flex-direction: column;
  }
  input[type=text] {
    width: 12rem;
    height: 1.5rem;
    font-size: 1.5em;
  }
  input[type=date]{
    width:8rem;
    height: 1.65rem;
  }
  select {
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
    width: 12rem;
    height: 1.85rem;
    background: none;
  }
`

export default SearchPage
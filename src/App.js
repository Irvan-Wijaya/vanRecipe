import Category from "./components/Category";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {GiFoodTruck} from "react-icons/gi"
import {Link} from 'react-router-dom'
import './background.css'

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Nav>
      <GiFoodTruck style={{ color: 'white' }}/>
      <Logo to={"/"} style={{ color: 'white' }}>Van Recipes</Logo>
    </Nav>
    <Search />
      <div className="App">
        <Category/>
        <Pages />
      </div>
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 1rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items:center;
  svg{
    font-size:2rem;
  }
`

export default App;

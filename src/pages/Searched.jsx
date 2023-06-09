import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Searched() {
    const [searchRecipes, setSearchRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchRecipes(recipes.results); 
    };

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search])

    return (
    <Grid>
      {searchRecipes.map((item)=>{
        return(
            <Cards key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <img src={item.image}/>
                    <h4>{item.title}</h4>
                </Link>
            </Cards>
        );
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;  
`;
  
const Cards = styled.div`
    img {
        width:100%;
        border-radius: 2rem;
    }
    a {
        text-decoration:none;
    }
    h4{
        text-align:center
        padding:1rem;
    }
`;

export default Searched

import React from 'react'
import { useEffect, useState } from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getPopular();
  }, [])

  const getPopular = async () =>{
  const check = localStorage.getItem("popular");

  if(check){
    setPopular(JSON.parse(check));
  }else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`);
    const data = await api.json();

    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log(data.recipes);
  }
};
  return (
    <Wrapper>
      <h3 style={{ color: 'black', marginLeft: '20px' }}>Popular Picks</h3>

      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination:false,
        drag:'free',
        gap: '3rem',
      }}>
      {popular.map((recipe) =>{
        return(
          <SplideSlide key={recipe.id}>
         <Card>
          <Link to={"/recipe/" + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title}/>
            <Gradient/>
          </Link>
         </Card>
         </SplideSlide>
        );
      })}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0rem
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;

  img{
    border-radius:1rem;
    width: 100%;
    height:100%
    position:absolute;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index: 10;
    left:50%;
    bottom:55%;
    transform:translate(-50%, 0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1.3em;
    text-shadow: 1px 2px black;
    height:auto;
    dislay:flex;
    justify-content:center;
    align-items:center;
  }
`

const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width:100%;
  heigh:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular

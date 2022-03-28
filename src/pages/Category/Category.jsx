import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Category = () => {


  const apiKey = import.meta.env.VITE_APP_API_KEY

  const [foodtype, setFoodtype] = useState([])

  const food = useParams()
  console.log(food.type)

  useEffect(() => {
    getType(food);
  }, [food])

  const getType = async (food) => {
    const check = localStorage.getItem(`type${food.type}`)


    if (check) {
      setFoodtype(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${food.type}&number=9`
      );
      const data = await api.json();
      localStorage.setItem(`type${food.type}`, JSON.stringify(data.results))
      setFoodtype(data.results)
    }
  }

  return (
    <Grid>
      {foodtype.map((foodtype) => {
        return (
          <Card key={foodtype.id}>
            <Link to={`/recipe/${foodtype.id}`}>
              <img src={foodtype.image}></img>
              <h4 key={foodtype.id}>{foodtype.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Category

const Card = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: baseline;
  font-size: auto;
  img{
    width: 80%;
    border-radius: 1rem;
    padding-bottom: 3%;
  }
  *{
    text-decoration: none;
    color: black;
  }
`

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  
`
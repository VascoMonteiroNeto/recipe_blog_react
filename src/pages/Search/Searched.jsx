import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Searched = () => {

    const searchedItem = useParams()
    const [searched, setSearched] = useState([])

    useEffect(() => {
        getSearched(searchedItem.query)
    }, [searchedItem])


    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getSearched = async (searchedItem) => {

        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchedItem}`
        );
        const data = await api.json();
        setSearched(data.results)
    }

    return (
        <Grid>
            {searched.map((searchedItem) => {
                return (
                    <Card key={searchedItem.id}>
                        <Link to={`/recipe/${searchedItem.id}`}>
                            <img src={searchedItem.image}></img>
                            <h4>{searchedItem.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid >
    )
}

export default Searched

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

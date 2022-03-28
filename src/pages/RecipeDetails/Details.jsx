import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Details = () => {

    const itemId = useParams()
    const [recipeDetails, setRecipeDetails] = useState([])
    const [activeTab, setActiveTab] = useState('summary')

    useEffect(() => {
        getDetails(itemId)
    }, [itemId])

    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getDetails = async (itemId) => {

        const api = await fetch(
            `https://api.spoonacular.com/recipes/${itemId.id}/information?apiKey=${apiKey}`
        );

        const data = await api.json();
        setRecipeDetails(data);
    }

    console.log(recipeDetails)

    return (
        <Container>
            <Card>
                <img src={recipeDetails.image} />
                <h4>{recipeDetails.title}</h4>
            </Card>
            <Infos>
                <ButtonGroup>
                    <button
                        className={activeTab === 'summary' ? 'active' : ''}
                        onClick={() => setActiveTab('summary')}>
                        Details
                    </button>
                    <button
                        className={activeTab === 'recipe' ? 'active' : ''}
                        onClick={() => setActiveTab('recipe')}>
                        Recipe
                    </button>
                </ButtonGroup>
                <strong>Summary:</strong>
                {activeTab === 'summary' ? <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p> : ''}
            </Infos>
        </Container>
    )
}

export default Details

const Card = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: start;
  font-size: 1.2rem;
  img{
    width: 100%;
    border-radius: 1rem;
    padding-bottom: 3%;
  }
  *{
    text-decoration: none;
    color: black;
  }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4rem auto;
`
const Infos = styled.div`
    width: 100%;
    *{
        color: black;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2rem;
    button{
        padding: 1rem 3rem;
        
        border-radius: 0.5rem;
        border-style: solid;
        border-color: black;
        background-color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        color: black;
        &.active{
            background: black;
            color: white;
        }
        
    }
`
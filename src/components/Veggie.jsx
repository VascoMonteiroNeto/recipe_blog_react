import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

const Veggie = () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY

  const [veggie, setVeggie] = useState([])

  let width = screen.width
  console.log(width)

  useEffect(() => {
    getVeggie();
  }, [])

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')


    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      // console.log(data)
    }
  }

  console.log(veggie)

  return (
    <div>
      <h3>
        Veggie Recipes
      </h3>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              1000: {
                perPage: 2,
              },
              600:{
                perPage: 1,
              }
            },
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>
                    {recipe.title}
                  </p>
                  <img src={recipe.image} alt={recipe.title}></img>
                </Link>
                </Card>
              </SplideSlide>

            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  /* background-color: gray; */
  margin: 2rem 0rem;
  padding: 2rem 0rem;
  
`

const Card = styled.div`
  height: 35vh;
  overflow: hidden;
  border-radius: 2rem;
  position: relative;

  img {
    border-radius: 2rem;
    /* width: 100%; */
    height: 100%;
    left: 0;
    object-fit: cover;
    transition: 0.5s;
  }
  img:hover{
    opacity: 85%;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 80%;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 40%;
    font-weight: 700;
    font-size: larger;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

`

export default Veggie
import { RiPlantLine } from "react-icons/ri"
import { GiMeat, GiMeal, GiCakeSlice } from "react-icons/gi"
import { BiDrink } from "react-icons/bi"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <List>
            <Slink to={'/category/main%20course'}>
                <GiMeal />
                <h4>Entree</h4>
            </Slink>
            <Slink to={'/category/dessert'}>
                <GiCakeSlice />
                <h4>Dessert</h4>
            </Slink>
            <Slink to={'/category/drink'}>
                <BiDrink />
                <h4>Drinks</h4>
            </Slink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    flex-direction: line;
    justify-content: center;
    width: 60%;
    margin: auto;
    margin-top: 2rem;
    height: 100%;

    *{
        margin: 0 auto;
        text-align: center;
        text-decoration: none;
    }
`
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    background: linear-gradient(35deg, #484848, #313131);
    border-radius: 50%;
    cursor: pointer;
    width: 6rem;
    height: 6rem;
    h4{
        font-size: 0.8rem;
    }
    &.active {
        background: linear-gradient(35deg, #be2e2e, #313131);

    }
    
`

export default Navbar
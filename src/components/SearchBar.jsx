import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/search/${input}`)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e)=> setInput(e.target.value)} value={input} placeholder='Search recipe...' type='text' />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    height: 3rem;
    margin-top: 3rem;
    input{
        background: linear-gradient(35deg, #484848, #313131);
        height: 3rem;
        width: 50vw;
        color: white;
        font-weight:600;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        border: #313131;
        padding-left: 50px;
    }
    svg{
        margin-right: 1rem;
    }
`

export default SearchBar
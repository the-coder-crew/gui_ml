import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backArrow from '../img/back_arrow.png'

const Div = styled.div`
    background-color: #4997F3;
    padding: 2em;
    display: flex;
`

const H1 = styled.h1`
    color: white;
    textAlign: center;
    margin: 0 auto;
    fontSize: 2.5em;
`

const Header = ({title}) => {

    return (
        <Div>
            <Link to='/content'>
                <img src={backArrow} alt="" />
            </Link>

            <H1>{title}</H1>
        </Div>
    )
}

export default Header
import React from 'react'
import HeaderLayout from './commons/HeaderLayout'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: #6eaffd;
    border: none;
    border-radius: '30%';
    width: 25%;
    margin: 1.5em auto;
    display: flex;
`

const P = styled.p`
    color: white;
    font-size: 1.5em;
    width: 70%;
    margin: 0.4em auto;
`

const Contents = () => {
    const navigate = useNavigate()


    return (
        <HeaderLayout title="Contents">
           
                <Button onClick={() => navigate('/upload')}>
                <P>Simple Linear Regression</P>
                </Button>
            
        </HeaderLayout>
    )
}

export default Contents
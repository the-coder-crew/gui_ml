import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import mlBg from '../img/ml_bg.jpg'
import playButton from '../img/play_button.svg'

const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) ), url(${mlBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
`

const ImgButton = styled.button`
    background: none;
    border: none;
    border-radius: '50%';
    width: 13%;
    margin: 0 auto;

    &:hover .img-button {
        width: 15%;
      }
`

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}

const H1 = styled.h1`
    padding: 0;
    margin: 0;
    margin-top: 0.5em;
    color: #ffffffad;
    font-size: 2.5em;
`

const P = styled.p`
    color: #ffffffad;
    font-size: 1.5em;
    width: 60%;
    margin: 1.5em auto;
`

const Home = () => {
    const navigate = useNavigate()

    return (
        <Div>
            <div style={ divStyle }>
                <ImgButton onClick={() => navigate('/content')} className='img-button'>
                    <img src={playButton} 
                        alt=''
                        style={{ width: '100%', }}/>
                </ImgButton>

                <H1>No Code Machine Learning</H1>

                <P>Machine learning is about machine learning algorithms. You need to know what algorithms are available for a given problem, how they work, and how to get the most out of them.</P>
            </div>
        </Div>
    )
}

export default Home
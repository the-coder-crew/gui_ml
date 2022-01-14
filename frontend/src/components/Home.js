import React from 'react'
import { useNavigate } from 'react-router-dom';

import mlBg from '../img/ml_bg.jpg'
import playButton from '../img/play_button.svg'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div style={{
            background:  `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1) ), url(${mlBg})`,
            backgroundSize: '125% 110%',
            backgroundRepeat: 'no-repeat',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                <button
                    onClick={() => navigate('/content')}
                    style={{
                        background: 'none',
                        border: 'none',
                        borderRadius: '50%',
                    }}>
                    <img src={playButton} alt='' 
                        style={{
                            width: '13%',
                        }}/>
                </button>

                <h1 style={{
                    padding: 0,
                    margin: 0,
                    marginTop: '0.5em',
                    color: '#ffffffad',
                    fontSize: '2.5em',
                }}>No Code Machine Learning</h1>

                <p style={{
                    color: '#ffffffad',
                    fontSize: '1.5em',
                    width: '60%',
                    margin: '1.5em auto',
                }}>Machine learning is about machine learning algorithms. You need to know what algorithms are available for a given problem, how they work, and how to get the most out of them.</p>
            </div>
        </div>
    )
}

export default Home
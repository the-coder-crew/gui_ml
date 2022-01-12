import React from 'react'
import mlBg from '../img/ml_bg.jpg'
import playButton from '../img/play_button.svg'

const Home = () => {

    return (
        <div style={{
            backgroundImage: `url(${mlBg})`,
            backgroundSize: '110% 100%',
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
                    justifyContent: 'center'
                }}>
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        borderRadius: '50%',
                    }}>
                    <img src={playButton} alt='' />
                </button>

                <h1 style={{
                    padding: 0,
                    margin: 0,
                    color: '#ffffffad'
                }}>Ml without code</h1>
            </div>
        </div>
    )
}

export default Home
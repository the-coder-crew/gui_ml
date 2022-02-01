import React from 'react'
import HeaderLayout from './HeaderLayout'
import styled from 'styled-components'
//import uploadbutton from '../img/upload_button.svg'

const P = styled.p`
    font-size : 1.5em;
    margin : 1.5em 1em;

`

const Upload = () => {

    return (
        <HeaderLayout title="Simple Linear Regression">
            
                <P>Step 1 : Load the dataset</P>
            
        </HeaderLayout>
    )
}

export default Upload
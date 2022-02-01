import React from 'react'
import HeaderLayout from './HeaderLayout'
import styled from 'styled-components'
import uploadbutton from '../img/upload_button.png'

const P = styled.p`
    font-size : 2em;
    margin : 1.5em 1em;

`
const UploadButton = styled.button`
    margin : auto;
    background : #6eaffd;
    border : none;
    border-radius : 50%;
    padding : 1em;


`
const Upload = () => {

    return (
        <HeaderLayout title="Simple Linear Regression">
            
                <P>Step 1 : Load the dataset</P>
                <div style={{textAlign : 'center'}}>
                    <p style={{color : '#6eaffd',
                               fontSize : '1.5em',
                               marginBottom : '1.5em'}}>Load Dataset</p>
                    <UploadButton>
                        <img src={uploadbutton} alt="" />
                    </UploadButton>
                </div>
            
        </HeaderLayout>
    )
}

export default Upload
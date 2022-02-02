import React from "react"
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import leftarrow from '../../img/left_arrow.png'
import rightarrow from '../../img/right_arrow.png'

const Div = styled.div`
    margin : 15em 0;
    display: flex;
    justify-content: space-between;
`

const Bt = styled.button`
    background : none;
    border : none;
    
`

const P = styled.p`
    font-size : 2em;
    margin : 1.5em 1em;
`

const PageLayout = props => {
    

    return (
      
        <div>
            <Row lg="auto" md="auto" sm="auto" >
                <P> {props.children} </P>
            </Row>
       
            <Div>
                <Bt><img src={leftarrow} alt="" /></Bt>
                <Bt><img src={rightarrow} alt="" /></Bt> 
            </Div>
        
        </div>
        
        
    )
}

export default PageLayout
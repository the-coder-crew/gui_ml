import React from "react"
import Header from "./Header"
import { Row } from 'react-bootstrap'

const HeaderLayout = props => {

    return (
        <div style={{width : '100%'}}>
            <Row lg="auto" md="auto" sm="auto">
                <Header title={props.title} />
            </Row>

            <Row lg="auto" md="auto" sm="auto" 
                style={{ padding: '2em' }}>
                {props.children}
            </Row>
        </div>
    )
}

export default HeaderLayout
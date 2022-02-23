import React, {useState} from 'react'
import HeaderLayout from './commons/HeaderLayout'
import styled from 'styled-components'
import uploadbutton from '../img/upload_button.png'
import { Table } from 'react-bootstrap'

import dataService from '../services/dataService'

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
    const [data, setData] = useState(null)

    const loadData = async event => {
        event.preventDefault()

        try {
            const linreg = await dataService.getSimpleLinReg()
            setData(linreg)

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const showDataset = () => {
        if (!data) {
            return (
                <div style={{textAlign : 'center'}}>
                    <p style={{color : '#6eaffd',
                            fontSize : '1.5em',
                            marginBottom : '1.5em'}}>Load Dataset</p>
                    <UploadButton onClick={loadData}>
                        <img src={uploadbutton} alt="" />
                    </UploadButton>
                </div>
            )
        } else {
            return (
            <Table bordered hover variant="dark" responsive
                style={{
                    margin: 'auto',
                    width: '50%',
                    textAlign: 'center',
                }}>
                <thead style={{
                    backgroundColor: '#65a5dc',
                    padding: '1em 2em',
                }}>
                    <tr>
                        <th>X</th>
                        <th>y</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#ebf3f', }}>
                    {data.map((row, i) => {
                        return (
                            <tr key={i} style={{
                                borderStyle: 'solid',
                                borderColor: 'black',
                            }}>
                                <td>{row.X}</td>
                                <td>{row.y}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>)
        }
    }

    return (
        <HeaderLayout title="Simple Linear Regression">
            
                <P>Step 1 : Load the dataset</P>
                
                {showDataset()}
            
        </HeaderLayout>
    )
}

export default Upload
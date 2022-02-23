import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/data'

const getSimpleLinReg = async () => {
    const res = await axios.get(`${baseUrl}/simplelinreg`)
    return res.data
}

const dataService = {
    getSimpleLinReg,
}

export default dataService
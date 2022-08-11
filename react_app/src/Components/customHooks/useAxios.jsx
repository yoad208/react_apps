import {useState} from 'react';
import Axios from "axios";

export default function UseAxios() {
    const [response, setResponse] = useState([])
    const [data, setData] = useState({
        pending: false,
        data: undefined,
        error: false
    })

    const request = async (method, url, dataToPost = undefined) => {
        setData({
            pending: true,
            data: undefined,
            error: false
        })
        if (method === 'GET') {
            let response = await Axios.get('http://localhost:3001')
            setResponse(response.data.spaces)
        }
        if (method === 'POST') {
            let response = await Axios.post(url, dataToPost)
            try {
                setData({
                    pending: false,
                    data: response.data,
                    error: false
                })
            } catch (err) {
                setData({
                    pending: false,
                    data: undefined,
                    error: err.message
                })
            }
        }
    }

    return {...data, response, request}
}



import {useEffect, useState} from 'react';
import Axios from "axios";

const postData = (url, dataToPost) => {
    Axios.post(url , dataToPost).then(res => console.log(res))

    if (dataToPost instanceof Function) return dataToPost()
    return dataToPost
}

export default function UseAxios(url, dataToPost) {
    const [data, setData] = useState(() => {
        return postData(url, dataToPost)
    })

    useEffect(() => {
        postData(url, dataToPost)
    }, [dataToPost])

    return [data, setData]
}


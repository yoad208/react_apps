import React, {useEffect, useState} from 'react';
import axios from "axios";


function Albums(props) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=28372525-d4f722e2460be844cee198aa7&q=${props.userSearch}&image_type=video`)
            .then(response => {
                console.log(response)
                setInfo(response.data.hits)
            })
    }, [props.userSearch])

    return (
        <div className="container">
            <div className="row">
                {info.map(item => {
                    return (
                        <div key={item.id} className="card g-2 col-3 p-0">
                            <div onClick={() => window.open(item.pageURL)}
                                 className="card-body h-100 overflow-hidden p-0">
                                <p>Tags: {item.tags}</p>
                                <img className="w-100 h-100" src={item.webformatURL} alt=""/>
                            </div>
                            <p>likes: {parseInt(item.likes)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Albums;
import React, {useContext, useLayoutEffect} from 'react';
import {context, socket} from "../App";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function Massage({login, newMessageList}) {

    const user = useContext(context)


    useLayoutEffect(() => {
        if (login) {
            success()
        }
    }, [])

    const success = () => {
        return toast(`Welcome ${user}`, {
            draggable: true,
            style: {
                backgroundColor: '#42e503',
                color: '#000000',
                fontStyle: 'italic',
                borderRadius: '0 15px 15px 15px',
            },
            position: toast.POSITION.TOP_LEFT
        })
    }


    return (
        <div className="container mx-auto overflow-auto w-75 text-light" style={{minHeight: '85vh', maxWidth: '100%'}}>
            <><ToastContainer draggable={false} autoClose={8000}/></>
            {newMessageList.map((data, index) => {
                return (
                    <div key={index} className={data.user === user
                        ? "d-flex justify-content-start me-5"
                        : "d-flex justify-content-end ms-5"
                    }>
                        <div className="d-flex flex-column">
                            <div className={data.user === user
                                ? "bg-info border rounded-3 bg-success bg-opacity-50 p-2"
                                : "bg-light border rounded-3 bg-success bg-opacity-50 p-2"}
                                 style={{lineHeight: '8px', wordWrap: 'break-word', width: 230}}>
                                <span className="h6">{data.message}</span>
                            </div>
                            <div className="d-flex mb-3">
                                <p className="small ms-2">{data.user}</p>
                                <p className="small ms-2">{data.time}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default Massage;
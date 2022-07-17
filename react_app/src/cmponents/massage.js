import React from 'react';


function Massage({user, newMessageList}) {

    return (
        <div className="container mx-auto overflow-auto text-light" style={{minHeight: '92vh', maxWidth: '100%'}}>
            {newMessageList.map((data, index) => {
                return (
                    <div  key={index} className={data.user === user
                        ? "d-flex justify-content-start me-5"
                        : "d-flex justify-content-end ms-5"
                    }>
                        <div className="d-flex flex-column">
                            <div className={data.user === user
                                ? "bg-info border rounded-3 bg-success bg-opacity-50 p-2"
                                : "bg-light border rounded-3 bg-success bg-opacity-50 p-2"}
                                 style={{lineHeight: '8px', wordWrap:'break-word', maxHeight: '6rem', width: 230}}>
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
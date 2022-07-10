import React from 'react';


function Massage(props) {

    return (
        <div className="container overflow-auto massages" style={{height: '80vh'}}>
            <div className="">
                {props.newMassage.map((data, index) => {
                    return (
                        <div key={index} className="bg-light border rounded-3 mb-4 bg-success bg-opacity-50"
                             style={{lineHeight: '8px'}}>
                            <p className="small">{data.user}</p>
                            <span className="h6">{data.massage}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Massage;
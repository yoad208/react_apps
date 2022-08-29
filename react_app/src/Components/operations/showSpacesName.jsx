import {useContext, useRef} from "react";
import {dataProvider} from "../../App";
import {useNavigate} from "react-router-dom";

export default function ShowSpacesName({spaces}) {

    const name = useRef()
    const {setSpaceName} = useContext(dataProvider)
    const navigate = useNavigate()

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '.8rem',
            paddingRight: '3.5rem',
            width: '100%',
        }}>
                <span style={{
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                    fontSize: 'small',
                    textTransform: 'capitalize',
                    color: 'rgba(5,191,218,0.67)'
                }}
                      ref={name}
                      onClick={() => {
                          setSpaceName(name.current.innerHTML)
                          navigate('/')
                      }}>{spaces.name}</span>
        </div>
    )
}

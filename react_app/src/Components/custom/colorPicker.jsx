import {useEffect, useState} from "react";
import { HuePicker } from 'react-color'

export default function ColorPicker(props) {

    const [color, setColor] = useState('')

    useEffect(() => {
        props.colorValue(color)
    }, [color])

    return (
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <HuePicker
                width={'100%'}
                color={color}
                onChange={updateColor => setColor(updateColor)}
            />
        </div>
    );
}

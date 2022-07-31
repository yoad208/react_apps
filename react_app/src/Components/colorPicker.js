import {useEffect, useState} from "react";
import { ChromePicker } from 'react-color'

export default function ColorPicker(props) {

    const [color, setColor] = useState('#fff')

    useEffect(() => {
        props.colorValue(color)
    }, [color])

    return (
        <div style={{display: 'flex', justifyContent: 'right', backgroundColor: 'transparent'}}>
            <ChromePicker
                color={color}
                onChange={updateColor => setColor(updateColor)}
            />
        </div>
    );
}

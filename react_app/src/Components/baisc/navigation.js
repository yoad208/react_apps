
export default function Navigation(props) {

    const navigationStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem'
    }

    return (
        <div className="navigation" style={navigationStyle}>
            <ul style={navigationStyle}>
                <li>Home</li>
                <li>new list</li>
                <li>Setting</li>
            </ul>
        </div>
    );
}
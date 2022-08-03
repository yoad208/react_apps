

export default function ShowSpaces({spaces, dispatch}) {
    return (
            <li style={{
                backgroundColor: 'transparent',
                fontFamily: 'cursive',
                color: 'rgba(0,0,0,.5)',
                transform: "none",
            }}>
                {spaces.name}
            </li>
    );
}

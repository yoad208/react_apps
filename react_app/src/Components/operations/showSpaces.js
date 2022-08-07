export default function ShowSpaces({spaces, dispatch}) {
    return (
        <li style={{
            backgroundColor: 'transparent',
            fontFamily: 'cursive',
            color: 'rgba(60,192,252,0.73)',
            transform: "none",
        }}>
            {spaces.name}
        </li>
    );
}

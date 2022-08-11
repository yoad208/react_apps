
export default function Header({children}) {

    const headerStyle = {
        color: '#aaa',
        width: '85vw',
        height: '3rem',
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0 20px 25px -5px, rgba(0, 0, 0, 0.04) 0 10px 10px -5px'
    }
    return (
        <div style={headerStyle}>
            {children}
        </div>
    );
}
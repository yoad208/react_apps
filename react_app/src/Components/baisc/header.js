
export default function Header({children}) {

    const headerStyle = {
        height: '3rem',
        width: '85vw',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,.2)',
    }
    return (
        <div style={headerStyle}>
            {children}
        </div>
    );
}
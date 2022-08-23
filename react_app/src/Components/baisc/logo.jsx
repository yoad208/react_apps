import icon from "../../images/icon.png";

export default function Logo(props) {

    const logoStyle = {
        display: 'flex',
        margin: '0 0 3rem 0',
        padding: '1rem 0',
        alignItems: 'end',
        gap: '.2rem',
        backgroundColor: 'rgba(0,0,0,.3)'
    }

    return (
        <div style={logoStyle}>
            <img
                style={{
                    maxWidth: '30px',
                    margin: '1rem 0 1rem 1rem'
                }}
                src={icon}
                alt="logo"/>
            <span style={{marginBottom: '1rem'}}>Task management</span>
        </div>
    );
}

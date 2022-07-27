import logo from "../../images/logo.png";

export default function Logo(props) {

    const logoStyle = {
        maxWidth: '80px',
        transform: 'rotate(90deg)',

    }

    return (
        <div>
            <img
                style={logoStyle}
                src={logo}
                alt="logo"/>
        </div>
    );
}


export default function Header({children}) {

    const headerStyle = {
        backgroundImage: 'url("https://img.freepik.com/premium-photo/male-businessman-hand-hold-silver-pen-make-green-check-mark-closeup_151013-11183.jpg?w=1060")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div style={headerStyle}>
            {children}
        </div>
    );
}
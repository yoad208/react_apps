export default function Body({children, flag}) {
    return (
        <div style={{
            minHeight: '80vh',
            padding: '2rem 0',
            border: '1px solid transparent',
            pointerEvents: (flag ? "none" : "all"),
            opacity: (flag ? 0.5 : 1),
            filter: (flag ? 'blur(.8px)' : "none")
        }}>
            {children}
        </div>
    )
}
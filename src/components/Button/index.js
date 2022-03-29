import './styles.css'

export const Button = (props) => {
    const {children, customStyle} = props
    return <button style={customStyle} className="button">{children}</button>
}
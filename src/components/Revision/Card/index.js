import './styles.css'
export const Card = (props) => {
    return <div className="card-container">
        {props.children}
    </div>
}
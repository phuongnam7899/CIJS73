import './styles.css';

export const ProgressBar = (props) => {
    const {label, percentage} = props;
    return <div className="progress-bar-container">
        <div className="progress-outer">
            <div className="progress-inner" style={{height: `${percentage}%`}}></div>
        </div>
        <label>{label}</label>
    </div>
}
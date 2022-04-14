import { Link } from "react-router-dom"

export const Welcome = () => {
    return <h1>
        <Link to='/product/1'>Prod 1</Link>
        <Link to='/product/2'>Prod 2</Link>
    </h1>
}
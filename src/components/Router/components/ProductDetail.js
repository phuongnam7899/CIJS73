import { useParams } from "react-router-dom"

export const ProductDetail = (props) => {
    const { id } = useParams()
    return <div>id:{id}</div>
}
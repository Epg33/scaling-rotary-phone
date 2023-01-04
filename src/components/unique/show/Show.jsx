import { useParams } from "react-router-dom"

const Show = () => {
  const params = useParams();
  return (
    <div>{params.id}</div>
  )
}

export default Show
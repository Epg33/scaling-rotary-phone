import { useParams } from "react-router-dom"

const Person = () => {
  const params = useParams();
  return (
    <div>{params.id}</div>
  )
}

export default Person
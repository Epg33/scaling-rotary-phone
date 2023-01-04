import { useParams } from "react-router-dom"

const Movie = () => {
  const params = useParams();
  return (
    <div>{params.id}</div>
  )
}

export default Movie
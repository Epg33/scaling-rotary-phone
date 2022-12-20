import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './collections.module.css'

function Collections() {
  const [collections, setCollections] = useState()
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/collection/10?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US')
      .then(res => console.log(res))
  }, [])
  
  return (
    <div>Collections</div>
  )
}

export default Collections
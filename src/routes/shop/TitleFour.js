import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleFour = () => {

  const [artItems, setArtItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/art')
      .then(res => {
        let data = res.data
        let titleFour = data[3]
        console.log(titleFour)
        setArtItems(titleFour.items)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleFour'>
        {artItems.map((artItem) => (
          <>
            <ul>
              {artItem.name}
              {/* <img src={artItem.imageUrl} alt='blah'></img> */}
            </ul>
          </>
        )
        )}
      </ul>

      </div>
    </>

  )
}

export default TitleFour
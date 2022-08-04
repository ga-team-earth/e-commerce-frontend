import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleFour = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/art')
      .then(res => {
        let data = res.data
        let titleFour = data[3]
        setArtItems(titleFour.items)
        setTitleState(titleFour)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleFour'>
      <h1>{titleState.title}</h1>
        {artItems.map((artItem, index) => (
          <>
            <ul key={index}>
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
import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleSix = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/api/art')
      .then(res => {
        let data = res.data
        let titleSix = data[5]
        setArtItems(titleSix.items)
        setTitleState(titleSix)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleSix'>
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

export default TitleSix
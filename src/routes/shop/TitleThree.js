import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleThree= () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/api/art')
      .then(res => {
        let data = res.data
        let titleThree = data[2]
        setArtItems(titleThree.items)
        setTitleState(titleThree)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleThree'>
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

export default TitleThree
import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleOne = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])
  

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/api/art')
      .then(res => {
        let data = res.data
        let titleOne = data[0]
        setArtItems(titleOne.items)
        setTitleState(titleOne)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleOne'>
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

export default TitleOne
import React from 'react'
import "./Shop.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'

const TitleThree= () => {

  const [artItems, setArtItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/art')
      .then(res => {
        let data = res.data
        let titleThree = data[2]
        console.log(titleThree)
        setArtItems(titleThree.items)
      })
  }, [])

  return (

    <>
      <div className='test'>
      {/* Look into multiple components for displaying the data */}

      <ul className='titleThree'>
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

export default TitleThree
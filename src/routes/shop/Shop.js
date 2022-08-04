import React from 'react'
import "./Shop.scss"
import {useState, useEffect } from 'react'
import axios from 'axios'

import TitleOne from './TitleOne'
import TitleTwo from './TitleTwo'
import TitleThree from './TitleThree'
import TitleFour from './TitleFour'
import TitleFive from './TitleFive'
import TitleSix from './TitleSix'

const Shop = () => {

  const [artItems, setArtItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/art')
      .then(res => {
        let data = res.data
        setArtItems(data)
        return data
      })
  }, [])

  return (
    <>
      <div className = "titleContainer">
        <TitleOne />
        <TitleTwo />
        <TitleThree />
        <TitleFour />
        <TitleFive />
        <TitleSix />
      </div>
    </>
  )
}

export default Shop
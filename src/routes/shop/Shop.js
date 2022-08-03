import React from 'react'
import "./Shop.scss"

import TitleOne from './TitleOne'
import TitleTwo from './TitleTwo'
import TitleThree from './TitleThree'
import TitleFour from './TitleFour'
import TitleFive from './TitleFive'
import TitleSix from './TitleSix'

const Shop = () => {

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
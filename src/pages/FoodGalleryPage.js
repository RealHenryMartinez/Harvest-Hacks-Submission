import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import GetRecipeHook from '../hooks/GetRecipeHook'

const FoodGalleryPage = () => {
  

  return (
    <div>
      <GetRecipeHook />
    </div>
  )
}

export default FoodGalleryPage

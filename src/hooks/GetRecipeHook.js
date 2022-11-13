import React, { useState, useEffect } from 'react'

import getRecipes from '../constants/getRecipes'

import '../styles/Text.css'

const GetRecipeHook = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('test')
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        const data = await getRecipes()
        console.log('success')

        setRecipes(data.data.meals)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }

    // call method
    fetchData()
  }, [])

  //   let deprecateUrl = recipes.strYoutube;
  //   let url = deprecateUrl.toString().slice(0, 29);

  let url = recipes.map((p) => p.strYoutube)
  console.log(url.toString().slice(32, 43))

  return (
    <>
      {loading ? (
        <h1>Loading Recipe...</h1>
      ) : (
        <div>
          {recipes.map((recipeArray) => {
            return (
              <div key={recipeArray.idMeal}>
                <h2 id="recipe-name">{recipeArray.strMeal}</h2>
 
                

                <div className="video-responsive" style={{ float: "right"}}>
                  <iframe
                  
                    width="500px"
                    height="500"
                    
                    src={`https://www.youtube.com/embed/${url
                      .toString()
                      .slice(32, 43)}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <p id="recipe-description">
                  {recipeArray.strInstructions}
                  <br />
                </p>
                <div style={{ clear: "right" }} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default GetRecipeHook

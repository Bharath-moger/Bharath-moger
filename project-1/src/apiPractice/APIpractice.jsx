// import React, { useEffect, useState } from 'react'

// export const APIpractice = () => {
//   const [pokemonData, setPokemonData] = useState(null)
//   useEffect(()=>{
//   fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((res)=>res.json())
//   .then((data)=>setPokemonData(data))
//   .catch((err)=>console.log(err))
//   },[])
//   console.log(pokemonData);
//   if(!pokemonData){
//     return(
//   <h1>loading....</h1>
//     )
//   }
//   return (
//     <div>
//     <h1>API Practice</h1>
//     <h1>{pokemonData.name}</h1>
//     <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'

export const APIpractice = () => {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/Voltorb")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  console.log(pokemonData);

  if (loading) {
    return (
      <h1>loading....</h1>
    )
  }
  if (error) {
    return (
      <h1 id='err' >{error.message}</h1>
    )
  }
  return (
    <div className='pockemon-card'>
      <h1>API Practice</h1>
      <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
      <h1>{pokemonData.name}</h1>
    </div>
  )
}
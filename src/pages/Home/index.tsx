import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  /* useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(response => console.log(response.data.data))
    .catch(err => console.log(err))
  }, []); */

  return (
    <>
      <div>
        <p>Hello from Home!</p>
      </div>
    </>
);
}

export default Home
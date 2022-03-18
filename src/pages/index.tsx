import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.main}>
        <p>Marvel</p>
      </div>

      {/* return (
      useEffect(() => {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
        )
        .then((response) => console.log(response.data.data))
        .catch((err) => console.log(err));
    }, [])) */}
    </>
  );
};

export default Home;

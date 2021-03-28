import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

function App() {
  let [gallery, setGallery] = useState([]);
  
  

  useEffect(() => {
    getImages();
  }, []);


  const getImages = () => {
    console.log('in getImages');
    axios.get( '/gallery' ).then( response =>{
      console.log( response.data );
      setGallery( response.data )
    }).catch( err => {
      alert( 'error getting photos' );
      console.log(err);
    })
  }

  const addLike = (photo) => {
    console.log( 'in addLike:', photo );
    axios.put( '/gallery/like/' + photo ).then( response => {
      getImages();
    }).catch( err => {
      alert( 'error adding likes' )
      console.log(err);
    })
  }//where i left off


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
          <p>Gallery goes here</p>
        </header>
        <div className="App-gallery">
        <GalleryList gallery={gallery} addLike={addLike} />
        </div>
      </div>
    );
}

export default App;

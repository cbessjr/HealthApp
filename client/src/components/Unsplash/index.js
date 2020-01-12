import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
// import Image from '../Image';
import clientId from '../../util';
import './style.css';

const Pictures = () => {

  const [imageLoaded, setImageLoaded] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?query=health&client_id=${clientId}&orientation=landscape&fit=crop&h=140`)
      .then((data) => {
        setImageLoaded(data.data.results);
        setLoading(false);
      });
  }, []);

  return(
    <div class='slideshow mt-5'>
      {loading ? null :
        imageLoaded.map(image => (
          <span><img src={image.urls.thumb} alt={image.alt_description} key={image.id} /></span>
        ))
      }
    </div>
  );
};

export default Pictures;
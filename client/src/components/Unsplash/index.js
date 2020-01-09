import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Image from '../Image';
import clientId from '../../util';

const Pictures = () => {
  const [imageLoaded, setImageLoaded] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?query=health&client_id=${clientId}`)
      .then((data) => {
        console.log(data);
        setImageLoaded(data.data.results);
        setLoading(false);
      });
  }, []);

  return(
    <div>

      {loading ? null :
        imageLoaded.map(image => (
          // console.log(image)
          <img height='113' src={image.urls.thumb} alt={image.alt_description} key={image.id} />
        ))
      }

    </div>
  );
};

export default Pictures;

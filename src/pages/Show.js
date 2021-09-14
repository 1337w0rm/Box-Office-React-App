import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getApi(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result =>
      setShow(result)
    );
  }, [id]);

  console.log(show);
  
  return <h1>This is show page</h1>;
};

export default Show;

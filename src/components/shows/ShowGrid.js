import React from 'react';

import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';
const IMAGE_NOT_FOUND =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
      ;
    </FlexGrid>
  );
};

export default ShowGrid;

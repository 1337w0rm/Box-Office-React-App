import React from 'react';

import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  const IMAGE_NOT_FOUND =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
      ;
    </FlexGrid>
  );
};

export default ActorGrid;

import React from 'react';

import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  const IMAGE_NOT_FOUND =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return data.map(({ person }) => (
    <ActorCard
      key={person.id}
      name={person.name}
      country={person.country ? person.country.name : null}
      birthday={person.birthday}
      deathday={person.deathday}
      gender={person.gender}
      image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
    />
  ));
};

export default ActorGrid;

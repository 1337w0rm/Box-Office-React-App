import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <StyledActorCard>
      <div>
        <img className="img-wrapper" src={image} alt="actor" />
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {birthday ? <p>Born {birthday}</p> : null}
        <p className="deathda">{deathday ? `Died ${deathday}` : 'Alive'}</p>
      </div>
    </StyledActorCard>
  );
};

export default ActorCard;

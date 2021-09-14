import React from 'react';

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {birthday ? <p>Born {birthday}</p> : null}
        <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
      </div>
    </div>
  );
};

export default ActorCard;

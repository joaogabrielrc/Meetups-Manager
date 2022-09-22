import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);

  let context = (
    <p>You got no favorites yet. Start adding some?</p>
  );

  if (favoritesContext.totalFavorites > 0)
    context = (
      <MeetupList meetups={favoritesContext.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {context}
    </section>
  );
}

export default Favorites;

import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      const meetup = {
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      };
      favoritesContext.addFavorite(meetup);
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

import React from 'react';
import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form action="" method="get" className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoComplete="off"
            autoFocus
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" name="image" id="image" required />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

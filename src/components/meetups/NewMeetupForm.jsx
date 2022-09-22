import React, { useRef } from 'react';
import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetupData = { title, image, address, description };
    console.log(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandle}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
            required
            autoFocus
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            ref={descriptionInputRef}
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

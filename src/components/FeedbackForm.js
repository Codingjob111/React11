import React, { useState } from 'react';
import './feedback.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    course: '',
    rating: 0,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFeedback(prevState => ({
      ...prevState,
      rating: Number(rating)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit feedback to backend or API
    console.log(feedback);
    alert('Thank you for your feedback!');
    setFeedback({
      name: '',
      course: '',
      rating: 0,
      message: ''
    });
  };

  return (
    <form
     action="https://formspree.io/f/mbjegoel"
    method="POST"
    className="contact-inputs"
    onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input
       
        type="text"
        id="name"
        name="name"
        value={feedback.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="course">Course:</label>
      <select
        id="course"
        name="course"
        value={feedback.course}
        onChange={handleInputChange}
        required
      >
        <option value="">Select course</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Backend">Backend</option>
        <option value="Frontend">Frontend</option>
        <option value="Internship">Internship</option>
      </select>

      <label htmlFor="rating">Rating:</label>
      <div id="rating" className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={feedback.rating === value}
              onChange={() => handleRatingChange(value)}
            />
            <span className="star">&#9733;</span>
          </label>
        ))}
      </div>

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={feedback.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;





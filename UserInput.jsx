

import React, { useState } from 'react';

const UserInput = () => {
  const [username, setUsername] = useState('');
  const [coursesAttended, setCoursesAttended] = useState([]);
  const [coursesInterested, setCoursesInterested] = useState([]);
  const [newCourse, setNewCourse] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCourseAttendedChange = (e) => {
    setNewCourse(e.target.value);
  };

  const handleAddCourseAttended = () => {
    if (newCourse !== '') {
      setCoursesAttended([...coursesAttended, newCourse]);
      setNewCourse('');
    }
  };

  const handleCourseInterestedChange = (e) => {
    setNewCourse(e.target.value);
  };

  const handleAddCourseInterested = () => {
    if (newCourse !== '') {
      setCoursesInterested([...coursesInterested, newCourse]);
      setNewCourse('');
    }
  };

  const handleSubmit = () => {
    const userInputData = {
      username,
      coursesAttended,
      coursesInterested,
    };
    localStorage.setItem('userInputData', JSON.stringify(userInputData));
    alert('User input data saved!');
  };

  return (
    <div>
      <h2>User Input</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <br />
        <label>
          Courses Attended:
          <input type="text" value={newCourse} onChange={handleCourseAttendedChange} />
          <button type="button" onClick={handleAddCourseAttended}>
            Add Course
          </button>
          <ul>
            {coursesAttended.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </label>
        <br />
        <br />
        <label>
          Courses Interested:
          <input type="text" value={newCourse} onChange={handleCourseInterestedChange} />
          <button type="button" onClick={handleAddCourseInterested}>
            Add Course
          </button>
          <ul>
            {coursesInterested.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </label>
        <br />
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInput;
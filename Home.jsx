import React from 'react'
import { Link } from 'react-router-dom'
export default function Home () {
  return (
<>
<h1>Course Recommendation</h1>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/UserInput">UserInput</Link>
</>
  );
};

// src/About.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Blogs() {
  let { id } = useParams();
  return (
    <div>
      <h2>About</h2>
      <p>This is the About page.</p>
      <p>ID:{id}</p>
    </div>
  );
}

export default Blogs;

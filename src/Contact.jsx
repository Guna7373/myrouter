import React from 'react'
import { useParams } from 'react-router-dom';
export default function Contact() {
    let { id } = useParams();
  return (
    <div>
        <h1>contact me </h1>
        <p>PLease Contact For Only Help </p>
        <p>ID:{id}</p>
    </div>
  )
}

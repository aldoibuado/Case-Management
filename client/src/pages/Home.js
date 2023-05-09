import React from 'react';
import photo from '../assets/images/test-banner.png';
import '../styles/Home.css';

// TODO: work on adding photos to home page and styling
function Home() {

  return (
    <div>
      <h1 className="epic">Case Management!</h1>
      <p className="epic1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
         printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
         publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <img className="nurse" src={photo} alt="nurse helping patient" />
    </div>
  )
}

export default Home;
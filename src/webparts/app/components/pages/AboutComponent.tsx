import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutComponent: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () : void => {
    navigate('/');
  };
  return (
    <>
      <button onClick={goToHome}>Go Home</button>
      <div> Hola Mundo2, desde colombia</div>
    </>
  );
};

export default AboutComponent;
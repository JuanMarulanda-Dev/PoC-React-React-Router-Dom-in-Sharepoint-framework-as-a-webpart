import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent: React.FC = () => {
  const navigate = useNavigate();

  const goToAbout = (): void => {
    navigate('/about');
  };

  return (
    <>
      <button onClick={goToAbout}>Go About</button>
      <div> Hola Mundo1, desde colombia</div>
    </>
  );
};

export default HomeComponent;
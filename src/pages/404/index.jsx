import { Loading, WhiteLayer } from '@components';
import { useState } from 'react';
import { Container } from './styles';

export const NotFound = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadsFor3seconds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        <WhiteLayer>
          <img
            src="https://i.em.com.br/hA0_tXVcUR8vSPWfiDftluszhDs=/1200x900/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/05/26/1368061/macaco-em-selva-foto-em-close-_1_40780.jpg"
            alt="monke"
          />
          <h3>
            404. <br /> content not found. <br /> try another route.
          </h3>

          {isLoading ? <Loading  /> : null}

          <button onClick={loadsFor3seconds}>testar</button>

          {/* <Loading></Loading> */}
        </WhiteLayer>
      </Container>
    </>
  );
};

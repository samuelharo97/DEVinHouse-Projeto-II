import { DeviceList } from '@components';
import { Container, Footer, Section } from './styles';

export const Devices = () => {
  return (
    <Container>
      <div>
        <Section>
          <h3> Dispositivos </h3>
        </Section>
      </div>
      <DeviceList />
      <Footer />
    </Container>
  );
};

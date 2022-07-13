import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Home() {
  return (
    <div>
      <h1>Calculator </h1>
      <h2>0</h2>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary">9</Button>
        <Button variant="secondary">8</Button>
        <Button variant="secondary">7</Button>
        <Button variant="secondary">&#247;</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary">6</Button>
        <Button variant="secondary">5</Button>
        <Button variant="secondary">4</Button>
        <Button variant="secondary">&#215;</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary">3</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">1</Button>
        <Button variant="secondary">&#8722;</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary">0</Button>
        <Button variant="secondary">&#43;</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button variant="secondary">&#61;</Button>
      </ButtonGroup>
    </div>
  );
}

export default Home;

// className="text-center d-flex flex-column justify-content-center align-content-center"
// style={{
//   height: '90vh',
//   padding: '30px',
//   maxWidth: '400px',
//   margin: '0 auto',
// }}

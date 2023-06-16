import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Card from './card'
import Acor from './Acor'
import { Container } from 'react-bootstrap'


function App() {

  return (
    
    <Container>
      <h1 className='d-flex justify-content-center pt-5'>Como esta profe</h1>
      <Acor/>
      <Card/>
      <h2>Milton Procel</h2>
      <h3 className='pb-5'>Homework Fryday</h3>
    </Container>
    
  )
}



export default App

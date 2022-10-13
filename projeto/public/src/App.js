import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Company from './Components/Pages/Categorias'
import Contact from './Components/Pages/Contact'
import NewProject from './Components/Pages/Rotas'
import Project from './Components/Pages/Feed'
import Container from './Components/layout/Container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Rotas from './Components/Pages/Rotas'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/rotas">
            <Rotas />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

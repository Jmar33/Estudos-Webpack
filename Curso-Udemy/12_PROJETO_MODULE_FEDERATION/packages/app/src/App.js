import React, { Suspense }from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

//CSS
import './App.css'



const App = () => {

  //MF
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <div>
        <Navbar color="ligth" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />            
            <Route exact path="/contact" element={<ContactPage />} />          
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
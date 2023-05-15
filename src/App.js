import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesReducer';


function App() {

  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </Container>
  );
}

export default App;

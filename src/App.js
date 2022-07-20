import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import logo from './img/test1.jpg';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import About from './pages/About.js';
import Detail from './pages/Detail.js';

function App() {
  let navigate = useNavigate();
  let [shoes] = useState(data);
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='logo'>
              로고
            </Link>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('detail');
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}
            >
              회사소개
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about/ceo');
              }}
            >
              조직도
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='headimg'>
        <img alt='' src={`${process.env.PUBLIC_URL}/img/test1.jpg`} />
      </div>

      <Routes>
        <Route
          path='/'
          element={
            <div className='productList'>
              {shoes.map((a, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      navigate('./detail/' + i);
                    }}
                  >
                    <Card shoes={shoes[i]} i={i} />;
                  </div>
                );
              })}
            </div>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/detail' element={<>상세페이지</>} />
        <Route path='/about' element={<About />}>
          <Route path='ceo' element={<> 회장님 인사말 </>} />
        </Route>

        <Route path='/member' element={<div>조직도 입니다.</div>} />
        <Route path='*' element={<>404페이지</>} />
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className='list'>
      <img
        alt=''
        src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`}
      />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;

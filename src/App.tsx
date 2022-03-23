import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path='/' element={ <TodosPage/> }/>
        <Route path='/about' element={ <AboutPage/> }/>
      </Routes>
      </div>
    </>
  );
}

export default App;

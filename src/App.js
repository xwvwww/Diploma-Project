import React from 'react';
import MainPage from './components/MainPage/MainPage';
import ListOfCoursePage from './components/ListOfCoursePage/ListOfCoursePage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/japanese" element={<ListOfCoursePage language="японском" />} />
          <Route path="/korean" element={<ListOfCoursePage language="корейском" />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

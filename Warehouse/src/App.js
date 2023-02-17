import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import AddItems from './pages/AddItems.jsx';
import ItemDetails from './pages/Item_Details.jsx';
import IssueItems from './pages/Issue_Items.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addItems' element={<AddItems />} />
          <Route path="/ItemDetails" element={<ItemDetails />} />
          {/* <Route path="/victim_details" element={<Victim_Details />} /> */}
          <Route path="/IssueItems" element={<IssueItems/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
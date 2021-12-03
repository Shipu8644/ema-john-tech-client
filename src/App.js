import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Home/Product/Details';
import AddProduct from './pages/AddProduct/AddProduct';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view-product/:id" element={<Details />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/add-product" element={<AddProduct />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

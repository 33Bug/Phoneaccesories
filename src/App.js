import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import AddAccesories from './components/AddAccesories';
import Signin from './components/Signin';
import Signup from './components/Signup';
import GetAccesories from './components/GetAccesories';
import MakePayment from './components/MakePayment';
import Navbar from './components/Navbar';
import Courosel from './components/Courosel';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">

      <Navbar/>
      <Courosel/>

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addaccesories' element={<AddAccesories/>}/>
        <Route path='/' element={<GetAccesories/>}/>
        <Route path='/make-payment' element={<MakePayment/>}/>
        
      </Routes>
      {/* FOOTER */}
      <Footer/>
    
    </div>
    </Router>
  );
}

export default App;

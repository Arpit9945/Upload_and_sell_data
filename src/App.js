import './App.css';
// import Cart from './components/Cart';
// import Cell from './components/Cell';
// import Form from './components/Form';
import { Link, Routes, Route } from 'react-router-dom';
// import Sell from './components/Sell';
import cartContainer from './containers/cartContainer'
import formContainer from './containers/formContainer'
import sellContainer from './containers/sellContainer'

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
          <Link style={{textDecoration:'none'}} to='/'><div>Enter Data</div></Link>
          <Link style={{textDecoration:'none'}} to='/showData'><div>Show Data</div></Link>
          <Link style={{textDecoration:'none'}} to='/cellData'><div>Cell Data</div></Link>
      </nav>
      <Routes>
        <Route path='/' Component={formContainer} />
        <Route path='/showData' Component={cartContainer} />
        <Route path='/cellData' Component={sellContainer} />
      </Routes>
    </div>
  );
}

export default App;

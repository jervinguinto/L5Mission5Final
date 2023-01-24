
import{BrowserRouter,Routes,Route} from'react-router-dom'
import './App.css';
import Home from './pages/home';
import Rental from './pages/rental';

function App() {
  return (
    <div className="App">
    


    <BrowserRouter>
   <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/rental' element={<Rental/>}></Route>

   </Routes>




</BrowserRouter>







    </div>
  );
}

export default App;

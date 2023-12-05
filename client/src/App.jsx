import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './Views/Landing/Landing'
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail';
import Form from './Views/Form/Form'; 
const  App = () => {
  return (
    
   <div>
    <Routes>
    <Route exac path ='/' element={<Landing/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Detail/:id' element={<Detail/>}/>
    <Route path='/Form' element={<Form/>}/>
    </Routes>
   </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/Homepage/homePage';
function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/home' element = {<HomePage></HomePage>}></Route>
        </Routes>
   </BrowserRouter>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/Homepage/homePage';
function App() {
  // const getRoutes = (allRoutes) => {
  //   allRoutes.map((route) => {
  //     if (route.route) {
  //         return(
  //           <Route path={route.route} element = {route.component} key = {route.key}></Route>
  //         )
  //     }
  //     return null;
  //   })
  // }
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

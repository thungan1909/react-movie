import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "./page/Homepage/homePage";
import FilmDetail from "./page/FilmDetail/filmDetail";
import SearchResult from "./page/SearchResult/searchResult";
import Login from "./page/Login/login";
import Register from "./page/Register/register";
import routes from "./routes";
function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) =>{
     if(route.route)
     {
      return  <Route exact path={route.route} element={route.component} key={route.key} />;
     }
     return null;
    });
  
  return (
    <BrowserRouter>
      <Routes>
         {getRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

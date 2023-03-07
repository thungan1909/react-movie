import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./page/Homepage/homePage";
import FilmDetail from "./page/FilmDetail/filmDetail";
import SearchResult from "./page/SearchResult/searchResult";
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
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const location = useLocation();
  // console.log(location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route
          path="filmDetail/:id"
          element={<FilmDetail></FilmDetail>}
        ></Route>
        <Route
          path="/searchResults"
          element={<SearchResult></SearchResult>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

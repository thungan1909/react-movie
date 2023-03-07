
import FilmDetail from "./page/FilmDetail/filmDetail";
import HomePage from "./page/Homepage/homePage";
import Login from "./page/Login/login";
import Register from "./page/Register/register";
import SearchResult from "./page/SearchResult/searchResult";

const routes = [
    {

    },
    {
        key: "login",
        name: "Login",
        route: "/login",
        component: <Login/>
    },
    {
        key: "register",
        name: "Register",
        route: "/register",
        component: <Register/>
    },
    {
        key: "home",
        name: "Home",
        route: "/home",
        component: <HomePage/>
    },
    {
        key: "film-detail",
        name: "FilmDetail",
        route: "filmDetail/:id",
        component: <FilmDetail/>
    },
    {
        key: "search-result",
        name: "SearchResults",
        route: "/searchResults",
        component: <SearchResult/>
    },
  
];
export default routes;
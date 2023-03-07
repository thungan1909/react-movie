
import ProtectAuthen from "./page/Authen/ProtectedAuthen";
import RedirectHomePage from "./page/Authen/RedirectHomePage";
import FilmDetail from "./page/FilmDetail/filmDetail";
import HomePage from "./page/Homepage/homePage";
import Login from "./page/Login/login";
import Register from "./page/Register/register";
import SearchResult from "./page/SearchResult/searchResult";

const routes = [
    {
        key: 'homep',
        name: "Home",
        route: '/home',
        component: 
        <ProtectAuthen>
            <HomePage/>
        </ProtectAuthen>
    },
    {
        key: "login",
        name: "Login",
        route: "/login",
        component: 
        <RedirectHomePage>
            <Login/>
        </RedirectHomePage>
    },
    {
        key: "register",
        name: "Register",
        route: "/register",
        component:
        <RedirectHomePage>
             <Register/>
        </RedirectHomePage>
    },
    {
        key: "home",
        name: "Home",
        route: "/home",
        component: 
        <ProtectAuthen>
            <HomePage/>
        </ProtectAuthen>
    },
    {
        key: "film-detail",
        name: "FilmDetail",
        route: "filmDetail/:id",
        component: 
        <ProtectAuthen>
            <FilmDetail/>
        </ProtectAuthen>
    },
    {
        key: "search-result",
        name: "SearchResults",
        route: "/searchResults",
        component: 
        <ProtectAuthen>
            <SearchResult/>
        </ProtectAuthen>
    },
  
];
export default routes;
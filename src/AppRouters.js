import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPages";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

export default function AppRouters() {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/profile/:username/:genero" component={ProfilePage}/>
                <Route exact path="/categories" component={CategoriesPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*">
                    <NotFoundPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
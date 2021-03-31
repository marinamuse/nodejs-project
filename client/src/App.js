// Imports
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import BestMovies from "./components/BestMovies";
import MyMovies from "./components/MyMovies";
import MyReviews from "./components/MyReviews";
import MyProfile from "./components/MyProfile";
import Settings from "./components/Settings";

// Styles
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

// App
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/movies">
          <BestMovies />
        </Route>
        <Route path="/mymovies">
          <MyMovies />
        </Route>
        <Route path="/myreviews">
          <MyReviews />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Router>
    </div>
  );
}

export default App;

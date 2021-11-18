import React, {useEffect} from "react";
import NavMenu from './components/Navbar/NavMenu';
import { Route, Switch, useLocation } from "react-router-dom";
import NutritionAnalysis from './components/NutritionAnalysis/NutritionAnalysis';
import Recipes from './components/Recipes/Recipes/Recipes';
import BmiPage from './components/Navbar/Pages/BmiPage';
import Articles from './components/Navbar/Pages/Articles';
import Register from './components/Account/Register/Register';
import LogIn from './components/Account/LogIn/LogIn';
import ReadMore from './components/Recipes/ReadMore/ReadMore';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
const token = localStorage.getItem("food-token")
const App = () => {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <div >
      <NavMenu />
      <Switch>
        <Route path="/" exact>
            <Home/> 
        </Route>
        <Route path='/nutrition-analysis'>
          <NutritionAnalysis />
        </Route>
        <Route path='/recipes'>
          <Recipes />
        </Route>
        <Route path='/ReadMore/:id'>
          <ReadMore />
        </Route>
        <Route path='/bmi'>
          <BmiPage />
        </Route>

        {!token && (
          <>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <LogIn />
            </Route>
          </>
        )}

      </Switch>

      <Articles />
      <Footer />
    </div>
  );
}


export default App;

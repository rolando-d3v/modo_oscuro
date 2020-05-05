import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navegador from './components/navegador'
import Preguntas from './pages/preguntas'
import Home from './pages/home'
import Error404 from './pages/error404'
import Login from './pages/login'
import './App.scss';



function App() {

  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

    <BrowserRouter>

        <Navegador darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container-fluid p-0" >
          <Switch>
           <Route exact={true} path="/" component={Home} />
           <Route exact={true} path="/login" component={Login} />
           <Route exact={true}  path="/preguntas" component={Preguntas}/> 
           <Route exact={true}  path="*" component={Error404}/> 
          </Switch>
      </main>
        

      </BrowserRouter>
    </div>
  );
}



export default App;

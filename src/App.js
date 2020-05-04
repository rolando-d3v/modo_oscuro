import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navegador from './components/layout/Navegador'
import Preguntas from './components/alumno/Preguntas'
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

        <main className="container" >

        <div className="container-fluid">
          <Switch>
            {/* <Route exact path="/login" component={Login} /> */}
           <Route exact path="/alumno/preguntas" component={Preguntas}/> 
          </Switch>
        </div>
      </main>

      </BrowserRouter>
    </div>
  );
}



export default App;





// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

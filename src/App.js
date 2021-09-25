import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Addrecipe } from "./components/Addrecipe";
import { Header } from './components/Header.js';
// import { Content } from "./components/Content.js"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Header} />
            {/* <Route exact path="/content" component={Content} /> */}
            <Route exact path="/addrecipe" component={Addrecipe} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

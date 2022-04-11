import React from "react";
import Apresentacao from "./pages/Apresentacão/Index";
import Main from './pages/Main/Index'
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Apresentacao className='page1'/>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;

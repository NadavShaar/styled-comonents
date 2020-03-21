import React, { useState } from 'react';
import Theme from "./theme";
import './App.scss';
import Buttons from './components/views/Buttons';

function App() {

  const [darkMode, toggleTheme] = useState(false);

  return (
    <Theme darkMode={darkMode}>
      <div className="App">
        <Buttons darkMode={darkMode} toggleTheme={() => toggleTheme(!darkMode)} />
      </div>
    </Theme>
  );
}

export default App;

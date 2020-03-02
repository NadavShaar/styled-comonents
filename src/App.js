import React, { useState } from 'react';
import Theme from "./Theme";
import styled from 'styled-components';
import './App.scss';
import Info from './components/views/Info';
import target from './data'

const AppContainer = styled.div.attrs(props => ({
  className: "App"
}))``;

function App() {

  const [darkMode, toggleTheme] = useState(false);

  const getTarget = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(target);
      }, 3000);
    })
  }

  return (
    <Theme darkMode={darkMode}>
      <AppContainer>
        <Info getTarget={getTarget} darkMode={darkMode} toggleTheme={() => toggleTheme(!darkMode)} />
      </AppContainer>
    </Theme>
  );
}

export default App;

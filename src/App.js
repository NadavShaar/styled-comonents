import React, { useState } from 'react';
import Theme from "./Theme";
import styled from 'styled-components';
import './App.scss';
import Info from './components/views/Info';
import target from './data'
import Complex from './components/ui/Complex';

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
        {/* <div style={{position: 'absolute', left: 420, right: 0, bottom: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Complex style={{width: 400, height: 400}} elevation={3}></Complex>
        </div> */}
      </AppContainer>
    </Theme>
  );
}

export default App;

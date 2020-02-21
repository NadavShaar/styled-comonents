import React, { useState } from 'react';
import Theme from "./Theme";
import { StylesProvider } from '@material-ui/core/styles';
import './App.scss';
import Info from './components/views/Info';

const target = {
  name: 'Alan Garduno',
  gender: 'male',
  avatar: 'https://i.pinimg.com/originals/0e/28/9e/0e289ea41c39650eb1da11ad358dadf0.jpg',
  image: 'https://content.thriveglobal.com/wp-content/uploads/2018/03/Top_10_Best_Trekking_Routes_in_the_World.jpg?w=1550',
  socialNetworks: [
    {iconName: '', iconClass: 'fa fa-facebook', color: '#3c5a99'}, 
    {iconName: '', iconClass: 'fa fa-instagram', color: '#e1306c'}, 
    {iconName: '', iconClass: 'fa fa-linkedin', color: '#0e76a8'}, 
    {iconName: '', iconClass: 'fa fa-twitter', color: '#55acee'}, 
    {iconName: '', iconClass: 'fa fa-reddit', color: '#FF5700'}, 
    {iconName: '', iconClass: 'fa fa-tumblr', color: '#34526f'}, 
    {iconName: '', iconClass: 'fa fa-whatsapp', color: '#4FCE5D'}, 
    {iconName: '', iconClass: 'fa fa-weixin', color: '#7bb32e'}
  ]
};

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
      <StylesProvider injectFirst>
        <div className="App">
          <Info getTarget={getTarget} darkMode={darkMode} toggleTheme={() => toggleTheme(!darkMode)} />
        </div>
      </StylesProvider>
    </Theme>
  );
}

export default App;

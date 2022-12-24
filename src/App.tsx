import React from 'react';
// import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as fas from '@fortawesome/free-solid-svg-icons';
// import './App.css';
import Thumbnail from './components/thumbnail/thumbnail';
import Playlist from './components/playlist/playlist';
import MusicProgress from './components/musicProgress/musicProgress';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <main>
      {/* <Thumbnail /> */}
      <div className='top'>
        <Thumbnail />
        <Playlist />
      </div>
      <div className='bottom'>
        <MusicProgress />
      </div>
    </main>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Lash from './containers/Lash';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Lash />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

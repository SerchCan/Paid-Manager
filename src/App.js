import React,{ Component } from 'react';

import Input from './global/components/AddName';
import Grid from './global/components/Grid';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          Control de pagos
        </header>
        <div className="container-fluid">
          <Input/>
          <Grid/>
        </div>
      </div>
    );
  }
}

export default App;
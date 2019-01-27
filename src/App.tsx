import * as React from 'react';
import './App.css';
import Person from './Person'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Person name={"MR.x"} age={20}/>
      </div>
    );
  }
}

export default App;

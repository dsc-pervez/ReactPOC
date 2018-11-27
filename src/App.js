import React, { Component} from 'react';
import './App.css';
const API = 'https://jsonplaceholder.typicode.com/todos/1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
    };
  }


   showData(){

    fetch(API)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        users: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
    const listItems = data.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
  
  }

  render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
        User Data Show 
        <div className="date-range">
                <input type="submit" value="Search" onClick={this.showData} />
            </div>
            <div>

            </div>
        </header>

       
      </div>
     
    );
  }
}

export default App;

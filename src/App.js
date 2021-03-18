import logo from './logo.svg';
import './App.css';
import Profile from './NotReduxComponent/Profile'
import Users from './ReduxComponent/Users/ListUsers'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Users/>
    //   </header>
    // </div>
    <Users></Users>
  );
}

export default App;

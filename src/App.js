import './App.css';
import Header from './components/Header';
import Auth from './components/Auth';
import {UserContextProvider} from './context/userContext';

function App() {
  return (
    <div className="App">
      <h3>User Management Using UseContext</h3>
     <UserContextProvider>
      <Header/>
      <Auth/>
     </UserContextProvider>
      </div>
  );
}

export default App;

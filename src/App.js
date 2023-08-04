import './App.css';
import Header from './components/Header/Header';
import Profile from './components/profile/profile';
import { Passions } from './components/constants/data';

function App() {
  return (
    <div className="App">
    <Header />
    <Profile />
    <Passions />
    </div>
  );
  
}

export default App;


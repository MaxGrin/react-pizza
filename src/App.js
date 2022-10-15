
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className='app-container'>
        <Main/>
      </div>
    </div>
  );
}

export default App;

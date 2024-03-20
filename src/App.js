import './App.css';
import Header from './shared/Header/Header';
import HeaderBox from './shared/Header/HeaderBox';

function App() {
  return (
    <div className="App" style={{ height: '1000px' }}>
      <HeaderBox>
        <Header />
      </HeaderBox>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// import Records from './Records';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';

function App() {
  return (
    <div className="App">
      {/* <Records/> */}
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;

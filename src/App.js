import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock';
import Carlist from './Carlist';
import CarItem from './CarItem';

function App() {

  return (
    <div className="App">
      <p>1.Show Current Time</p>
      <Clock/>
      <p>2.Render Car list</p>
      <Carlist />
      <p>3.Search car by Make & Model</p>
      <CarItem />
    </div>
  );
}

export default App;

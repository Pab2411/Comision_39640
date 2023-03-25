
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Beatrice'}/>
      
    </div>
  );
}

export default App;

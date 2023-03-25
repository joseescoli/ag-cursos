import './App.css';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <main className='app'>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos!"} />
    </main>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarBS from "./components/NavBar/NavBarBS";



const App = () => {
  return (
    <>
      <div>
        <NavBarBS />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;

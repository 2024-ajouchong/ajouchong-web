import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import Main from "./pages/Main/index";


function App() {
  return (
      <div className="App">
        <Header/>

          <Main/>


          <Footer/>
      </div>
  );
}

export default App;

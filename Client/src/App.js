import "./App.css";
import axios from "axios";

import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav.jsx";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form2";
import Favorites from "./components/Favorites/Favorites";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

// const API_KEY = "771320657530.2a926528098abf1f2bde";

// const email = "servisechimino79@gmail.com";
// const password = "unaPassword3&";
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  // const login = (inputs) => {
  //   if (inputs.email === email && inputs.password === password) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

    const login = async (inputs) => {
      try {
        const { email, password } = inputs;
        const { data } = await axios(URL + `?email=${email}&password=${password}`)
        const { access } = data;

        setAccess(access);
        access && navigate('/home');

      } catch (error) {
        console.log(error.message);
      }
  }

  const register = async (inputs) => {
    const { email, password } = inputs
    if (!email && !password) {
      setAccess(true);
      access && navigate("/register")
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/") ;
  }, [access,navigate]);

  // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
  // const onSearch = async (id) => {
  //   try {
  //     const { data } = await axios(
  //       `http://localhost:3001/rickandmorty/character/${id}`
  //     );
  //     // .then((response) => response.data)
  //     // .then((data) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     }
  //     // });
  //   } catch (error) {
  //     alert("¡No hay personajes con este ID!");
  //   }
  // };

    const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
            if (!characters.some(char => char.id === data.id)) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert('¡Este personaje ya ha sido agregado!');
          }
      } else {
            window.alert('¡No hay personajes con este ID!');
        };
      });
  };

  const onClose = (id) => {
    const characterFilters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(characterFilters);
  };

  return (
    <div className="App">
      {/* {location.pathname !== "/register" && (
  <div className="nav-container">
    <Nav onSearch={onSearch} logout={logout} />
  </div>
)} */}


      {location.pathname !== "/" && (
        <div className="nav-container">
          <Nav onSearch={onSearch} logout={logout} />
        </div>
      )}

      <Routes>
        <Route path="/register" element={<Register register={register} />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

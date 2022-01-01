import React, { useState, createContext } from "react";
//import { movies } from "../../../movies-api/api/movies/movieData";
import { login, signup, getFavoriteMovie ,addFavoriteMovie } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favorite, setFavorites] = useState([])

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      setFavorites(await getFavoriteMovie(username))
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  };

  const addToFavorites = (movie) => 
  {
    setFavorites([...favorite,movie])
    addFavoriteMovie(userName,movie);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        addToFavorites,
        favorite
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
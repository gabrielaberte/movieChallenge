import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import "antd/dist/antd.css";
import ptBR from "antd/lib/locale/pt_BR";
import { ConfigProvider } from "antd";
import { useRoutes } from "react-router-dom";
import MoviePage from "./pages/MoviePage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/movie/:id", element: <MoviePage /> },
  ]);

  return (
    <div className="App">

        <ConfigProvider locale={ptBR}>{routes}</ConfigProvider>

    </div>
  );
}

export default App;

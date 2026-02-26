import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Users from "./pages/Users";
import Media from "./pages/Media";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import "./App.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/media"
          element={
            <Layout>
              <Media />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </BrowserRouter>
  );
}
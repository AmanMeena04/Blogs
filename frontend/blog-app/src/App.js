import {Routes,Route} from 'react-router-dom';

import "./App.css";

import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
  );
}

export default App;
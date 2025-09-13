import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './templates/Home';
import Login from './templates/Login';
import Perfil from './templates/Perfil';
import CriarConta from './templates/CriarConta';
import CriarPost from './templates/CriarPost';
import Comunidade from './templates/Comunidade';
import ChatComunidade from './templates/ChatComunidade';
import Interesses from './templates/Interesses';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<ProtectedRoute element={<Home />} />} />
          <Route path='/home' element={<ProtectedRoute element={<Home />} />} />
          <Route path='/perfil' element={<ProtectedRoute element={<Perfil />} />} />
          <Route path='/interesses' element={<ProtectedRoute element={<Interesses />} />} />
          <Route path='/criar-post' element={<ProtectedRoute element={<CriarPost />} />} />
          <Route path='/criar-conta' element={<ProtectedRoute element={<CriarConta />} />} />
          <Route path='/comunidade' element={<ProtectedRoute element={<Comunidade />} />} />
          <Route path='/chat-comunidade' element={<ProtectedRoute element={<ChatComunidade />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

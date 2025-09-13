import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
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

import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return element;
}

export default ProtectedRoute;
import './App.css';
import RoutesPage from './routes';
import { AuthProvider } from './context/auth';

function App() {
  return (
      <AuthProvider>
        <RoutesPage />
      </AuthProvider>

  );
}

export default App;

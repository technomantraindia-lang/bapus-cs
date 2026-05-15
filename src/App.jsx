import { Home } from './pages/Home.jsx';
import { Category } from './pages/Category.jsx';

export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === '/category' || path === '/categories' || path === '/businesses') {
    return <Category />;
  }

  return <Home />;
}

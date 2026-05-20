import { Home } from './pages/Home.jsx';
import { Category } from './pages/Category.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';

export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === '/category' || path === '/categories' || path === '/businesses') {
    return <Category />;
  }

  if (path === '/about' || path === '/about-us') {
    return <About />;
  }

  if (path === '/contact' || path === '/contact-us') {
    return <Contact />;
  }

  return <Home />;
}

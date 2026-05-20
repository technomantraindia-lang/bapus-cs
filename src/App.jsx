import { useEffect, useState } from 'react';
import { Home } from './pages/Home.jsx';
import { Category } from './pages/Category.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { getAppPath } from './lib/routePath.js';

export default function App() {
  const [path, setPath] = useState(getAppPath);

  useEffect(() => {
    const updatePath = () => setPath(getAppPath());

    window.addEventListener('hashchange', updatePath);
    window.addEventListener('popstate', updatePath);

    return () => {
      window.removeEventListener('hashchange', updatePath);
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

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

import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { Home } from './pages/Home.jsx';
import { Category } from './pages/Category.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Fleet } from './pages/Fleet.jsx';
import { FleetDetail } from './pages/FleetDetail.jsx';
import { GroupCompanyPage } from './pages/GroupCompanyPage.jsx';
import { getAppPath } from './lib/routePath.js';

const Journey = lazy(() => import('./pages/Journey.jsx').then((module) => ({ default: module.Journey })));

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="app-shell route-loading">
          <span>Page error: {this.state.error.message}</span>
        </main>
      );
    }

    return this.props.children;
  }
}

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [path]);

  if (path === '/category' || path === '/categories' || path === '/businesses') {
    return <Category />;
  }

  if (path === '/about' || path === '/about-us') {
    return <About />;
  }

  if (path === '/our-journey' || path === '/journey') {
    return (
      <RouteErrorBoundary>
        <Suspense
          fallback={
            <main className="app-shell route-loading">
              <span>Loading journey...</span>
            </main>
          }
        >
          <Journey />
        </Suspense>
      </RouteErrorBoundary>
    );
  }

  if (path === '/contact' || path === '/contact-us') {
    return <Contact />;
  }

  if (path.startsWith('/fleet/') || path.startsWith('/marine-assets/')) {
    return <FleetDetail />;
  }

  if (path === '/fleet' || path === '/marine-assets') {
    return <Fleet />;
  }

  if (
    path === '/group-company' ||
    path === '/group-companies' ||
    path === '/groupcompany'
  ) {
    return <GroupCompanyPage />;
  }

  return <Home />;
}

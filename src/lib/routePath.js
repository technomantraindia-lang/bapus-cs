/**
 * Current app path for routing (lowercase, no trailing slash, relative to Vite BASE_URL).
 */
export function getAppPath() {
  const hashPath = window.location.hash.replace(/^#/, '').toLowerCase();

  if (hashPath.startsWith('/')) {
    return hashPath.length > 1 && hashPath.endsWith('/')
      ? hashPath.slice(0, -1)
      : hashPath;
  }

  const baseRaw = import.meta.env.BASE_URL ?? '/';
  const base = baseRaw.replace(/\/+$/, '');
  let path = window.location.pathname.toLowerCase();

  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }

  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path;
}

/**
 * Internal navigation href (respects Vite `base` for subdirectory deploys).
 */
export function appHref(path = '/') {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedPath = path === '' ? '/' : path;

  if (normalizedPath === '/') {
    return base;
  }

  return `${base}#${normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`}`;
}

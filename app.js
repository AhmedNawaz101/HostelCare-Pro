function getAuthHeader() {
  const username = localStorage.getItem('hms.username');
  const password = localStorage.getItem('hms.password');
  if (!username || !password) return null;
  const token = btoa(`${username}:${password}`);
  return `Basic ${token}`;
}

async function apiFetch(path, options = {}) {
  const auth = getAuthHeader();
  if (!auth) throw new Error('Not logged in. Go to login.html');

  const res = await fetch(`http://localhost:8080${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth,
      ...(options.headers || {})
    }
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`);
  }

  return text ? JSON.parse(text) : null;
}

async function apiFetchPublic(path, options = {}) {
  const res = await fetch(`http://localhost:8080${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`);
  }

  return text ? JSON.parse(text) : null;
}

function setOutput(id, obj) {
  document.getElementById(id).textContent = JSON.stringify(obj, null, 2);
}

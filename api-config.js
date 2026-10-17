/**
 * CareNest Universal API Configuration
 * Connects your Render Static Site frontend to your Render Web Service backend.
 */

// If you have deployed your backend Web Service on Render, put your URL here:
// e.g.: const CARENEST_DEFAULT_BACKEND = 'https://carenest-backend.onrender.com';
const CARENEST_DEFAULT_BACKEND = '';

function getCareNestApiUrl(endpoint) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : '/' + endpoint;

  // 1. Check if user configured a backend URL in localStorage
  const savedUrl = localStorage.getItem('carenest_backend_url');
  if (savedUrl && savedUrl.trim()) {
    return savedUrl.trim().replace(/\/+$/, '') + cleanEndpoint;
  }

  // 2. Check if default backend URL is set above
  if (CARENEST_DEFAULT_BACKEND && CARENEST_DEFAULT_BACKEND.trim()) {
    return CARENEST_DEFAULT_BACKEND.trim().replace(/\/+$/, '') + cleanEndpoint;
  }

  // 3. If running locally or as unified app, use relative endpoint
  return cleanEndpoint;
}

function setCareNestBackendUrl(url) {
  if (!url || !url.trim()) {
    localStorage.removeItem('carenest_backend_url');
  } else {
    let clean = url.trim().replace(/\/+$/, '');
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }
    localStorage.setItem('carenest_backend_url', clean);
  }
}

function promptCareNestBackendUrl() {
  const current = localStorage.getItem('carenest_backend_url') || CARENEST_DEFAULT_BACKEND || '';
  const newUrl = prompt(
    "Enter your Render Backend Web Service Link:\n(e.g. https://carenest-backend.onrender.com)",
    current
  );
  if (newUrl !== null) {
    setCareNestBackendUrl(newUrl);
    alert("✅ Backend link updated to: " + (localStorage.getItem('carenest_backend_url') || "Same Origin (Default)"));
    window.location.reload();
  }
}

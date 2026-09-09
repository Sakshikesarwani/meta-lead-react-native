const BACKEND_URL = "https://meta-lead-react-native.vercel.app";

export async function fetchLeads() {
  const response = await fetch(`${BACKEND_URL}/leads`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export { BACKEND_URL };

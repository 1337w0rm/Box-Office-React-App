const API_BASE_URL = 'https://api.tvmaze.com';

export async function getApi(queryList) {
  const res = await fetch(`${API_BASE_URL}${queryList}`);
  const data = res.json();
  return data;
}

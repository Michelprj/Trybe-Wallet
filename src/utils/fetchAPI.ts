const fetchAPI = async (URL: string) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchAPI;

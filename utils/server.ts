const server = async (api: string): Promise<any> => {
  const baseUrl = 'http://0.0.0.0:3000'
  const res = await fetch(baseUrl + api);
  const info = res.json();
  return info;
};

export default server;

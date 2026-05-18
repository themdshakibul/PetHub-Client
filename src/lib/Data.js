export const getPetsData = async () => {
  const res = await fetch(`http://localhost:9000/pets`);
  const data = await res.json();
  return data;
};

export const getPetsDataBYId = async (id) => {
  const res = await fetch(`http://localhost:9000/pets/${id}`);
  const data = await res.json();
  return data;
};

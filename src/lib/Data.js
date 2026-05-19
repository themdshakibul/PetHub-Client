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

export const createPate = async (petData) => {
  const res = await fetch("http://localhost:9000/pets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(petData),
  });
  const data = await res.json();
  return data;
};

// AdoptFormCard
export const adoptUserPet = async (fieldData) => {
  const res = await fetch("http://localhost:9000/adopt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fieldData),
  });
  const data = await res.json();
  return data;
};

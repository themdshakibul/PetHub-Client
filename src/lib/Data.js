export const feturedPet = async () => {
  const res = await fetch(`http://localhost:9000/featurepet`);
  const data = await res.json();
  return data;
};

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
export const getAdoptUserPet = async (user) => {
  const res = await fetch(`http://localhost:9000/adopt/${user?.id}`);
  const data = await res.json();
  return data;
};

export const adoptUserPet = async (fieldData) => {
  const res = await fetch("http://localhost:9000/adopt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fieldData),
  });
  const data = await res.json();
  return data;
};

export const adoptCansel = async (adoptId) => {
  const res = await fetch(`http://localhost:9000/adopt/${adoptId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

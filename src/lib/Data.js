export const feturedPet = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featurepet`);
  const data = await res.json();
  return data;
};

export const getPetsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
  const data = await res.json();
  return data;
};

export const getPetsDataBYId = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const createPate = async (petData, tokenData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(petData),
  });
  const data = await res.json();
  return data;
};

// AdoptFormCard
export const getAdoptUserPet = async (user, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adopt/${user?.id}`,
    {
      authorization: `Bearer ${token}`,
    },
  );
  const data = await res.json();
  return data;
};

export const adoptUserPet = async (fieldData, tokenData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData?.token}`,
    },
    body: JSON.stringify(fieldData),
  });
  const data = await res.json();
  return data;
};

// done;
export const adoptCansel = async (adoptId, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adopt/${adoptId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

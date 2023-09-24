"use client";

const RM_URL = "https://rickandmortyapi.com/api/character/?page=";

const getCharactersApi: any = async (page: number) => {
  try {
    const response: Response = await fetch(RM_URL + page);
    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error:" + errorData);
    } else {
      const data: any = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Failed to fetch characters: " + error);
  }
};

export { getCharactersApi };

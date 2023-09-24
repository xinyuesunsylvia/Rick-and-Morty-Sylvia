"use client";
import React, { useEffect, useState } from "react";

import { CardListProps, Character } from "@/interfaces/types";
import { getCharactersApi } from "@/services/FetchCharactersService";
import CardItem from "../CardItem/CardItem";
import { CircularProgress } from "@mui/material";
import styles from "@/styles/CardList.module.css";
import CardNewItem from "../CardItem/CardNewItem";

const CardList: React.FC<CardListProps> = ({ currPage, setTotalPages }) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [characterIdx, setCharacterIdx] = useState<number>(0);

  useEffect(() => {
    const fetchCharacterAPI = async (currPage: number) => {
      const data = await getCharactersApi(currPage);
      const characters = data.results.map((entry: Character) => ({
        id: entry.id,
        name: entry.name,
        image: entry.image,
      }));
      setCharacterList(characters);
      setTotalPages(data.info.pages);
      setIsLoading(false);
    };

    fetchCharacterAPI(currPage);
  }, [currPage, setTotalPages]);

  const movePrev = () => {
    setCharacterIdx((prev) =>
      prev === 0 ? characterList.length - 1 : prev - 1
    );
  };

  const moveNext = () => {
    setCharacterIdx((next) =>
      next === characterList.length - 1 ? 0 : next + 1
    );
  };

  const currCharacter = characterList[characterIdx];

  return (
    <div className={styles.cardList}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CardNewItem
          character={currCharacter}
          movePrev={movePrev}
          moveNext={moveNext}
        />
        // <div className={styles.cardListContainer}>
        //   {characterList.map((character) => (
        //     <CardItem
        //       key={character.id}
        //       id={character.id}
        //       name={character.name}
        //       image={character.image}
        //     />
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default CardList;

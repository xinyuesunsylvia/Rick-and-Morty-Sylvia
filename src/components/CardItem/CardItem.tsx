"use client";

import { Character } from "@/interfaces/types";
import React from "react";
import styles from "@/styles/CardItem.module.css";
import Link from "next/link";

const CardItem: React.FC<Character> = ({ id, name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={image} alt=""></img>
      </div>

      {/* <div className={styles.cardName}>{name}</div> */}
      <div className={styles.cardName}>
        <Link href={`/character/${id}`}>{name}</Link>
      </div>
    </div>
  );
};

export default CardItem;

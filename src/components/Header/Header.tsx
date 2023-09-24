"use client";
import { HeaderProps } from "@/interfaces/types";
import React from "react";
import styles from "@/styles/Header.module.css";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div className={styles.title}>{title}</div>
    </header>
  );
};

export default Header;

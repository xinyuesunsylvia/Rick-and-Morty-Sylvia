"use client";
import React, { useState } from "react";
import { Pagination } from "@mui/material";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import styles from "@/styles/ImageFeed.module.css";

const ImageFeed: React.FC = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const headerTitle: string = " Rick and Morty";

  return (
    <div className={styles.imageFeed}>
      <Header title={headerTitle} />
      <CardList currPage={currPage} setTotalPages={setTotalPages} />
      {/* <Pagination
        className={styles.pagination}
        count={totalPages}
        page={currPage}
        onChange={(event, value) => setCurrPage(value)}
        color="primary"
        size="large"
      /> */}
    </div>
  );
};

export default ImageFeed;

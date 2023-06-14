'use client';
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
      });
      return res.json();
    } catch (error) {
      console.log("Failed to fetch data");
      throw new Error("Failed to fetch data");
    }
}

export default function Blog () {
  const [data, setData] = useState();

  return (
    <div className={styles.mainContainer}>
      {/* {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

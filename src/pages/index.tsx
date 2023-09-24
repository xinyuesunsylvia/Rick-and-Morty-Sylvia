import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ImageFeed from "@/components/ImageFeed/ImageFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageFeed />
    </main>
  );
}

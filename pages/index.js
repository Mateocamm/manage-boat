import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {



  return (
    <div className={styles.container}>
      <h2>Manage Boats Indonesia</h2>
      <div>
        <Link href="/boats">
          <Button type="primary">Agent View</Button>
        </Link>
        <Link href="/dashboard">
          <Button type="default">Admin View</Button>
        </Link>
      </div>
    </div>
  );
}

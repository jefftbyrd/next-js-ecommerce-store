import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="homePage">
      <img src="viruses/adenovirus-home.webp" alt="" />
      <div className="text">
        <h1>Vector</h1>
        <h2>The virus shop</h2>
      </div>
    </div>
  );
}

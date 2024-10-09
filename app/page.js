import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="homeDiv">
      <img className="home" src="viruses/Adenovirus.png" alt="" />
      <h1 className="logo">Vector</h1>
      <h2 className="logo">The virus shop</h2>
    </div>
  );
}

import styles from '../styles/Home.module.css';
import Header from '../components/header';
import FirstSection from '../components/home';
import Art from '../components/art';
import Team from '../components/team';
import Faq from '../components/faq';

export default function Home() {
  return (
    <div className={styles.con}>
      <Header/>
      <FirstSection/>
      <Art/>
      <Team/>
      <Faq/>
    </div>
  )
}

import styles from './app.module.css';
import Aside from './components/Aside/aside';
import CalendarControl from './components/calendar/calendar-control';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';


function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>캘린더를 만들어봅시다.</h1>
        <Header/>
      </header>
      <main>
        <Aside/>
        <CalendarControl/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

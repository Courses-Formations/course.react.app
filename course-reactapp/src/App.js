import logo from './logo.svg';
import './App.css';
import styles from './styles/styles.module.css';
import Operation from './components/Operation';
import Form from './components/From';
import Country from './components/Country';
import Province from './components/Province';
//components de operação matematicas
function App() {
  return (
    <><div className="App">
    <header className="App-header">
      <h2>Minha Aplicação em React JS</h2>
    </header>
    <body>
    <div className={styles.cardContainer}>
        <a className={styles.card}>
        <Form></Form>
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
        
      </div>
      <div className={styles.cardContainer}>
        <a className={styles.card}>
        <Operation></Operation>
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
        
      </div>
      <p>Teste de utilização de props como provincia e municipio</p>
      <div className={styles.cardContainer}>
        <a className={styles.card}>
     <Province name="Lunda Norte" county="Cambulo" />
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
        
      </div>
      <p>Reutilização das propriedades</p>
      <div className={styles.cardContainer}>
        <a className={styles.card}>
     <Province name="Lunda Sul" county="Saurimo" />
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
        
      </div>
      <p>Teste de utilização de estrura de props dinamicas</p>
      <div className={styles.cardContainer}>
        <a className={styles.card}>
        
        <Country code="AO" name="Angola" state="Luanda" city="Belas"/>
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
      </div>
      <div className={styles.cardContainer}>
        <a className={styles.card}>
     <Country code="PT" name="Portugal" state="Setúbal" city="Almada"/>
        <div className={styles.cardCorner}>
                <div className={styles.cardArrow}>
                →
                </div>
              </div>
        </a>
        
      </div>
     
     
    </body>
    <footer>
    <div>2023 - Curso de React | todos direitos reservados. | Desenvolvido por André Camuenhi</div>  
    </footer>
       </div></>
    
  );
}

export default App;

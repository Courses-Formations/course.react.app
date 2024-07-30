import logo from './logo.svg';
import './App.css';
import Operation from './components/Operation';
import Form from './components/From';
import Country from './components/Country';
import Province from './components/Province';
//components de operação matematicas
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Minha Aplicação em React JS</h2>
      </header>
      <body>
        <p>Teste de componentes form e operações</p>
       <Form/>
       <Operation/>
       <p>Teste de utilização de props como provincia e municipio</p>
       <Province name="Lunda Norte" county="Cambulo" />
       <p>Reutilização das propriedades</p>
       <Province name="Lunda Sul" county="Saurimo" />
       <p>Teste de utilização de estrura de props dinamicas</p>
       <Country code="AO" name="Angola" state="Luanda" city="Belas"/>
      </body>
    </div>
  );
}

export default App;

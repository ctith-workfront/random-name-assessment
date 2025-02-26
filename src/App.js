import { getName } from './util/getName';
import './App.css';

function App() {
  const [randomName, setRandomName] = useState("");

  return (
    <div className="App">
      <button>
        GET RANDOM NAME
      </button>
    </div>
  );
};

export default App;

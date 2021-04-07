import '../styles/main/Main.css';
import { topTrending } from '../helpers/api_methods/api';

const Main = () => (
  <>
    <div className="App">
      <header className="App-header">
        {topTrending()}
      </header>
    </div>
  </>
);

export default Main;

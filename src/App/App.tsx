import './App.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const App: React.FC<{}> = () => (
  <>
    <Header />
    <Sidebar />
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
  </>
)

export default App;

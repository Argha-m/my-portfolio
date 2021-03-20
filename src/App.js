import './App.css';
import Header from './component/common/header';
import Footer from './component/common/footer';
import Banner from './component/common/banner';

function App() {
  return (
    <div className="App-content">
      <Header text="Logo" />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

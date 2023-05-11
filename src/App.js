import Header from "./components/Header"
import Calculator from "./components/Calculator"
import Investments from "./components/Investments"
import Footer from "./components/Footer"

function App() {
  return (
    <div id="top" data-testid="app" className="container-fluid p-0">
        <Header/>
        <main className="my-4 py-5">
            <Calculator />
            <Investments />
        </main>
        <Footer />
    </div>
  );
}

export default App;

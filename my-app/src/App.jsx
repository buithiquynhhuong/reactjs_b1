import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-orange-600">
          <Navigation />
        </div>
        <div className="col-span-9">
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

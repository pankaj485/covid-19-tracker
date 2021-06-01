import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import AffectedCountries from "./components/AffectedCountries/AffectedCountries";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<AffectedCountries />
			<Footer />
		</div>
	);
}

export default App;

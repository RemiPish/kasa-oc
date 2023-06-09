import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import './App.css';

function App() {
	return (
		<div className="container">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>

			</div>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;

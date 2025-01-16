import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './components/Error/Error';
import Annonce from './pages/Annonce/Annonce';
import './App.scss';
import { AnimatePresence } from "framer-motion";

function App() {
	return (

		<div className="container">
			<Header />
			<div className="page">
				<div className="content">
					<AnimatePresence mode="wait">
						{/* AnimatePresence will handle transitions */}
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/annonce/:annonceID"
								element={<Annonce />}
							/>
							<Route path="/about" element={<About />} />
							<Route path="*" element={<Error />} />
						</Routes>
					</AnimatePresence>
				</div>
			</div>

			<footer className="footer">
				<Footer />
			</footer>
		</div>


	);
}

export default App;

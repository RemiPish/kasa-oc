import { Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, lazy, useContext } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import { AnimatePresence } from "framer-motion";
import logo from './assets/logo.png';
import Spinner from "./components/Spinner/Spinner";
import { DarkModeContext } from "./context/DarkModeContext/DarkModeContext";
import { FullscreenContext } from "./context/FullscreenContext/FullscreenContext";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Annonce = lazy(() => import("./pages/Annonce/Annonce"));
const Error = lazy(() => import("./components/Error/Error"));

function App() {
	const location = useLocation();
	const { darkMode } = useContext(DarkModeContext);
	const { fullscreenImage } = useContext(FullscreenContext);

	return (
		<>
			<div className={`${fullscreenImage ? '' : 'container'}`}>
				<Header />
				<div className={`${fullscreenImage ? '' : 'page'}`}>
					<div className={`${fullscreenImage ? '' : 'content'}`}>
						<AnimatePresence mode="wait">
							<Suspense fallback={<Spinner darkMode={darkMode} size={100} logoSrc={logo} />}>
								<Routes location={location} key={location.pathname}>
									<Route path="/" element={<Home />} />
									<Route
										path="/annonce/:annonceID"
										element={<Annonce />}
									/>
									<Route path="/about" element={<About />} />
									<Route path="*" element={<Error />} />
								</Routes>
							</Suspense>
						</AnimatePresence>
					</div>
				</div>

				<footer className="footer">
					<Footer />
				</footer>
			</div>
		</>
	);
}

export default App;

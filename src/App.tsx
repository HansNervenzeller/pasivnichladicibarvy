// Updated App.tsx for dual-language routing and dynamic content
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import FooterEn from "./components_en/FooterEn";

// Czech components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Motivation } from "./components/Motivation";
import { Předpoklady } from "./components/Předpoklady";
import { Experiment } from "./components/Experiment";
import { Results } from "./components/Results";
import { Download } from "./components/Download";
import Galery from "./components/Galery";

// English components
import { HeaderEn } from "./components_en/HeaderEn";
import HeroEn from "./components_en/HeroEn";
import MotivationEn from "./components_en/MotivationEn";
import PrinciplesEn from "./components_en/PrinciplesEn";
import JoinEn from "./components_en/JoinEn";
import { Vision2030 } from "./components_en/Vision2030";

import OrtoGen from "./components/OrtoGen";

const AppWrapper = () => {
    const location = useLocation();
    const isCzech = location.pathname.startsWith("/cs");

    return (
        <div className="bg-[#e9eaec] min-h-screen text-black">
            {isCzech ? <Header /> : <HeaderEn />}
            <Routes>
                {/* English version */}
                <Route
                    path="/"
                    element={
                        <main>
                            <HeroEn />
                            <MotivationEn />
                            <Vision2030 />
                            <JoinEn />
                            <PrinciplesEn />
                        </main>
                    }
                />

                {/* Czech version */}
                <Route
                    path="/cs"
                    element={
                        <main>
                            <Hero />
                            <Motivation />
                            <Předpoklady />
                            <Experiment />
                            <Results />
                            <Download />
                            <Galery />
                        </main>
                    }
                />

                {/* Shared route */}
                <Route path="/ortogen" element={<OrtoGen />} />

                {/* 404 Not Found route */}
                <Route
                    path="*"
                    element={<div>Stránka nenalezena / Page not found</div>}
                />
            </Routes>
            {isCzech ? <Footer /> : <FooterEn />}
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;

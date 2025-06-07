/*import React from "react";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Motivation } from "./components/Motivation";
import { Předpoklady } from "./components/Předpoklady";
import { Experiment } from "./components/Experiment";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";
/*import { Download } from "lucide-react";*/
import { Download } from "./components/Download";
import Galery from "./components/Galery";
import OrtoGen from "./components/OrtoGen";

function App() {
    return (
        <Router>
            <div className="bg-[#e9eaec] min-h-screen text-black">
                <Header />
                <Routes>
                    <Route
                        path="/"
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
                    <Route path="/ortogen" element={<OrtoGen />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

/*import React from "react";*/
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

function App() {
    return (
        <div className="bg-[#e9eaec] min-h-screen text-black">
            <Header />
            <main>
                <Hero />
                <Motivation />
                <Předpoklady />
                <Experiment />
                <Results />
                <Download />
                <Galery />
            </main>
            <Footer />
        </div>
    );
}

export default App;

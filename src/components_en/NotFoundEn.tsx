import { AlertTriangle } from "lucide-react";

export const NotFoundEn = () => {
    return (
        <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-[#333652] px-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
                <AlertTriangle className="w-16 h-16 text-[#fad02c] mb-4" />
                <h1 className="text-4xl font-bold text-[#333652] mb-2">404</h1>
                <h2 className="text-2xl font-bold text-[#333652] mb-4">
                    Page Not Found
                </h2>
                <p className="text-[#333652] text-lg mb-8 text-center">
                    Sorry, the page you are looking for does not exist.
                    <br />
                    Maybe you mistyped the address or the page has moved.
                </p>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="bg-[#fad02c] text-[#333652] font-bold px-6 py-3 rounded-xl shadow hover:bg-yellow-400 transition"
                >
                    Go to Homepage
                </button>
            </div>
        </section>
    );
};
export default NotFoundEn;

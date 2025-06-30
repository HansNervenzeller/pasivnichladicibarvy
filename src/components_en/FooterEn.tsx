import React from "react";

const FooterEn: React.FC = () => (
    <footer className="bg-[#333652] text-[#d1d5db] py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
            &copy; {new Date().getFullYear()} Jan Čivrný - Passive Cooling
            Paints. All rights reserved.
        </div>
    </footer>
);

export default FooterEn;

import { useState } from 'react';
import './App.css';

import { Footer, Navbar, Service, Transactions, Welcome } from './Components';

function App() {
    return (
        <div className="min-h-screen text-base bg-red-500 overflow-x-hidden">
            <div className="gradient-bg-welcome px-4 sm:px-8 md:px-16">
                <Navbar />
                <Welcome />
            </div>
                <Service />
                <Transactions />
                <Footer />
      </div>
    );
}

export default App;

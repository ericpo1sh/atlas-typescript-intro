import React from 'react';
import Footer from './components/Footer';
import MusicPlayer from './MusicPlayer';
import MusicContextProvider from './Context/MusicContext';

const App: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicContextProvider>
        <MusicPlayer />
        <Footer />
      </MusicContextProvider>
    </div>
  );
};

export default App;

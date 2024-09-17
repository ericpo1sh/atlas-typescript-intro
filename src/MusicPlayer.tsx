import Playlist from './components/Playlist';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import { MusicContextProvider } from './Context/MusicContext';
import usePlaylistData from '../src/hooks/usePlayListData';

const MusicPlayer: React.FC = () => {
  const { data: playlist, loading } = usePlaylistData();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <MusicContextProvider>
      <div className="flex self-center mt-12 flex-col md:flex-row shadow-2xl">
      <div className="p-3 flex-1">
        <CurrentlyPlaying/>
      </div>
      <div className="p-3 flex-1 relative border-l-0 md:border-l-4 border-t-4 md:border-t-0">
        <Playlist/>
      </div>
    </div>
    </MusicContextProvider>
  );
};

export default MusicPlayer;

import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex self-center mt-12 flex-col md:flex-row shadow-2xl">
      <div className="p-3 flex-1">
        <CurrentlyPlaying />
      </div>
      <div className="p-3 flex-1 relative">
        <Playlist />
        <div className="absolute inset-0 flex md:flex-col">
          <div className="flex-1 border-slate-300 md:border-l border-t md:border-t-0"></div>
        </div>
      </div>
    </div>
  );
}

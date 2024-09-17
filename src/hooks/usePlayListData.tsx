import { useState, useEffect } from 'react';

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
}

const usePlaylistData = () => {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default usePlaylistData;

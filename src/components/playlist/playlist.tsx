// eslint-disable-next-line no-unused-vars
import PlaylistItem from './playlistItem';
import PlaylistHeader from './playlistHeader';
import './playlist.css';
import { useEffect, useState } from 'react';

function Playlist() {
  const initialState = {
    data: [],
  };

  const initialStateData = {
    currentPlaying: {
      title: 'Vierra - Seandainya (Official Music Videos)',
      duration: '04:04',
    },
    queue: {
      count: 0,
      duration: '69:60',
    },
  };

  const [ playlist, setPlaylist ] = useState<any>(initialState);
  const [ data, setData ] = useState<any>(initialStateData);

  useEffect(() => {
    let myInterval:any = false; let count:number = 0;
    // eslint-disable-next-line no-undef
    myInterval = setInterval(() => {
      playlist.data.push(<PlaylistItem number={+new Date()} />);
      data.queue.count += 1;
      setPlaylist({ data: playlist.data });
      setData(data);
      if (count >= 20) {
        // eslint-disable-next-line no-undef
        clearInterval(myInterval);
        count = 0;
        // eslint-disable-next-line no-undef
        console.log('reset', count);
        // setPlaylist({ data: [] });
      }
      count++;
    }, 50);
    return () => {
      // eslint-disable-next-line no-undef, no-unused-vars
      clearInterval(myInterval);
    };
  }, [ ]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    console.log('tambah data');
  }, [ initialState ]);

  return (
    <>
      <div className='playlist'>
        <PlaylistHeader currentPlaying={data.currentPlaying} queue={data.queue} />
        <div className='playlist-content pt-0 pb-5'>
          {playlist.data}
        </div>
      </div>
    </>
  );
}

export default Playlist;

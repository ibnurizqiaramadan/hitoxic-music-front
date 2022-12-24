import './playlistHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';

function PlaylistHeader(props:any) {
  const currentPlaying:any = props.currentPlaying;
  const queue:any = props.queue;

  return (
    <div className='playlist-header'>
      <div className='top-header p-3 pb-0'>
        <input className='form-control bg-dark text-start text-light' placeholder='Search on queue'></input>
        <button className='btn btn-primary ms-3'><FontAwesomeIcon icon={fas.faPlus} /></button>
      </div>
      <div className='mid-header p-3 pb-0'>
        <p className='current-playing'>Current Playing</p>
        <div className='details'>
          <p>{currentPlaying.title}</p>
          <p>{currentPlaying.duration}</p>
        </div>
      </div>
      <hr className='mb-0'></hr>
      <div className='bottom-header ps-3 pe-3'>
        <p>Queue - {queue.count} tracks</p>
        <p>{queue.durations}</p>
      </div>
    </div>
  );
}

export default PlaylistHeader;

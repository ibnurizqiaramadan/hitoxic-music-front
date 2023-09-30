import './playlistItem.css';


function PlaylistItem(props: any) {
  return (
    <div className='playlist-item' key={props.number}>
      <div className='title-group'>
        <img className='thumbnails' src="https://i3.ytimg.com/vi/MofaZRiwiOw/maxresdefault.jpg"></img>
        <div>
          <p className='title'>{+new Date()} - hello hehe {props.number}</p>
          <p className={`artis ${props.number}`}>Artist { +new Date() }</p>
        </div>
      </div>
      <p className={`duration`}>04:04</p>
    </div>
  );
}

export default PlaylistItem;

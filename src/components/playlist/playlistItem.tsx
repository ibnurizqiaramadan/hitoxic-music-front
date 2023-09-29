import './playlistItem.css';

function PlaylistItem(props: any) {
  return (
    <div className='playlist-item' key={props.number}>
      <p className={`items ${props.number}`}>{ +new Date() } - hello hehe {props.number}</p>
      <p className={`duration`}>04:04</p>
    </div>
  );
}

export default PlaylistItem;

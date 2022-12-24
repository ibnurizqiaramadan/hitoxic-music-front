import './playlistItem.css';

function PlaylistItem(props: any) {
  return (
    <div className='playlist-item mt-0'>
      <h4 className=''>{ +new Date() } - hello hehe {props.number}</h4>
    </div>
  );
}

export default PlaylistItem;

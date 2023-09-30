import './thumbnail.css';

function Thumbnail() {
  return (
    <div className='thumbnail'>
      <div className='track'>
        <p className='track-title'>artis - title</p>
        <p className='track-author'>hello guys</p>
      </div>
      {/* <img src="https://i3.ytimg.com/vi/MofaZRiwiOw/maxresdefault.jpg"></img> */}
      <div className='blur'>
        <img src="https://cdn.discordapp.com/attachments/752130537455484999/1157577384724271204/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"></img>
      </div>
    </div>
  );
}

export default Thumbnail;

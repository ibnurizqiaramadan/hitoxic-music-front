// eslint-disable-next-line no-unused-vars
import './musicProgress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import * as fas from '@fortawesome/free-solid-svg-icons';

function MusicProgress() {
  return (
    <div className="progress p-3">
      <div className='progress-btn'>
        <div className='progress-btn-item'><FontAwesomeIcon icon={fas.faRandom} size="2x" /></div>
        <div className='progress-btn-item'><FontAwesomeIcon icon={fas.faStepBackward} size="2x" /></div>
        <div className='progress-btn-item'><FontAwesomeIcon icon={fas.faPause} size="2x" /></div>
        <div className='progress-btn-item'><FontAwesomeIcon icon={fas.faStepForward} size="2x" /></div>
        <div className='progress-btn-item'><FontAwesomeIcon icon={fas.faRedoAlt} size="2x" /></div>
      </div>
      <div className='progress-music mt-2'>
        <p className='time-current'>00:00</p>
        <input className='form-range' type="range" />
        <p className='time-end'>00:00</p>
      </div>
    </div>
  );
}

export default MusicProgress;

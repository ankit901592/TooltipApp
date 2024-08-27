import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './Tooltip.module.css'
// import  {NavLink} from 'react-router-dom'

function TooltipShow({postion}) {
  return (
    <>
    <div className={styles.component}>
        <div className={styles.innerComponent} >
      <button  data-tooltip-id="my-tooltip" data-tooltip-content="Hello i am tooltip!" data-tooltip-place={postion}>
        ◕‿‿◕
      </button>
      
      </div>
      </div>
     
      <Tooltip id="my-tooltip" />

    </>
  );
}

export default TooltipShow;

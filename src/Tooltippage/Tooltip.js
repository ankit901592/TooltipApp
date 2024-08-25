import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './Tooltip.module.css'

function TooltipShow({postion}) {
  return (
    <>
    <div className={styles.component}>
        <div className={styles.innerComponent} >
      <a  data-tooltip-id="my-tooltip" data-tooltip-content="Hello i am tooltip!" data-tooltip-place={postion}>
        ◕‿‿◕
      </a>
      
      </div>
      </div>
     
      <Tooltip id="my-tooltip" />

    </>
  );
}

export default TooltipShow;

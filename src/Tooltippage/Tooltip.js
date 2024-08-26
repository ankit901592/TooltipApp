import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './Tooltip.module.css';

function TooltipShow({ position }) {
  return (
    <>
      <div className={styles.component}>
        <div className={styles.innerComponent}>
          <a
            href="#"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello, I am a tooltip!"
            data-tooltip-place={position}
          >
            ◕‿‿◕
          </a>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </>
  );
}

export default TooltipShow;

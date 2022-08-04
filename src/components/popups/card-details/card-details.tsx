import {cx} from '@emotion/css';
import {Images} from '../../../assets/images';
import {root, content, close, show, title, status, caption} from './card-details.styles';
import {CardDetailsProps} from './card-details.types';

export const CardDetails = (props: CardDetailsProps) => {
  return (
    <div className={cx(root, props.content?.visible && show)} onClick={props.onClose}>
      <div className={content} onClick={e => e.stopPropagation()}>
        <div className={close} onClick={props.onClose}>
          <img src={Images.Close} alt="" width={16} height={15} />
        </div>
        <h3 className={title}>{props.content?.itemEntity?.name}</h3>
        <img src={props.content?.itemEntity?.image} alt="" width={300} height={300} />
        <div className={caption}>
          <div className={status}>
            <div className={`indicator status-${props.content?.itemEntity?.status?.toLowerCase()}`}></div>
            {props.content?.itemEntity?.status} - {props.content?.itemEntity?.species}
          </div>
          <ul>
            <li>Gender:</li>
            <li>{props.content?.itemEntity?.gender || '-'}</li>
          </ul>
          <ul>
            <li>Type:</li>
            <li>{props.content?.itemEntity?.type || '-'}</li>
          </ul>
          <ul>
            <li>Last known location:</li>
            <li>{props.content?.itemEntity?.location?.name || '-'}</li>
          </ul>
          <ul>
            <li>First seen in:</li>
            <li>{props.content?.firstSeenEpisode?.name || '-'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

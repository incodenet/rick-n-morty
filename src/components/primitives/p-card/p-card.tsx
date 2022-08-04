import {cx} from '@emotion/css';
import {PCardProps} from './p-card-types';
import {image, card, title, caption, status} from './p-card.styles';

export const PCard = (props: PCardProps) => {
  return (
    <div className={card} onClick={props.onClick}>
      <div className={image}>
        <img src={props.itemEntity?.image} alt="" width="100%" height={230} />
      </div>
      <div className={caption}>
        <h3 className={title}>{props.itemEntity?.name}</h3>
        <div className={cx(status, `indicator status-${props.itemEntity?.status?.toLowerCase()}`)}></div>
      </div>
    </div>
  );
};

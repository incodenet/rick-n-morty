import {PCardProps} from './p-card-types';
import {card, title, caption, status} from './p-card.styles';

export const PCard = (props: PCardProps) => {
  return (
    <div className={card} onClick={props.onClick}>
      <img src={props.itemEntity?.image} alt="" width="100%" height={230} />
      <div className={caption}>
        <h3 className={title}>{props.itemEntity?.name}</h3>
        <div className={status}>
          <div className={`indicator status-${props.itemEntity?.status?.toLowerCase()}`}></div>
          {props.itemEntity?.status} - {props.itemEntity?.species}
        </div>
        {props.itemEntity?.location?.name && (
          <ul>
            <li>Last known location:</li>
            <li>{props.itemEntity?.location?.name}</li>
          </ul>
        )}
        {props.firstSeenEpisode?.name && (
          <ul>
            <li>First seen in:</li>
            <li>{props.firstSeenEpisode?.name}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

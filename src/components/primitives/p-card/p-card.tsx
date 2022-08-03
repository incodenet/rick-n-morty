import { PCardProps } from "./p-card-types";
import { card, title, caption, status } from "./p-card.styles";

export const PCard = ({ itemEntity, firstSeenEpisode }: PCardProps) => {
    return (
        <div className={card}>
            <img src={itemEntity?.image} alt="" width="100%" height={230} />
            <div className={caption}>
                <h3 className={title}>
                    {itemEntity?.name}
                </h3>
                <div className={status}>
                    <div className={`indicator status-${itemEntity?.status?.toLowerCase()}`}></div>
                    {itemEntity?.status} - {itemEntity?.species}
                </div>
                {itemEntity?.location?.name && <ul>
                    <li>Last known location:</li>
                    <li>
                        {itemEntity?.location?.name}
                    </li>
                </ul>}
                {firstSeenEpisode?.name && <ul>
                    <li>First seen in:</li>
                    <li>
                        {firstSeenEpisode?.name}
                    </li>
                </ul>}

            </div>
        </div>
    )
};

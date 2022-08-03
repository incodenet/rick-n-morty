import { PCardProps } from "./p-card-types";
import { card, title, caption, status } from "./p-card.styles";

export const PCard = ({ itemEntity, episode }: PCardProps) => {
    return (
        <div className={card}>
            <img src={itemEntity?.image} alt="" width="100%" height="100%" />
            <div className={caption}>
                <h3 className={title}>
                    {itemEntity?.name}
                </h3>
                <div className={status}>
                    <div className={`indicator status-${itemEntity?.status?.toLowerCase()}`}></div>
                    {itemEntity?.status} - {itemEntity?.species}
                </div>
                <ul>
                    <li>Last known location:</li>
                    <li>
                        {itemEntity?.location?.name}
                    </li>
                </ul>
                <ul>
                    <li>First seen in:</li>
                    <li>
                        {episode?.name}
                    </li>
                </ul>
            </div>
        </div>
    )
};

import { PCard } from '../../primitives/p-card';
import { PCardProps } from '../../primitives/p-card/p-card-types';

export const CCard = ({ itemEntity, firstSeenEpisode }: PCardProps) => {
    return (
        <PCard itemEntity={itemEntity} firstSeenEpisode={firstSeenEpisode} />
    )
};

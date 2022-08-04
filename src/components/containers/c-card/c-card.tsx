import {PCard} from '../../primitives/p-card';
import {PCardProps} from '../../primitives/p-card/p-card-types';

export const CCard = (props: PCardProps) => {
  return <PCard itemEntity={props.itemEntity} firstSeenEpisode={props.firstSeenEpisode} {...props} />;
};

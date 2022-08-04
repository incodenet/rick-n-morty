import {Character, Episode} from '../../../types/custom';

export type PCardProps = {
  className?: string;
  itemEntity?: Character;
  firstSeenEpisode?: Episode;
  onClick?: () => void;
};

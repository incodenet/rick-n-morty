import {Character, Episode} from '../../../types/custom';

export type CardDetailsProps = {
  className?: string;
  content?: {visible: boolean; itemEntity: Character; firstSeenEpisode?: Episode};
  onClose?: () => void;
};

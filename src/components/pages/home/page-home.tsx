import {useEffect, useState} from 'react';
import {Images} from '../../../assets/images';
import {getCharactersService, getEpisodesService} from '../../../services/app';
import {Character, Episode} from '../../../types/custom';
import {CCard} from '../../containers/c-card';
import {CardDetails} from '../../popups/card-details';
import {PBanner} from '../../primitives/p-banner';
import {listing} from './page-home.styles';

export const PageHome = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [popup, setPopup] = useState<{visible: boolean; itemEntity: Character; firstSeenEpisode?: Episode}>({
    visible: false,
    itemEntity: {},
    firstSeenEpisode: {},
  });

  useEffect(() => {
    (async () => {
      try {
        const {data} = await getEpisodesService();

        setEpisodes(data?.results);
      } catch (e) {
        console.error(e);
      }
    })();

    (async () => {
      try {
        const {data} = await getCharactersService({page: 1});

        setCharacters(data?.results);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <PBanner image={Images.RickNMorty} title="The Rick and Morty" />
      <div className={listing}>
        {characters?.map((itemEntity: Character) => (
          <CCard
            key={`char-${itemEntity?.id}`}
            itemEntity={itemEntity}
            firstSeenEpisode={episodes.find(ep => ep['url'] === itemEntity?.episode![0])}
            onClick={() =>
              setPopup({
                ...popup,
                visible: true,
                itemEntity,
                firstSeenEpisode: episodes.find(ep => ep['url'] === itemEntity?.episode![0]),
              })
            }
          />
        ))}
      </div>
      <CardDetails content={popup} onClose={() => setPopup({...popup, visible: false, itemEntity: {}})} />
    </>
  );
};

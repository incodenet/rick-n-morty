import {useEffect, useState} from 'react';
import {Images} from '../../../assets/images';
import {GENDER_OPTIONS, STATUS_OPTIONS} from '../../../constants/options';
import {getCharactersService, getEpisodesService} from '../../../services/app';
import {Character, Episode} from '../../../types/custom';
import {CCard} from '../../containers/c-card';
import {CardDetails} from '../../popups/card-details';
import {PBanner} from '../../primitives/p-banner';
import {PInput} from '../../primitives/p-input';
import {PLoader} from '../../primitives/p-loader';
import {PSelect} from '../../primitives/p-select';
import {filterPanel, filterTitle, filterWrapper, listing, wrapper, notFound} from './page-home.styles';
import {debounce} from 'lodash';

export const PageHome = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [popup, setPopup] = useState<{visible: boolean; itemEntity: Character; firstSeenEpisode?: Episode}>({
    visible: false,
    itemEntity: {},
    firstSeenEpisode: {},
  });
  const [filterState, setFilterState] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const {data} = await getEpisodesService();

        setEpisodes(data?.results);

        setTimeout(() => setLoading(false), 400);
      } catch (e) {
        console.error(e);
      }
    })();

    (async () => {
      try {
        const {data} = await getCharactersService({page: 1});

        setCharacters(data?.results);
        setTimeout(() => setLoading(false), 400);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleFilterSubmit = debounce(async ({name, value}: {name: string; value: string}) => {
    setFilterState({...filterState, [name]: value});

    try {
      const {data} = await getCharactersService({
        ...filterState,
        [name]: value,
        page: 1,
      });

      setCharacters(data?.results);
    } catch (e) {
      console.log(e);
      setCharacters([]);
    }
  }, 300);

  return (
    <div>
      <PBanner image={Images.RickNMorty} title="The Rick and Morty" />
      {loading ? (
        <PLoader />
      ) : (
        <>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className={wrapper}
          >
            <div className={filterWrapper}>
              <div className={filterTitle}>Filter by:</div>
              <div className={filterPanel}>
                <PInput
                  type="text"
                  placeholder="Name"
                  onChange={e => {
                    handleFilterSubmit({name: 'name', value: e.target.value});
                  }}
                />
                <PInput
                  type="text"
                  placeholder="Species"
                  onChange={e => {
                    handleFilterSubmit({name: 'species', value: e.target.value});
                  }}
                />
                <PInput
                  type="text"
                  placeholder="Type"
                  onChange={e => {
                    handleFilterSubmit({name: 'type', value: e.target.value});
                  }}
                />
                <PSelect
                  placeholder="Status"
                  options={STATUS_OPTIONS}
                  onChange={e => {
                    handleFilterSubmit({name: 'status', value: e.target.value});
                  }}
                />
                <PSelect
                  placeholder="Gender"
                  options={GENDER_OPTIONS}
                  onChange={e => {
                    handleFilterSubmit({name: 'gender', value: e.target.value});
                  }}
                />
              </div>
            </div>

            {characters.length ? (
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
            ) : (
              <div className={notFound}>
                <img src={Images.NotFound} alt="" />
                <h3>Nothing found...</h3>
              </div>
            )}
          </form>

          <CardDetails content={popup} onClose={() => setPopup({...popup, visible: false, itemEntity: {}})} />
        </>
      )}
    </div>
  );
};

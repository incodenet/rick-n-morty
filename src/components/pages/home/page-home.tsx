import { useEffect, useState } from "react";
import { Images } from "../../../assets/images";
import { getCharactersService, getEpisodesService } from "../../../services/app";
import { Character } from "../../../types/custom";
import { CCard } from "../../containers/c-card";
import { PBanner } from "../../primitives/p-banner";
import { listing } from "./page-home.styles";

export const PageHome = () => {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getEpisodesService();

                setEpisodes(data?.results);
            } catch (e) {
                console.error(e)
            }
        })();

        (async () => {
            try {
                const { data } = await getCharactersService();

                setCharacters(data?.results);
            } catch (e) {
                console.error(e)
            }
        })();
    }, []);

    return (
        <>
            <PBanner image={Images.RickNMorty} title="The Rick and Morty" />
            <div className={listing}>
                {
                    characters?.map((itemEntity: Character) =>
                        <CCard
                            key={`char-${itemEntity?.id}`}
                            itemEntity={itemEntity}
                            episode={episodes.find(ep => ep['url'] === itemEntity?.episode![0])} />)

                }
            </div>
        </>
    )
};

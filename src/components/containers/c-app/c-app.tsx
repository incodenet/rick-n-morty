import { useGlobalStyles } from "../../../assets/css";
import { PageHome } from "../../pages/home";
import { PFooter } from "../../primitives/p-footer";
import { PHeader } from "../../primitives/p-header";

export const CApp = () => {
    useGlobalStyles();

    return (
        <div className="app">
            <PHeader />
            <main>
                <PageHome />
            </main>
            <PFooter />
        </div>
    )
};

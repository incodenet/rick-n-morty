import { Images } from "../../../assets/images";
import { root } from "./p-header.styles";

export const PHeader = () => {
    return (
        <header className={root}>
            <img src={Images.Logo} alt="" width={45} height={45} />
            <div>Discover</div>
        </header>
    )
};

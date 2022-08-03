import { banner, bannerTitle } from "./p-banner.styles";

export const PBanner = (props: { image?: string; title?: string }) => {
    return (
        <div className={banner}>
            <img src={props.image} alt="" width="100%" height="100%" />
            <h1 className={bannerTitle}>
                {props.title}
            </h1>
        </div>
    )
};

import { css } from '@emotion/css';
import { fonts } from '../../../assets/css/theme';

export const banner = css({
    height: '25vh',
    position: 'relative'
});

export const bannerTitle = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'calc(20px + (36 - 20) * ((100vw - 300px) / (1920 - 300)))',
    fontFamily: fonts.semiBold,
    textAlign: 'center'
});

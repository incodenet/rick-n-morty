import { css } from '@emotion/css';
import { fonts } from '../../../assets/css/theme';

export const banner = css({
    height: '30vh',
    position: 'relative'
});

export const bannerTitle = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3em',
    fontFamily: fonts.semiBold
});

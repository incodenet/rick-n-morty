import {css} from '@emotion/css';
import {fonts} from '../../../assets/css/theme';

export const wrapper = css({
  backgroundColor: '#262222',
  padding: '30px',
  color: 'white',
});

export const listing = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '30px',
});

export const notFound = css({
  textAlign: 'center',
  color: 'white',
  margin: '70px 0',

  img: {
    filter: 'brightness(0) invert(1)',
  },
});

export const filterWrapper = css({
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '30px',
  marginBottom: 25,
});

export const filterTitle = css({
  fontSize: '1.4em',
  fontFamily: fonts.semiBold,
});

export const filterPanel = css({
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'start',
  gap: '30px',
});

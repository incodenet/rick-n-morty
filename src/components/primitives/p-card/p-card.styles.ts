import {css} from '@emotion/css';
import {fonts} from '../../../assets/css/theme';

export const card = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  backgroundColor: 'rgb(72 72 72)',
  borderRadius: '12px',
  overflow: 'hidden',
  cursor: 'pointer',

  img: {
    transition: 'transform 0.2s ease',
    objectFit: 'cover',
  },

  '&:hover': {
    img: {
      transform: 'scale(1.05)',
    },
  },
});

export const caption = css({
  position: 'relative',
  padding: '15px',
  color: 'white',
  display: 'grid',
  gap: '15px',
  alignContent: 'start',

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gap: '5px',
    fontSize: '17px',

    li: {
      '&:first-child': {
        color: '#76c3e9',
        fontSize: '16px',
      },
    },
  },
});

export const image = css({
  maxHeight: '170px',
  overflow: 'hidden',
});

export const title = css({
  fontSize: '1.1em',
  lineHeight: '1.3',
  fontFamily: fonts.semiBold,
  margin: 0,
});

export const status = css({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '100%',
  height: '3px',

  '&.status-dead': {
    backgroundColor: '#E43F5A',
  },

  '&.status-alive': {
    backgroundColor: 'green',
  },

  '&.status-unknown': {
    backgroundColor: 'grey',
  },
});

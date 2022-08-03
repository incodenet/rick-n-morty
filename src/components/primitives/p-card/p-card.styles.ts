import { css } from '@emotion/css';
import { fonts } from '../../../assets/css/theme';

export const card = css({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    backgroundColor: 'rgb(72 72 72)',
    borderRadius: '12px',
    overflow: 'hidden',

    img: {
        objectFit: 'cover'
    }
});

export const caption = css({
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
                fontSize: '16px'
            }
        }
    }
});

export const title = css({
    fontSize: '1.7em',
    fontFamily: fonts.semiBold,
    margin: 0
});

export const status = css({
    display: 'grid',
    gridTemplateColumns: '10px 1fr',
    alignItems: 'center',
    gap: '7px',

    '.indicator': {
        width: '10px',
        height: '10px',
        borderRadius: '50%',

        '&.status-dead': {
            backgroundColor: 'red',
        },

        '&.status-alive': {
            backgroundColor: 'green',
        },

        '&.status-unknown': {
            backgroundColor: 'grey',
        },
    }
});
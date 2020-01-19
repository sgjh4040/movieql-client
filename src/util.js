import moment from 'moment';

export const addComma = num => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

export const  getYear= (day)=> moment(day).format('YYYY');
export const  getYearMonth= (day)=> moment(day).format('YYYY.MM');
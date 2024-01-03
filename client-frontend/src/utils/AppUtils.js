import moment from 'moment';

export const formatHeader = (text:string) =>  {
    var formattedText = text.at(0).toUpperCase() + text.substring(1);
}

const dateFormat = "d-MMM-YY, h:mm:ss a"

export const formatDate = (date:string) =>  {
    const addedOnMoment = moment(date);
    const formattedDate = addedOnMoment.format(dateFormat);
    return formattedDate;
}
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

export const formatDateWithCustomFormat = (date:string, customFormat:string) => {
    const addedOnMoment = moment(date);
    const formattedDate = addedOnMoment.format(customFormat);
    return formattedDate;
}

export function formatDatePropertyOnList(list, property, format) {
    if (property && property.length > 0) {
        const formatProject = (object) => {
            object[property] = formatDateWithCustomFormat(object[property],
                format ? format : dateFormat);
            return object;
        }
        list = list.map(object => formatProject(object))
    }
    return list;
}
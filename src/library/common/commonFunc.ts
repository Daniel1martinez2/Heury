import {severityColor} from './commonData';

export const transformTypeToConstansCase = (word:string) => {
  return (word.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) || [ word ]).join(' ');
};
export const normalizeText = (text:string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase(); 
}

export  const setSeverityColor = (severity:string) => {
  return severityColor[parseInt(severity.split(' ')[0])-1]; 
}
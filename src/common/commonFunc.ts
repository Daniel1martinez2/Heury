export const transformTypeToConstansCase = (word:string) => {
  return (word.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) || [ word ]).join(' ');
};

export const END = 'END';
export const START = 'START';

export const end = (type) => `${END}_${type}`;
export const start = (type) => `${START}_${type}`;
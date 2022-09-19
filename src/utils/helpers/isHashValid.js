import { isBlurhashValid } from 'blurhash';

export const isHashValid = (hash) => {
    const { result } = isBlurhashValid(hash);
    return result;
}
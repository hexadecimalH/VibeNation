import {CurrentArtist} from './currentArtist'
export {CurrentArtist}

export interface AppState{
    currentArtist:CurrentArtist;
    visibilityFilter:string;
}
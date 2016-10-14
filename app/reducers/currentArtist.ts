export interface CurrentArtist{
    name:string;
    bio:string;
}

export const ADD_ARTIST = 'ADD_ARTIST';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

export function currentArtist(CurrentArtist = {},action:any){
    switch(action.type){
        case ADD_ARTIST:
            return CurrentArtist =action.payload;
        case UPDATE_ARTIST:
            return CurrentArtist = action.payload;
    }

}
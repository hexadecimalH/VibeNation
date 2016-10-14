"use strict";
exports.ADD_ARTIST = 'ADD_ARTIST';
exports.UPDATE_ARTIST = 'UPDATE_ARTIST';
function currentArtist(CurrentArtist, action) {
    if (CurrentArtist === void 0) { CurrentArtist = {}; }
    switch (action.type) {
        case exports.ADD_ARTIST:
            return CurrentArtist = action.payload;
        case exports.UPDATE_ARTIST:
            return CurrentArtist = action.payload;
    }
}
exports.currentArtist = currentArtist;
//# sourceMappingURL=currentArtist.js.map
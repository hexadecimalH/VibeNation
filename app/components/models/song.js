"use strict";
var Song = (function () {
    function Song(songName, artistName) {
        this.songName = songName;
        this.artistName = artistName;
    }
    Song.prototype.makeQuery = function () {
        return this.songName.trim().replace(" ", "+") + "+" + this.artistName.trim().replace(" ", "+");
    };
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=song.js.map
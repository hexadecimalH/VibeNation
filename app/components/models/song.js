"use strict";
var Song = (function () {
    function Song() {
    }
    Song.prototype.makeQuery = function () {
        return this.SongName.trim().replace(" ", "+") + "+" + this.Artist.trim().replace(" ", "+");
    };
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=song.js.map
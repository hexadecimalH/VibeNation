"use strict";
exports.visibilityFilter = function (state, action) {
    if (state === void 0) { state = 'SHOW_ALL'; }
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=visibilityFilter.js.map
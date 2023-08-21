"use strict";
// Building a heat map declaration file 
//For tracking baseball pitch and ensuring data intergrity.
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatch = exports.data = void 0;
const _ = require("lodash");
exports.data = {
    batterHotZones: [[1, 2], [4, 3], [5, 5]],
    pitcherHotZones: [[6, 5], [1, 2], [4, 3]]
};
const findMatch = (batterHotZones, pitcherHotZones) => {
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
};
exports.findMatch = findMatch;
exports.data.coordinateMap = (0, exports.findMatch)(exports.data.batterHotZones, exports.data.pitcherHotZones);
console.log(exports.data.coordinateMap);

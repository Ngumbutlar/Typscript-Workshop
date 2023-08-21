// Building a heat map declaration file 
//For tracking baseball pitch and ensuring data intergrity.


/// <reference path ="./types/HeatMapTypes.d.ts"/>

import heatmap_types = require("HeatmapTypes");
import _ = require("lodash");

export let data: heatmap_types.Pitcher;
data ={
    batterHotZones:[[1, 2], [4, 3], [5, 5]],
    pitcherHotZones :[[6, 5], [1, 2], [4, 3]]
};

export const findMatch = (batterHotZones: number[][], pitcherHotZones: number[][]) =>{
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
};

data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);
console.log(data.coordinateMap);
   



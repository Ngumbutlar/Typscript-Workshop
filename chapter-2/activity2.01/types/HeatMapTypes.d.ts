
declare module "HeatmapTypes"{
    export interface Pitcher{
        batterHotZones: Array<Array<number>>;
        pitcherHotZones: Array<Array<number>>;
        coordinateMap?: Array<Array<number>>;
    }
}
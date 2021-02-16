import { Url } from "url";

export interface CoinInfoModel {
    id: string;
    pic: Url;
    usd: number;
    ils: number;
    eur: number;
    cache: number;
}

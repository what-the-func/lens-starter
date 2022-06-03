import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export declare type PolygonSdk = ReturnType<typeof getPolygonSdk>;
export declare function getPolygonSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    lensHub: types.polygon.LensHub;
};

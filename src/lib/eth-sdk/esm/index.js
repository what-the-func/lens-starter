import { Contract } from 'ethers';
import polygon_lensHub_abi from '../abis/polygon/lensHub.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getPolygonSdk(defaultSignerOrProvider) {
    return {
        "lensHub": getContract('0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d', polygon_lensHub_abi, defaultSignerOrProvider),
    };
}

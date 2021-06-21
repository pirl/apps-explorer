/// <reference types="react" />
import BN from 'bn.js';
import { Abi } from '@polkadot/api-contract';
export interface CodeJson {
    abi?: string | null;
    codeHash: string;
    name: string;
    genesisHash: string;
    tags: string[];
}
export interface CodeStored {
    json: CodeJson;
    contractAbi?: Abi;
}
export interface ContractJsonOld {
    genesisHash: string;
    abi: string;
    address: string;
    name: string;
}
export interface UseWeight {
    isValid: boolean;
    weight: BN;
    executionTime: number;
    megaGas: BN;
    percentage: number;
    setMegaGas: React.Dispatch<BN | undefined>;
}
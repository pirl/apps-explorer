import { StorageEntryBase } from '@polkadot/api/types';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
export declare type StorageEntryPromise = StorageEntryBase<'promise', any>;
export interface ConstValueBase {
    method: string;
    section: string;
}
export interface ConstValue extends ConstValueBase {
    meta: ModuleConstantMetadataLatest;
}

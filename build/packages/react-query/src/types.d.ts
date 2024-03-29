import { BlockNumber, EventRecord } from '@polkadot/types/interfaces';
export interface IndexedEvent {
    indexes: number[];
    record: EventRecord;
}
export interface KeyedEvent extends IndexedEvent {
    blockHash?: string;
    blockNumber?: BlockNumber;
    key: string;
}

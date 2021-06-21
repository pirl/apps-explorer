import { KeyringStore } from '@polkadot/ui-keyring/types';
import React from 'react';
import ApiPromise from '@polkadot/api/promise';
interface Props {
    children: React.ReactNode;
    url?: string;
    store?: KeyringStore;
}
declare let api: ApiPromise;
export { api };
declare function Api({ children, store, url }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Api>;
export default _default;

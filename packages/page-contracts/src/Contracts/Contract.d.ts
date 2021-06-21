import React from 'react';
import { ContractPromise } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contract: ContractPromise;
    onCall: (index?: number) => void;
}
declare function Contract({ className, contract, onCall }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Contract>;
export default _default;

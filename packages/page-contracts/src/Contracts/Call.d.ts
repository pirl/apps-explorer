import React from 'react';
import { ContractPromise } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contract: ContractPromise;
    messageIndex: number;
    onChangeCallContractAddress: (address: string | null) => void;
    onChangeCallMessageIndex: (messageIndex: number) => void;
    onClose: () => void;
}
declare function Call({ className, contract, messageIndex, onChangeCallContractAddress, onChangeCallMessageIndex, onClose }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Call, any, {}, never>>;
export default _default;

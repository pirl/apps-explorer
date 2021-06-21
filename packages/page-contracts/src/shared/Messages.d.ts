import React from 'react';
import { Abi, ContractPromise } from '@polkadot/api-contract';
export interface Props {
    className?: string;
    contract?: ContractPromise;
    contractAbi: Abi;
    isLabelled?: boolean;
    isRemovable?: boolean;
    isWatching?: boolean;
    onRemove?: () => void;
    onSelect?: (messageIndex: number) => void;
    onSelectConstructor?: (constructorIndex: number) => void;
    withConstructors?: boolean;
    withMessages?: boolean;
}
declare function Messages({ className, contract, contractAbi: { constructors, messages }, isLabelled, isRemovable, isWatching, onRemove, onSelect, onSelectConstructor, withConstructors, withMessages }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Messages, any, {}, never>>;
export default _default;

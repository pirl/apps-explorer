import React from 'react';
import { Abi } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contractAbi?: Abi | null;
    errorText?: string | null;
    isContract?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    isSupplied?: boolean;
    label?: React.ReactNode;
    onChange: (u8a: Uint8Array) => void;
    onRemove?: () => void;
    onRemoved?: () => void;
    onSelect?: () => void;
    onSelectConstructor?: (constructorIndex?: number) => void;
    withConstructors?: boolean;
    withLabel?: boolean;
    withMessages?: boolean;
}
declare function ABI(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof ABI>;
export default _default;

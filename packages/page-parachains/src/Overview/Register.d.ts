import BN from 'bn.js';
import React from 'react';
interface Props {
    isDisabled: boolean;
    nextFreeId?: BN;
    sudoKey?: string;
}
declare function Register({ isDisabled, nextFreeId, sudoKey }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Register>;
export default _default;

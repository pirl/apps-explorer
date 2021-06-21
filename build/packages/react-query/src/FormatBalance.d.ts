import BN from 'bn.js';
import React from 'react';
import { Compact } from '@polkadot/types';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isShort?: boolean;
    label?: React.ReactNode;
    labelPost?: string;
    value?: Compact<any> | BN | string | null | 'all';
    withCurrency?: boolean;
    withSi?: boolean;
}
declare function FormatBalance({ children, className, isShort, label, labelPost, value, withCurrency, withSi }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof FormatBalance, any, {}, never>>;
export default _default;

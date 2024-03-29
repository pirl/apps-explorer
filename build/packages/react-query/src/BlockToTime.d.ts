import BN from 'bn.js';
import React from 'react';
interface Props {
    blocks?: BN;
    children?: React.ReactNode;
    className?: string;
    isInline?: boolean;
    label?: React.ReactNode;
}
declare function BlockToTime({ blocks, children, className, isInline, label }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BlockToTime, any, {}, never>>;
export default _default;

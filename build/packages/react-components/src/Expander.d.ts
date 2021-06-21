import { IconName } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Text } from '@polkadot/types';
interface Meta {
    documentation: Text[];
}
export interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: string;
    helpIcon?: IconName;
    isOpen?: boolean;
    isPadded?: boolean;
    onClick?: (isOpen: boolean) => void;
    summary?: React.ReactNode;
    summaryHead?: React.ReactNode;
    summaryMeta?: Meta;
    summarySub?: React.ReactNode;
    withHidden?: boolean;
}
declare function Expander({ children, className, help, helpIcon, isOpen, isPadded, onClick, summary, summaryHead, summaryMeta, summarySub, withHidden }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Expander, any, {}, never>>;
export default _default;

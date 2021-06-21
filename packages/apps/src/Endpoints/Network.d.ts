import { Network } from './types';
import React from 'react';
interface Props {
    apiUrl: string;
    className?: string;
    setApiUrl: (apiUrl: string) => void;
    value: Network;
}
declare function NetworkDisplay({ apiUrl, className, setApiUrl, value: { icon, isChild, name, providers } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof NetworkDisplay, any, {}, never>>;
export default _default;

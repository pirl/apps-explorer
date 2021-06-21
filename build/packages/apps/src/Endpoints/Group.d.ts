import { Group } from './types';
import React from 'react';
interface Props {
    apiUrl: string;
    children?: React.ReactNode;
    className?: string;
    index: number;
    isSelected: boolean;
    setApiUrl: (apiUrl: string) => void;
    setGroup: (groupIndex: number) => void;
    value: Group;
}
declare function GroupDisplay({ apiUrl, children, className, index, isSelected, setApiUrl, setGroup, value: { header, networks } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof GroupDisplay, any, {}, never>>;
export default _default;

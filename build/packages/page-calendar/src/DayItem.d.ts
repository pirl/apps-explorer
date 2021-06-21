import { EntryInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    item: EntryInfo;
}
declare function DayItem({ className, item: { date, info, type } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DayItem, any, {}, never>>;
export default _default;

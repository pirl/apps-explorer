import { EntryInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    date: Date;
    hasNextDay: boolean;
    now: Date;
    scheduled: EntryInfo[];
    setNextDay: () => void;
    setPrevDay: () => void;
}
declare function Day({ className, date, hasNextDay, now, scheduled, setNextDay, setPrevDay }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Day, any, {}, never>>;
export default _default;

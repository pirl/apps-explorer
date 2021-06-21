import { EraIndex, SlashingSpans } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    nominators?: [string, EraIndex, number][];
    slashingSpans?: SlashingSpans | null;
}
declare function NominatedBy({ nominators, slashingSpans }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NominatedBy>;
export default _default;

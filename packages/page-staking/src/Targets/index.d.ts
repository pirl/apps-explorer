import { DeriveStakingOverview } from '@polkadot/api-derive/types';
import { StakerState } from '@polkadot/react-hooks/types';
import { SortedTargets } from '../types';
import React from 'react';
interface Props {
    className?: string;
    isInElection: boolean;
    ownStashes?: StakerState[];
    stakingOverview?: DeriveStakingOverview;
    targets: SortedTargets;
    toggleFavorite: (address: string) => void;
}
declare function Targets({ className, isInElection, ownStashes, targets: { avgStaked, calcWith, lastReward, lowStaked, nominators, setCalcWith, totalStaked, validators }, toggleFavorite }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Targets, any, {}, never>>;
export default _default;

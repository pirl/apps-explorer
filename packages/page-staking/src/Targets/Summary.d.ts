import BN from 'bn.js';
import React from 'react';
interface Props {
    avgStaked?: BN;
    lowStaked?: BN;
    lastReward?: BN;
    numNominators?: number;
    numValidators?: number;
    totalStaked?: BN;
}
declare function Summary({ avgStaked, lastReward, lowStaked, numNominators, numValidators, totalStaked }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;

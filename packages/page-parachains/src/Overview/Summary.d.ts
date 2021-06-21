import BN from 'bn.js';
import React from 'react';
interface Props {
    parachainCount?: number;
    proposalCount?: number;
    nextFreeId?: BN;
}
declare function Summary({ nextFreeId, parachainCount, proposalCount }: Props): React.ReactElement<Props>;
export default Summary;

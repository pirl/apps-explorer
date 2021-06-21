import { ProposalExt } from './types';
import React from 'react';
interface Props {
    proposal: ProposalExt;
}
declare function Proposal({ proposal: { id, proposal: { balance, initialHeadState, name, proposer, validationFunction, validators } } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Proposal>;
export default _default;

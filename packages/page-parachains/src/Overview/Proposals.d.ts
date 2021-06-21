import { ProposalExt } from './types';
import React from 'react';
interface Props {
    proposals?: ProposalExt[];
}
declare function Proposals({ proposals }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Proposals>;
export default _default;

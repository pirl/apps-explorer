import { ParaId, ParachainProposal } from '@polkadot/types/interfaces';
export interface ProposalExt {
    id: ParaId;
    proposal: ParachainProposal;
}

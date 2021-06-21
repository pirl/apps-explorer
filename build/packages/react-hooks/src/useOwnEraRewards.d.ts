import { DeriveStakerReward } from '@polkadot/api-derive/types';
import { StakerState } from './types';
interface State {
    allRewards?: Record<string, DeriveStakerReward[]> | null;
    isLoadingRewards: boolean;
    rewardCount: number;
}
export default function useOwnEraRewards(maxEras?: number, ownValidators?: StakerState[]): State;
export {};

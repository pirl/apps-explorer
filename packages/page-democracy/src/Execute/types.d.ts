import { BlockNumber, Call, SchedulePeriod, SchedulePriority } from '@polkadot/types/interfaces';
import { Bytes, Option } from '@polkadot/types';
export interface ScheduledExt {
    blockNumber: BlockNumber;
    call: Call;
    key: string;
    maybeId: Option<Bytes>;
    maybePeriodic: Option<SchedulePeriod>;
    priority: SchedulePriority;
}

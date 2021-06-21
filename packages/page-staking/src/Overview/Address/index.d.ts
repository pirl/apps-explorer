import { EraIndex } from '@polkadot/types/interfaces';
import { ValidatorInfo } from '../../types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    address: string;
    className?: string;
    filterName: string;
    hasQueries: boolean;
    isElected: boolean;
    isFavorite: boolean;
    isMain?: boolean;
    lastBlock?: string;
    nominatedBy?: [string, EraIndex, number][];
    onlineCount?: false | BN;
    onlineMessage?: boolean;
    points?: string;
    toggleFavorite: (accountId: string) => void;
    validatorInfo?: ValidatorInfo;
    withIdentity: boolean;
}
declare function Address({ address, className, filterName, hasQueries, isElected, isFavorite, isMain, lastBlock, nominatedBy, onlineCount, onlineMessage, points, toggleFavorite, validatorInfo, withIdentity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Address>;
export default _default;

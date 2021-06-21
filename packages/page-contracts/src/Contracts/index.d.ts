import React from 'react';
export interface Props {
    contracts: string[];
    updated: number;
}
declare function Contracts({ contracts: keyringContracts }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Contracts>;
export default _default;

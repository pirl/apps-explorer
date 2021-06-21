import { TypeDef } from '@polkadot/types/types';
import React from 'react';
interface Props {
    isDisabled?: boolean;
    params?: ParamDef[];
    onChange: (values: any[]) => void;
    onEnter?: () => void;
}
interface ParamDef {
    name: string;
    type: TypeDef;
}
declare function Params({ isDisabled, onChange, onEnter, params: propParams }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Params>;
export default _default;

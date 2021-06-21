import { DeriveParachain } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    parachains?: DeriveParachain[];
}
declare function Transfer({ className, parachains }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Transfer, any, {}, never>>;
export default _default;

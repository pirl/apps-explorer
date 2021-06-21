import { CodeStored } from '../types';
import React from 'react';
interface Props {
    className?: string;
    code: CodeStored;
    onShowDeploy: (codeHash: string, constructorIndex: number) => void;
}
declare function Code({ className, code, onShowDeploy }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Code>;
export default _default;
import { ActionStatus } from '@polkadot/react-components/Status/types';
import { ModalProps } from '../types';
import React from 'react';
interface Props extends ModalProps {
    className?: string;
    onClose: () => void;
    onStatusChange: (status: ActionStatus) => void;
}
declare function Import({ className, onClose, onStatusChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Import>;
export default _default;
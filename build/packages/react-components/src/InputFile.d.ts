import React from 'react';
export interface InputFileProps {
    accept?: string;
    className?: string;
    clearContent?: boolean;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    label: React.ReactNode;
    onChange?: (contents: Uint8Array, name: string) => void;
    placeholder?: React.ReactNode | null;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
declare function InputFile({ accept, className, clearContent, help, isDisabled, isError, isFull, label, onChange, placeholder, withEllipsis, withLabel }: InputFileProps): React.ReactElement<InputFileProps>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputFile, any, {}, never>>;
export default _default;

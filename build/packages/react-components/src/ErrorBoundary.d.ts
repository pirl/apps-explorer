import { I18nProps } from './types';
import React from 'react';
interface Props extends I18nProps {
    children: React.ReactNode;
    doThrow?: boolean;
    error?: Error | null;
    onError?: () => void;
    trigger?: unknown;
}
declare const _default: React.ComponentType<Pick<Props, "error" | "className" | "children" | "style" | "onError" | "trigger" | "doThrow"> & import("react-i18next").WithTranslationProps>;
export default _default;

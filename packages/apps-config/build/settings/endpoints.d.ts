import { TFunction } from 'i18next';
import { Option } from './types';
export interface LinkOption extends Option {
    dnslink?: string;
    isChild?: boolean;
    isDevelopment?: boolean;
    textHoster: string;
}
export default function create(t: TFunction): LinkOption[];

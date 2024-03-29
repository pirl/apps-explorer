import BN from 'bn.js';
declare const _default: {
    chains: {
        Kulupu: string;
        Kusama: string;
        Polkadot: string;
        'Polkadot CC1': string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    logo: string;
    paths: {
        address: string;
        block: string;
        council: string;
        extrinsic: string;
        proposal: string;
        referendum: string;
        techcomm: string;
        treasury: string;
    };
    url: string;
};
export default _default;

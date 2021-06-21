declare const _default: {
    BlockNumber: string;
    Keys: string;
    Balance: string;
    FixedI64: string;
    SignedBalance: {
        _enum: {
            Positive: string;
            Negative: string;
        };
    };
    ReinitRequest: {
        account: string;
        authority_index: string;
        validators_len: string;
        block_num: string;
    };
    Currency: {
        _enum: string[];
    };
    DataPoint: {
        price: string;
        account_id: string;
    };
    PricePoint: {
        block_number: string;
        timestamp: string;
        price: string;
        data_points: string;
    };
    BalancesAggregate: {
        total_issuance: string;
        total_debt: string;
    };
    VestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
    LookupSource: string;
    BalanceOf: string;
};
export default _default;

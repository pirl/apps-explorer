declare const _default: {
    Crab: {
        Address: string;
        LookupSource: string;
        RefCount: string;
        BalanceLock: {
            id: string;
            lock_for: string;
            lock_reasons: string;
            amount: string;
            reasons: string;
        };
        LockFor: {
            _enum: {
                Common: string;
                Staking: string;
            };
        };
        Common: {
            amount: string;
        };
        StakingLock: {
            staking_amount: string;
            unbondings: string;
        };
        LockReasons: {
            _enum: {
                Fee: null;
                Misc: null;
                All: null;
            };
        };
        Unbonding: {
            amount: string;
            until: string;
        };
        AccountData: {
            free: string;
            reserved: string;
            free_kton: string;
            reserved_kton: string;
            misc_frozen: string;
            fee_frozen: string;
        };
        RingBalance: string;
        KtonBalance: string;
        TsInMs: string;
        Power: string;
        DepositId: string;
        StakingBalanceT: {
            _enum: {
                RingBalance: string;
                KtonBalance: string;
            };
        };
        StakingLedgerT: {
            stash: string;
            active_ring: string;
            active_deposit_ring: string;
            active_kton: string;
            deposit_items: string;
            ring_staking_lock: string;
            kton_staking_lock: string;
            claimed_rewards: string;
            total: string;
            active: string;
            unlocking: string;
        };
        TimeDepositItem: {
            value: string;
            start_time: string;
            expire_time: string;
        };
        RewardDestination: {
            _enum: {
                Staked: string;
                Stash: null;
                Controller: null;
            };
        };
        Staked: {
            promise_month: string;
        };
        ExposureT: {
            own_ring_balance: string;
            own_kton_balance: string;
            own_power: string;
            total_power: string;
            others: string;
        };
        IndividualExposure: {
            who: string;
            ring_balance: string;
            kton_balance: string;
            power: string;
        };
        ElectionResultT: {
            elected_stashes: string;
            exposures: string;
            compute: string;
        };
        RKT: {
            r: string;
            k: string;
        };
        SpanRecord: {
            slashed: string;
            paid_out: string;
        };
        UnappliedSlash: {
            validator: string;
            own: string;
            others: string;
            reporters: string;
            payout: string;
        };
        TreasuryProposal: {
            proposer: string;
            beneficiary: string;
            ring_value: string;
            kton_value: string;
            ring_bond: string;
            kton_bond: string;
        };
        MappedRing: string;
        EthereumTransactionIndex: string;
        EthereumHeaderBrief: {
            total_difficulty: string;
            parent_hash: string;
            number: string;
            relayer: string;
        };
        EthereumBlockNumber: string;
        EthereumHeaderThingWithProof: {
            header: string;
            ethash_proof: string;
            mmr_root: string;
            mmr_proof: string;
        };
        ConfirmedEthereumHeaderInfo: {
            header: string;
            mmr_root: string;
        };
        EthereumHeaderThing: {
            header: string;
            mmr_root: string;
        };
        EthereumHeader: {
            parent_hash: string;
            timestamp: string;
            number: string;
            author: string;
            transactions_root: string;
            uncles_hash: string;
            extra_data: string;
            state_root: string;
            receipts_root: string;
            log_bloom: string;
            gas_used: string;
            gas_limit: string;
            difficulty: string;
            seal: string;
            hash: string;
        };
        EthereumAddress: string;
        Bloom: string;
        H128: string;
        EthashProof: {
            dag_nodes: string;
            proof: string;
        };
        EthereumReceipt: {
            gas_used: string;
            log_bloom: string;
            logs: string;
            outcome: string;
        };
        EthereumNetworkType: {
            _enum: {
                Mainnet: null;
                Ropsten: null;
            };
        };
        RedeemFor: {
            _enum: {
                Token: null;
                Deposit: null;
            };
        };
        EthereumReceiptProof: {
            index: string;
            proof: string;
            header_hash: string;
        };
        EthereumReceiptProofThing: string;
        MMRProof: {
            member_leaf_index: string;
            last_leaf_index: string;
            proof: string;
        };
        OtherSignature: {
            _enum: {
                Eth: string;
                Tron: string;
            };
        };
        EcdsaSignature: string;
        OtherAddress: {
            _enum: {
                Eth: string;
                Tron: string;
            };
        };
        AddressT: string;
        MerkleMountainRangeRootLog: {
            prefix: string;
            mmr_root: string;
        };
        Round: string;
        TcHeaderThingWithProof: string;
        TcHeaderThing: string;
        TcBlockNumber: string;
        TcHeaderHash: string;
        GameId: string;
        RelayProposalT: {
            relayer: string;
            bonded_proposal: string;
            extend_from_header_hash: string;
        };
        BalancesRuntimeDispatchInfo: {
            usable_balance: string;
        };
        StakingRuntimeDispatchInfo: {
            power: string;
        };
    };
    Equilibrium: {
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
    acala: Record<string, any>;
    'centrifuge-chain': {
        AnchorData: {
            id: string;
            docRoot: string;
            anchoredBlock: string;
        };
        Fee: {
            key: string;
            price: string;
        };
        PreCommitData: {
            signingRoot: string;
            identity: string;
            expirationBlock: string;
        };
        Proof: {
            leafHash: string;
            sortedHashes: string;
        };
        MultiAccountData: {
            threshold: string;
            signatories: string;
            deposit: string;
            depositor: string;
        };
        ChainId: string;
        ResourceId: string;
        'chainbridge::ChainId': string;
        DepositNonce: string;
    };
    crust: {
        Address: string;
        RefCount: string;
        AddressInfo: string;
        FileAlias: string;
        Guarantee: {
            targets: string;
            total: string;
            submitted_in: string;
            suppressed: string;
        };
        IASSig: string;
        Identity: {
            pub_key: string;
            code: string;
        };
        ISVBody: string;
        LookupSource: string;
        MerchantInfo: {
            address: string;
            storage_price: string;
            file_map: string;
        };
        MerchantPunishment: {
            success: string;
            failed: string;
            value: string;
        };
        MerkleRoot: string;
        OrderStatus: {
            _enum: string[];
        };
        PaymentLedger: {
            total: string;
            paid: string;
            unreserved: string;
        };
        Pledge: {
            total: string;
            used: string;
        };
        ReportSlot: string;
        Releases: {
            _enum: string[];
        };
        Status: {
            _enum: string[];
        };
        StorageOrder: {
            file_identifier: string;
            file_size: string;
            created_on: string;
            completed_on: string;
            expired_on: string;
            provider: string;
            client: string;
            amount: string;
            order_status: string;
        };
        SworkerCert: string;
        SworkerCode: string;
        SworkerPubKey: string;
        SworkerSignature: string;
        WorkReport: {
            block_number: string;
            used: string;
            reserved: string;
            cached_reserved: string;
            files: string;
        };
    };
    'cumulus-test-parachain': {
        Address: string;
        LookupSource: string;
        RefCount: string;
    };
    'darwinia-parachain': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        BalanceLock: {
            id: string;
            lock_for: string;
            lock_reasons: string;
            amount: string;
            reasons: string;
        };
        LockFor: {
            _enum: {
                Common: string;
                Staking: string;
            };
        };
        Common: {
            amount: string;
        };
        StakingLock: {
            staking_amount: string;
            unbondings: string;
        };
        LockReasons: {
            _enum: {
                Fee: null;
                Misc: null;
                All: null;
            };
        };
        Unbonding: {
            amount: string;
            until: string;
        };
        AccountData: {
            free: string;
            reserved: string;
            free_kton: string;
            reserved_kton: string;
            misc_frozen: string;
            fee_frozen: string;
        };
        RingBalance: string;
        KtonBalance: string;
        TsInMs: string;
        Power: string;
        DepositId: string;
        StakingBalanceT: {
            _enum: {
                RingBalance: string;
                KtonBalance: string;
            };
        };
        StakingLedgerT: {
            stash: string;
            active_ring: string;
            active_deposit_ring: string;
            active_kton: string;
            deposit_items: string;
            ring_staking_lock: string;
            kton_staking_lock: string;
            claimed_rewards: string;
            total: string;
            active: string;
            unlocking: string;
        };
        TimeDepositItem: {
            value: string;
            start_time: string;
            expire_time: string;
        };
        RewardDestination: {
            _enum: {
                Staked: string;
                Stash: null;
                Controller: null;
            };
        };
        Staked: {
            promise_month: string;
        };
        ExposureT: {
            own_ring_balance: string;
            own_kton_balance: string;
            own_power: string;
            total_power: string;
            others: string;
            total: string;
            own: string;
        };
        IndividualExposure: {
            who: string;
            ring_balance: string;
            kton_balance: string;
            power: string;
            value: string;
        };
        ElectionResultT: {
            elected_stashes: string;
            exposures: string;
            compute: string;
        };
        RKT: {
            r: string;
            k: string;
        };
        SpanRecord: {
            slashed: string;
            paid_out: string;
        };
        UnappliedSlash: {
            validator: string;
            own: string;
            others: string;
            reporters: string;
            payout: string;
        };
        TreasuryProposal: {
            proposer: string;
            beneficiary: string;
            ring_value: string;
            kton_value: string;
            ring_bond: string;
            kton_bond: string;
            value: string;
            bond: string;
        };
        EthTransactionIndex: string;
        EthHeaderBrief: {
            total_difficulty: string;
            parent_hash: string;
            number: string;
            relayer: string;
        };
        EthBlockNumber: string;
        EthHeaderThing: {
            eth_header: string;
            ethash_proof: string;
            mmr_root: string;
            mmr_proof: string;
        };
        EthHeader: {
            parent_hash: string;
            timestamp: string;
            number: string;
            author: string;
            transactions_root: string;
            uncles_hash: string;
            extra_data: string;
            state_root: string;
            receipts_root: string;
            log_bloom: string;
            gas_used: string;
            gas_limit: string;
            difficulty: string;
            seal: string;
            hash: string;
        };
        EthAddress: string;
        Bloom: string;
        H128: string;
        EthashProof: {
            dag_nodes: string;
            proof: string;
        };
        Receipt: {
            gas_used: string;
            log_bloom: string;
            logs: string;
            outcome: string;
        };
        EthereumNetworkType: {
            _enum: {
                Mainnet: null;
                Ropsten: null;
            };
        };
        RedeemFor: {
            _enum: {
                Ring: null;
                Kton: null;
                Deposit: null;
            };
        };
        EthereumReceiptProof: {
            index: string;
            proof: string;
            header_hash: string;
        };
        MMRProof: string;
        OtherSignature: {
            _enum: {
                Eth: string;
                Tron: string;
            };
        };
        EcdsaSignature: string;
        OtherAddress: {
            _enum: {
                Eth: string;
                Tron: string;
            };
        };
        AddressT: string;
        MerkleMountainRangeRootLog: {
            prefix: string;
            mmr_root: string;
        };
        Round: string;
        TcBlockNumber: string;
        TcHeaderHash: string;
        TcHeaderMMR: string;
        MMRHash: string;
        GameId: string;
        RawHeaderThing: string;
        BalancesRuntimeDispatchInfo: {
            usable_balance: string;
        };
        StakingRuntimeDispatchInfo: {
            power: string;
        };
    };
    'dock-main-runtime': {
        Address: string;
        LookupSource: string;
        Keys: string;
        Did: string;
        Bytes32: {
            value: string;
        };
        Bytes33: {
            value: string;
        };
        Bytes64: {
            value: string;
        };
        Bytes65: {
            value: string;
        };
        PublicKey: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        DidSignature: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        KeyDetail: {
            controller: string;
            public_key: string;
        };
        KeyUpdate: {
            did: string;
            public_key: string;
            controller: string;
            last_modified_in_block: string;
        };
        DidRemoval: {
            did: string;
            last_modified_in_block: string;
        };
        RegistryId: string;
        RevokeId: string;
        Registry: {
            policy: string;
            add_only: string;
        };
        Revoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        UnRevoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        RemoveRegistry: {
            registry_id: string;
            last_modified: string;
        };
        PAuth: string;
        Policy: {
            _enum: {
                OneOf: string;
            };
        };
        BlobId: string;
        Blob: {
            id: string;
            blob: string;
            author: string;
        };
        EpochNo: string;
        EpochLen: string;
        SlotNo: string;
        Balance: string;
        EpochDetail: {
            validator_count: string;
            starting_slot: string;
            expected_ending_slot: string;
            ending_slot: string;
            total_emission: string;
            emission_for_treasury: string;
            emission_for_validators: string;
        };
        ValidatorStatsPerEpoch: {
            block_count: string;
            locked_reward: string;
            unlocked_reward: string;
        };
        Payload: {
            proposal: string;
            round_no: string;
        };
        Membership: {
            members: string;
            vote_requirement: string;
        };
        PMAuth: string;
        StateChange: {
            _enum: {
                KeyUpdate: string;
                DidRemoval: string;
                Revoke: string;
                UnRevoke: string;
                RemoveRegistry: string;
                Blob: string;
                MasterVote: string;
            };
        };
    };
    'dock-testnet': {
        Address: string;
        LookupSource: string;
        Keys: string;
        Did: string;
        Bytes32: {
            value: string;
        };
        Bytes33: {
            value: string;
        };
        Bytes64: {
            value: string;
        };
        Bytes65: {
            value: string;
        };
        PublicKey: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        DidSignature: {
            _enum: {
                Sr25519: string;
                Ed25519: string;
                Secp256k1: string;
            };
        };
        KeyDetail: {
            controller: string;
            public_key: string;
        };
        KeyUpdate: {
            did: string;
            public_key: string;
            controller: string;
            last_modified_in_block: string;
        };
        DidRemoval: {
            did: string;
            last_modified_in_block: string;
        };
        RegistryId: string;
        RevokeId: string;
        Registry: {
            policy: string;
            add_only: string;
        };
        Revoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        UnRevoke: {
            registry_id: string;
            revoke_ids: string;
            last_modified: string;
        };
        RemoveRegistry: {
            registry_id: string;
            last_modified: string;
        };
        PAuth: string;
        Policy: {
            _enum: {
                OneOf: string;
            };
        };
        BlobId: string;
        Blob: {
            id: string;
            blob: string;
            author: string;
        };
        EpochNo: string;
        EpochLen: string;
        SlotNo: string;
        Balance: string;
        EpochDetail: {
            validator_count: string;
            starting_slot: string;
            expected_ending_slot: string;
            ending_slot: string;
            total_emission: string;
            emission_for_treasury: string;
            emission_for_validators: string;
        };
        ValidatorStatsPerEpoch: {
            block_count: string;
            locked_reward: string;
            unlocked_reward: string;
        };
        Payload: {
            proposal: string;
            round_no: string;
        };
        Membership: {
            members: string;
            vote_requirement: string;
        };
        PMAuth: string;
        StateChange: {
            _enum: {
                KeyUpdate: string;
                DidRemoval: string;
                Revoke: string;
                UnRevoke: string;
                RemoveRegistry: string;
                Blob: string;
                MasterVote: string;
            };
        };
    };
    dusty3: {
        AuthorityId: string;
        AuthorityVote: string;
        Claim: {
            amount: string;
            approve: string;
            complete: string;
            decline: string;
            params: string;
        };
        ClaimId: string;
        ClaimVote: {
            approve: string;
            authority: string;
            claim_id: string;
        };
        DollarRate: string;
        Keys: string;
        Lockdrop: {
            duration: string;
            public_key: string;
            transaction_hash: string;
            type: string;
            value: string;
        };
        PredicateHash: string;
        RefCount: string;
        TickerRate: {
            authority: string;
            btc: string;
            eth: string;
        };
    };
    edgeware: {
        RefCount: string;
    };
    'encointer-node': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        Weight: string;
    };
    'encointer-node-notee': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        Weight: string;
    };
    'encointer-node-teeproxy': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        CurrencyIdentifier: string;
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ShardIdentifier: string;
        Request: {
            shard: string;
            cyphertext: string;
        };
        Enclave: {
            pubkey: string;
            mrenclave: string;
            timestamp: string;
            url: string;
        };
        Weight: string;
    };
    kulupu: {
        Difficulty: string;
        DifficultyAndTimestamp: {
            difficulty: string;
            timestamp: string;
        };
        Era: {
            genesisBlockHash: string;
            finalBlockHash: string;
            finalStateRoot: string;
        };
        RefCount: string;
    };
    laminar: Record<string, any>;
    'mashnet-node': {
        Address: string;
        BlockNumber: string;
        DelegationNodeId: string;
        ErrorCode: string;
        Index: string;
        LookupSource: string;
        Permissions: string;
        PublicBoxKey: string;
        PublicSigningKey: string;
        RefCount: string;
        Signature: string;
    };
    'node-template': {
        Address: string;
        LookupSource: string;
    };
    'nodle-chain': {
        Amendment: string;
        Application: {
            candidate: string;
            candidate_deposit: string;
            challenged_block: string;
            challenger: string;
            challenger_deposit: string;
            created_block: string;
            metadata: string;
            voters_against: string;
            voters_for: string;
            votes_against: string;
            votes_for: string;
        };
        CertificateId: string;
        RefCount: string;
        RootCertificate: {
            child_revocations: string;
            created: string;
            key: string;
            owner: string;
            renewed: string;
            revoked: string;
            validity: string;
        };
    };
    plasm: {
        AuthorityId: string;
        AuthorityVote: string;
        Claim: {
            amount: string;
            approve: string;
            complete: string;
            decline: string;
            params: string;
        };
        ClaimId: string;
        ClaimVote: {
            approve: string;
            authority: string;
            claim_id: string;
        };
        DollarRate: string;
        Keys: string;
        Lockdrop: {
            duration: string;
            public_key: string;
            transaction_hash: string;
            type: string;
            value: string;
        };
        PredicateHash: string;
        RefCount: string;
        TickerRate: {
            authority: string;
            btc: string;
            eth: string;
        };
    };
    robonomics: {
        RefCount: string;
        Record: string;
        TechnicalParam: string;
        TechnicalReport: string;
        EconomicalParam: string;
        ProofParam: string;
        LiabilityIndex: string;
        ValidationFunctionParams: {
            max_code_size: string;
            relay_chain_height: string;
            code_upgrade_allowed: string;
        };
    };
    'stable-poc': {
        Address: string;
        LookupSource: string;
        RefCount: string;
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
        Value: string;
        UtxoHash: string;
        AccountHash: string;
        TxHash: string;
        TransactionOutput: {
            value: string;
            pubkey: string;
        };
        SignedPair: {
            input: string;
            output: string;
        };
        ArchivedTransaction: string;
        ArchivedPair: {
            inputs: string;
            outputs: string;
        };
    };
    stable_poc: {
        Address: string;
        LookupSource: string;
        RefCount: string;
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
        Value: string;
        UtxoHash: string;
        AccountHash: string;
        TxHash: string;
        TransactionOutput: {
            value: string;
            pubkey: string;
        };
        SignedPair: {
            input: string;
            output: string;
        };
        ArchivedTransaction: string;
        ArchivedPair: {
            inputs: string;
            outputs: string;
        };
    };
    stafi: {
        Address: string;
        LookupSource: string;
        RefCount: string;
    };
    subsocial: Record<string, any>;
    pirl: {
        Address: string;
        LookupSource: string;
        Account: {
            nonce: string;
            balance: string;
        };
        Transaction: {
            nonce: string;
            action: string;
            gas_price: string;
            gas_limit: string;
            value: string;
            input: string;
            signature: string;
        };
        Signature: {
            v: string;
            r: string;
            s: string;
        };
        Keys: string;
    };
};
export default _default;

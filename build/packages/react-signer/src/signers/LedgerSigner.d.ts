import { Signer, SignerResult } from '@polkadot/api/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
export default class LedgerSigner implements Signer {
    #private;
    constructor(accountOffset: number, addressOffset: number);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}

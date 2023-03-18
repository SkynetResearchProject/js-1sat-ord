import { MAP } from "bmapjs/types/protocols/map";
import { P2PKHAddress, PrivateKey, Script, Transaction } from "bsv-wasm";
type Utxo = {
    satoshis: number;
    txid: string;
    vout: number;
    script: string;
};
type Inscription = {
    dataB64: string;
    contentType: string;
};
declare const buildInscription: (destinationAddress: P2PKHAddress, b64File: string, mediaType: string, metaData?: MAP) => Script;
declare const createOrdinal: (utxo: Utxo, destinationAddress: string, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, inscription: Inscription, metaData?: MAP) => Promise<Transaction>;
declare const sendOrdinal: (paymentUtxo: Utxo, ordinal: Utxo, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, ordPk: PrivateKey, ordDestinationAddress: string, reinscription?: Inscription, metaData?: MAP) => Promise<Transaction>;
export { buildInscription, createOrdinal, sendOrdinal };

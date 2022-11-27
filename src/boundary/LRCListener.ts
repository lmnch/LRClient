import Endpoint from "../model/Endpoint";
import HttpMethod from "../model/HttpMethod";
import LRCRequest from "../model/LRCRequest";

export default interface LRCListener {

    onRequestSent(request: LRCRequest): void;

    onResponseReceived(response: Response): void;

}
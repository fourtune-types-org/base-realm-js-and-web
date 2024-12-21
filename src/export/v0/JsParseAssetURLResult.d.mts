import type {JsAssetURLProtocol} from "./JsAssetURLProtocol.d.mts"

export type JsParseAssetURLResult = {
	protocol: JsAssetURLProtocol,
	path: string
}

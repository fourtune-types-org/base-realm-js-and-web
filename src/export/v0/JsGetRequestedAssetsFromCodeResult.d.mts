import type {JsGetRequestedAssetsFromCodeReason} from "./JsGetRequestedAssetsFromCodeReason.d.mts"
import type {JsParseAssetURLResult} from "./JsParseAssetURLResult.d.mts"

export type JsGetRequestedAssetsFromCodeResult = {
	used: false,
	assets: null
} | {
	used: true,
	assets: JsParseAssetURLResult[]
} | {
	used: true,
	assets: "unknown",
	reason: JsGetRequestedAssetsFromCodeReason
}

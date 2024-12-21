import type {JsGetRequestedAssetsFromCodeResult} from "./JsGetRequestedAssetsFromCodeResult.d.mts"

export type JsGetRequestedAssetsFromFiles = (
	files : string[]
) => Promise<JsGetRequestedAssetsFromCodeResult>

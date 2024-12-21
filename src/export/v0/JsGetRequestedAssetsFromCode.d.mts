import type {JsGetRequestedAssetsFromCodeResult} from "./JsGetRequestedAssetsFromCodeResult.d.mts"

export type JsGetRequestedAssetsFromCode = (
	code : string
) => Promise<JsGetRequestedAssetsFromCodeResult>


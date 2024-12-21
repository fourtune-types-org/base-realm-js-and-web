import type {TsAssetFileBundlerOptions} from "./TsAssetFileBundlerOptions.d.mts"

export type TsAssetFileBundler = (
	project_root : string,
	entry_code : string,
	options? : TsAssetFileBundlerOptions
) => Promise<string>

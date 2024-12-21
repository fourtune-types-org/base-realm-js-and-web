import type {JsBundlerOptions} from "./JsBundlerOptions.d.mts"

export type JsBundler = (
	project_root : string,
	entry_code : string,
	options? : JsBundlerOptions
) => Promise<string>

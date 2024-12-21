import type {JsBundlerInputFileType} from "./JsBundlerInputFileType.d.mts"
import type {JsBundlerPlugin} from "./JsBundlerPlugin.d.mts"

export type JsBundlerOptions = {
	input_file_type? : JsBundlerInputFileType
	minify? : boolean
	treeshake? : boolean
	additional_plugins? : JsBundlerPlugin[]
	on_rollup_log_fn? : ((...args: any[]) => any) | null
	externals?: string[]
}

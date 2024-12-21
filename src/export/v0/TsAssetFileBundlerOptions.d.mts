import type {JsBundlerOptions} from "./JsBundlerOptions.d.mts"

export type TsAssetFileBundlerOptions = Omit<
	JsBundlerOptions,
	"input_file_type" | "treeshake" | "externals"
>

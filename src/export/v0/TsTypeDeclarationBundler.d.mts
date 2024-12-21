import type {TsTypeDeclarationBundlerOptions} from "./TsTypeDeclarationBundlerOptions.d.mts"

export type TsTypeDeclarationBundler = (
	project_root : string,
	entry_code : string,
	options? : TsTypeDeclarationBundlerOptions
) => Promise<string>

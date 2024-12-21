import type {TsResolveImportAliasesOptions} from "./TsResolveImportAliasesOptions.d.mts"

export type TsResolveImportAliases = (
	code : string, options?: TsResolveImportAliasesOptions
) => Promise<string>

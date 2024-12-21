import type {TsGenerateFunctionFactoryCodeForRealmJSAndWebV0Source as Source} from "./TsGenerateFunctionFactoryCodeForRealmJSAndWebV0Source.d.mts"

export type TsGenerateFunctionFactoryCodeForRealmJSAndWebV0 = (
	project_root: string,
	source: Source,
	code: string,
	expect_async_implementation: boolean|null
) => Promise<{
	factory: string,
	fn: string
}>

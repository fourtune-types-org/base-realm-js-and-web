export type TsTypeDeclarationBundlerOptions = {
	externals?: string[]
	on_rollup_log_fn? : ((...args: any[]) => any) | null
}

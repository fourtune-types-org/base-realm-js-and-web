import type {TsStripTypesFromCodeOptions} from "./TsStripTypesFromCodeOptions.d.mts"

export type TsStripTypesFromCode = (
	code : string, options? : TsStripTypesFromCodeOptions
) => Promise<string>

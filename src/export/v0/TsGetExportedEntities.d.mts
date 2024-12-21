import type {TsGetExportedEntitiesEntity} from "./TsGetExportedEntitiesEntity.d.mts"

export type TsGetExportedEntities = (
	code: string
) => Promise<TsGetExportedEntitiesEntity[]>

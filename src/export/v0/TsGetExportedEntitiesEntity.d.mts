import type {TsGetExportedEntitiesDeclarationElement} from "./TsGetExportedEntitiesDeclarationElement.d.mts"
import type ts from "typescript"

export type TsGetExportedEntitiesEntity = {
	kind: string,
	node: ts.ExportDeclaration|
	      ts.TypeAliasDeclaration|
	      ts.FunctionDeclaration|
	      ts.VariableStatement|
	      ts.ExportAssignment
} & ({
	kind: "named"
	node: ts.ExportDeclaration
	module_name?: string|undefined
	elements: TsGetExportedEntitiesDeclarationElement[]
} | {
	kind: "star"
	node: ts.ExportDeclaration
	module_name: string
} | {
	kind: "type"
	node: ts.TypeAliasDeclaration
	name: string
} | {
	kind: "defaultFunction"
	node: ts.FunctionDeclaration
} | {
	kind: "namedFunction"
	node: ts.FunctionDeclaration
	name: string
} | {
	kind: "variables",
	node: ts.VariableStatement
	elements: {name: string}[]
} | {
	kind: "default",
	node: ts.ExportAssignment,
	expression: string
})

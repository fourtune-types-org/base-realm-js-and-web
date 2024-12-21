import ts from "typescript"

import type {JsBundler} from "./JsBundler.d.mts"
import type {JsGetDeclaredExportNamesFromCode} from "./JsGetDeclaredExportNamesFromCode.d.mts"
import type {JsGetRequestedAssetsFromCode} from "./JsGetRequestedAssetsFromCode.d.mts"
import type {JsGetRequestedAssetsFromFiles} from "./JsGetRequestedAssetsFromFiles.d.mts"
import type {JsNormalizePath} from "./JsNormalizePath.d.mts"
import type {JsParseAssetURL} from "./JsParseAssetURL.d.mts"
import type {JsGetBaseTsConfigPath} from "./JsGetBaseTsConfigPath.d.mts"

import type {TsStripTypesFromCode} from "./TsStripTypesFromCode.d.mts"
import type {TsReadTSConfigFile} from "./TsReadTSConfigFile.d.mts"
import type {TsInvokeTypeScript} from "./TsInvokeTypeScript.d.mts"
import type {TsGetDeclaredExportNamesFromCode} from "./TsGetDeclaredExportNamesFromCode.d.mts"
import type {TsResolveImportAliases} from "./TsResolveImportAliases.d.mts"
import type {TsGetExportedEntities} from "./TsGetExportedEntities.d.mts"
import type {TsTypeDeclarationBundler} from "./TsTypeDeclarationBundler.d.mts"
import type {TsAssetFileBundler} from "./TsAssetFileBundler.d.mts"
import type {TsGenerateFunctionFactoryCodeForRealmJSAndWebV0} from "./TsGenerateFunctionFactoryCodeForRealmJSAndWebV0.d.mts"

export type DefaultExportObject = {
	jsBundler: JsBundler,
	jsGetDeclaredExportNamesFromCode: JsGetDeclaredExportNamesFromCode,
	jsGetRequestedAssetsFromCode: JsGetRequestedAssetsFromCode,
	jsGetRequestedAssetsFromFiles: JsGetRequestedAssetsFromFiles,
	jsNormalizePath: JsNormalizePath,
	jsParseAssetURL: JsParseAssetURL,
	jsGetBaseTsConfigPath: JsGetBaseTsConfigPath,

	ts: typeof ts,

	tsStripTypesFromCode: TsStripTypesFromCode,
	tsReadTSConfigFile: TsReadTSConfigFile,
	tsInvokeTypeScript: TsInvokeTypeScript,
	tsGetDeclaredExportNamesFromCode: TsGetDeclaredExportNamesFromCode,
	tsResolveImportAliases: TsResolveImportAliases,
	tsGetExportedEntities: TsGetExportedEntities,
	tsTypeDeclarationBundler: TsTypeDeclarationBundler,
	tsAssetFileBundler: TsAssetFileBundler,
	tsGenerateFunctionFactoryCodeForRealmJSAndWebV0: TsGenerateFunctionFactoryCodeForRealmJSAndWebV0
}

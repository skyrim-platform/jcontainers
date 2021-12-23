/*
==============================================
Typescript definitions for v4.2.1
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

import * as sp from "skyrimPlatform"
import { Form } from "skyrimPlatform"

/** various string utility methods */
const sn = (sp as any).JString

/** Breaks source text onto set of lines of almost equal size.
    Returns JArray object containing lines.
    Accepts ASCII and UTF-8 encoded strings only */
export const wrap = (sourceText: string, charactersPerLine: number = 60): number => sn.wrap(sourceText,  charactersPerLine)

/** FormId|Form <-> "__formData|<pluginName>|<lowFormId>"-string converisons */
export const decodeFormStringToFormId = (formString: string): number => sn.decodeFormStringToFormId(formString)
export const decodeFormStringToForm = (formString: string): Form | null | undefined => sn.decodeFormStringToForm(formString)
export const encodeFormToString = (value: Form | null | undefined): string => sn.encodeFormToString(value)
export const encodeFormIdToString = (formId: number): string => sn.encodeFormIdToString(formId)

/** Generates random uuid-string like 2e80251a-ab22-4ad8-928c-2d1c9561270e */
export const generateUUID = (): string => sn.generateUUID()

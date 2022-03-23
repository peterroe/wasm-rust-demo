/* tslint:disable */
/* eslint-disable */
/**
* @param {string} data
* @returns {string}
*/
export function digest(data: string): string;
/**
* @param {string} data
* @param {string} elem_id
*/
export function digest_attch(data: string, elem_id: string): void;
/**
*/
export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly digest: (a: number, b: number, c: number) => void;
  readonly digest_attch: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly start: () => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

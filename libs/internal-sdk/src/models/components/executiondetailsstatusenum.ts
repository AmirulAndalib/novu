/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of the execution detail
 */
export const ExecutionDetailsStatusEnum = {
  Success: "Success",
  Warning: "Warning",
  Failed: "Failed",
  Pending: "Pending",
  Queued: "Queued",
  ReadConfirmation: "ReadConfirmation",
} as const;
/**
 * Status of the execution detail
 */
export type ExecutionDetailsStatusEnum = ClosedEnum<
  typeof ExecutionDetailsStatusEnum
>;

/** @internal */
export const ExecutionDetailsStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsStatusEnum
> = z.nativeEnum(ExecutionDetailsStatusEnum);

/** @internal */
export const ExecutionDetailsStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsStatusEnum
> = ExecutionDetailsStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsStatusEnum$ {
  /** @deprecated use `ExecutionDetailsStatusEnum$inboundSchema` instead. */
  export const inboundSchema = ExecutionDetailsStatusEnum$inboundSchema;
  /** @deprecated use `ExecutionDetailsStatusEnum$outboundSchema` instead. */
  export const outboundSchema = ExecutionDetailsStatusEnum$outboundSchema;
}

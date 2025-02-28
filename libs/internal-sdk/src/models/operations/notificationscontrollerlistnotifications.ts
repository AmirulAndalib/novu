/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotificationsControllerListNotificationsRequest = {
  /**
   * Array of channel types
   */
  channels?: Array<components.ChannelTypeEnum> | undefined;
  /**
   * Array of template IDs or a single template ID
   */
  templates?: Array<string> | undefined;
  /**
   * Array of email addresses or a single email address
   */
  emails?: Array<string> | undefined;
  /**
   * Search term (deprecated)
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  search?: string | undefined;
  /**
   * Array of subscriber IDs or a single subscriber ID
   */
  subscriberIds?: Array<string> | undefined;
  /**
   * Page number for pagination
   */
  page?: number | undefined;
  /**
   * Limit for pagination
   */
  limit?: number | undefined;
  /**
   * Transaction ID for filtering
   */
  transactionId?: string | undefined;
  /**
   * Date filter for records after this timestamp
   */
  after?: string | undefined;
  /**
   * Date filter for records before this timestamp
   */
  before?: string | undefined;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type NotificationsControllerListNotificationsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ActivitiesResponseDto;
};

/** @internal */
export const NotificationsControllerListNotificationsRequest$inboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    channels: z.array(components.ChannelTypeEnum$inboundSchema).optional(),
    templates: z.array(z.string()).optional(),
    emails: z.array(z.string()).optional(),
    search: z.string().optional(),
    subscriberIds: z.array(z.string()).optional(),
    page: z.number().default(0),
    limit: z.number().default(10),
    transactionId: z.string().optional(),
    after: z.string().optional(),
    before: z.string().optional(),
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type NotificationsControllerListNotificationsRequest$Outbound = {
  channels?: Array<string> | undefined;
  templates?: Array<string> | undefined;
  emails?: Array<string> | undefined;
  search?: string | undefined;
  subscriberIds?: Array<string> | undefined;
  page: number;
  limit: number;
  transactionId?: string | undefined;
  after?: string | undefined;
  before?: string | undefined;
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const NotificationsControllerListNotificationsRequest$outboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsRequest$Outbound,
    z.ZodTypeDef,
    NotificationsControllerListNotificationsRequest
  > = z.object({
    channels: z.array(components.ChannelTypeEnum$outboundSchema).optional(),
    templates: z.array(z.string()).optional(),
    emails: z.array(z.string()).optional(),
    search: z.string().optional(),
    subscriberIds: z.array(z.string()).optional(),
    page: z.number().default(0),
    limit: z.number().default(10),
    transactionId: z.string().optional(),
    after: z.string().optional(),
    before: z.string().optional(),
    idempotencyKey: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerListNotificationsRequest$ {
  /** @deprecated use `NotificationsControllerListNotificationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerListNotificationsRequest$inboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerListNotificationsRequest$outboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsRequest$Outbound` instead. */
  export type Outbound =
    NotificationsControllerListNotificationsRequest$Outbound;
}

export function notificationsControllerListNotificationsRequestToJSON(
  notificationsControllerListNotificationsRequest:
    NotificationsControllerListNotificationsRequest,
): string {
  return JSON.stringify(
    NotificationsControllerListNotificationsRequest$outboundSchema.parse(
      notificationsControllerListNotificationsRequest,
    ),
  );
}

export function notificationsControllerListNotificationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerListNotificationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerListNotificationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerListNotificationsRequest' from JSON`,
  );
}

/** @internal */
export const NotificationsControllerListNotificationsResponse$inboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.ActivitiesResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationsControllerListNotificationsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ActivitiesResponseDto$Outbound;
};

/** @internal */
export const NotificationsControllerListNotificationsResponse$outboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsResponse$Outbound,
    z.ZodTypeDef,
    NotificationsControllerListNotificationsResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.ActivitiesResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerListNotificationsResponse$ {
  /** @deprecated use `NotificationsControllerListNotificationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerListNotificationsResponse$inboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerListNotificationsResponse$outboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsResponse$Outbound` instead. */
  export type Outbound =
    NotificationsControllerListNotificationsResponse$Outbound;
}

export function notificationsControllerListNotificationsResponseToJSON(
  notificationsControllerListNotificationsResponse:
    NotificationsControllerListNotificationsResponse,
): string {
  return JSON.stringify(
    NotificationsControllerListNotificationsResponse$outboundSchema.parse(
      notificationsControllerListNotificationsResponse,
    ),
  );
}

export function notificationsControllerListNotificationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerListNotificationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerListNotificationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerListNotificationsResponse' from JSON`,
  );
}

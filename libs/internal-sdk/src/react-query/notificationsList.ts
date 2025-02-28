/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { NovuCore } from "../core.js";
import { notificationsList } from "../funcs/notificationsList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useNovuContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type NotificationsListQueryData =
  operations.NotificationsControllerListNotificationsResponse;

/**
 * Get notifications
 */
export function useNotificationsList(
  request: operations.NotificationsControllerListNotificationsRequest,
  options?: QueryHookOptions<NotificationsListQueryData>,
): UseQueryResult<NotificationsListQueryData, Error> {
  const client = useNovuContext();
  return useQuery({
    ...buildNotificationsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get notifications
 */
export function useNotificationsListSuspense(
  request: operations.NotificationsControllerListNotificationsRequest,
  options?: SuspenseQueryHookOptions<NotificationsListQueryData>,
): UseSuspenseQueryResult<NotificationsListQueryData, Error> {
  const client = useNovuContext();
  return useSuspenseQuery({
    ...buildNotificationsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchNotificationsList(
  queryClient: QueryClient,
  client$: NovuCore,
  request: operations.NotificationsControllerListNotificationsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildNotificationsListQuery(
      client$,
      request,
    ),
  });
}

export function setNotificationsListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      channels?: Array<components.ChannelTypeEnum> | undefined;
      templates?: Array<string> | undefined;
      emails?: Array<string> | undefined;
      search?: string | undefined;
      subscriberIds?: Array<string> | undefined;
      page?: number | undefined;
      limit?: number | undefined;
      transactionId?: string | undefined;
      after?: string | undefined;
      before?: string | undefined;
      idempotencyKey?: string | undefined;
    },
  ],
  data: NotificationsListQueryData,
): NotificationsListQueryData | undefined {
  const key = queryKeyNotificationsList(...queryKeyBase);

  return client.setQueryData<NotificationsListQueryData>(key, data);
}

export function invalidateNotificationsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      channels?: Array<components.ChannelTypeEnum> | undefined;
      templates?: Array<string> | undefined;
      emails?: Array<string> | undefined;
      search?: string | undefined;
      subscriberIds?: Array<string> | undefined;
      page?: number | undefined;
      limit?: number | undefined;
      transactionId?: string | undefined;
      after?: string | undefined;
      before?: string | undefined;
      idempotencyKey?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@novu/api", "Notifications", "list", ...queryKeyBase],
  });
}

export function invalidateAllNotificationsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@novu/api", "Notifications", "list"],
  });
}

export function buildNotificationsListQuery(
  client$: NovuCore,
  request: operations.NotificationsControllerListNotificationsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<NotificationsListQueryData>;
} {
  return {
    queryKey: queryKeyNotificationsList({
      channels: request.channels,
      templates: request.templates,
      emails: request.emails,
      search: request.search,
      subscriberIds: request.subscriberIds,
      page: request.page,
      limit: request.limit,
      transactionId: request.transactionId,
      after: request.after,
      before: request.before,
      idempotencyKey: request.idempotencyKey,
    }),
    queryFn: async function notificationsListQueryFn(
      ctx,
    ): Promise<NotificationsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(notificationsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyNotificationsList(
  parameters: {
    channels?: Array<components.ChannelTypeEnum> | undefined;
    templates?: Array<string> | undefined;
    emails?: Array<string> | undefined;
    search?: string | undefined;
    subscriberIds?: Array<string> | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    transactionId?: string | undefined;
    after?: string | undefined;
    before?: string | undefined;
    idempotencyKey?: string | undefined;
  },
): QueryKey {
  return ["@novu/api", "Notifications", "list", parameters];
}

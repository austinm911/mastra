import { EventHandler } from '@arkw/core';

import { WorkspaceMembershipCompactFields } from '../constants';

import { AsanaIntegration } from '..';

export const WorkspaceMembershipsForWorkspace: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-WorkspaceMembershipCompact-WorkspaceMembershipsForWorkspace`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { workspace_gid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/workspaces/{workspace_gid}/workspace_memberships'].get({
      params: { workspace_gid },
    });

    if (!response.ok) {
      const error = await response.json();
      console.log('error in fetching WorkspaceMembershipsForWorkspace', JSON.stringify(error, null, 2));
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `WorkspaceMembershipCompact`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `WorkspaceMembershipCompact`,
      properties: WorkspaceMembershipCompactFields,
    });
  },
});
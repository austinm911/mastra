import { ContextMenu, ContextMenuContent, ContextMenuTrigger } from '@/components/ui/context-menu';
import { Text } from '@/components/ui/text';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent, TooltipPortal } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { Icon } from '@/app/components/icon';

import { systemLogics } from '../../constants';
import { useWorkflowContext } from '../../context/workflow-context';
import { AutomationAction } from '../../types';
import { getBlockIconAndTitle } from '../../utils';
import { FrameworkIcon } from '../utils/action-selector';
import { DeleteWorkflowActionDropdownButton } from '../utils/delete-workflow-action-dropdown-button';

import { WorkflowBlockDropdown } from './workflow-block-dropdown';
import { WorkflowGraphAddBlock } from './workflow-graph-add-block';

const blockStyles = {
  default: 'border-[0.5px] border-solid rounded-md relative border-border',
  states: 'hover:border-accent focus:border-accent',
  header: 'p-[10px] text-[13px] flex gap-[7px] items-center',
  details: 'bg-neutral-800 rounded-b-md p-[10px] text-[10px] text-left text-neutral-300',
};

export function ActionNode({ action, handleActionClick }: { handleActionClick: () => void; action: AutomationAction }) {
  const { frameworkActions, selectedBlock, attemptedPublish, actionsValidityObject } = useWorkflowContext();

  const isConditionAction = action.type === `CONDITIONS`;
  const concreteAction =
    frameworkActions.find(systemAction => systemAction.type === action.type) ||
    systemLogics.find(systemLogic => systemLogic.type === action.type);

  if (!action.id) return null;

  if (!concreteAction) {
    return (
      <>
        <ContextMenu modal={false}>
          <ContextMenuTrigger aria-label="context-menu" className="relative">
            <button
              onClick={handleActionClick}
              className={cn(
                blockStyles.default,
                blockStyles.states,
                'bg-transparent flex min-w-[274px] gap-[10px] !border-dashed p-[10px]',
                {
                  'border-acccent': selectedBlock?.block?.id === action?.id,
                },
              )}
              title="New action"
            >
              <div className={cn('flex gap-[6px] rounded-sm bg-[#2C2C2C] p-2')}>
                <Icon name="enrich" />
                <Text size="xs" weight="medium">
                  Action
                </Text>
              </div>
              <Text className="max-w-[120px] text-left text-[10px]">Select event to continue your workflow</Text>
            </button>
          </ContextMenuTrigger>
          <ContextMenuContent className="rounded-[8px] border-0 bg-[#737373]/5 shadow-md ring-1 ring-neutral-700 backdrop-blur-xl">
            <DeleteWorkflowActionDropdownButton action={action} deleteOnlyBlock />
          </ContextMenuContent>
        </ContextMenu>
        {action.subActions?.length ? (
          <>
            <div
              role="presentation"
              className={cn('from-accent to-transparent relative h-[30px] w-[1px] bg-gradient-to-t')}
            />
            <WorkflowGraphAddBlock parentActionId={action.id} />
          </>
        ) : null}
      </>
    );
  }

  const { label: blockTitle, icon: blockIcon } = concreteAction;

  const resolvedBlockIconAndTitle = getBlockIconAndTitle({
    block: action,
    blockDescription: concreteAction.description,
  });

  const title = resolvedBlockIconAndTitle?.title || blockTitle;
  const icon = resolvedBlockIconAndTitle?.icon || blockIcon;
  const description = resolvedBlockIconAndTitle?.description;

  return (
    <TooltipProvider>
      <ContextMenu>
        <ContextMenuTrigger aria-label="context-menu" className="relative">
          <button
            onClick={handleActionClick}
            className={cn(blockStyles.default, blockStyles.states, 'bg-kp-bg-8 min-w-[274px]', {
              'border-accent': selectedBlock?.block?.id === action?.id,
            })}
          >
            <div className={cn(blockStyles.header, 'text-[13px]')}>
              <span className={cn('border-border bg-transparent rounded-sm border-[0.4px] border-solid p-2', {})}>
                <FrameworkIcon icon={icon} className="text-current" />
              </span>
              <Text className="text-kp-el-6 capitalize" size="xs" weight="medium">
                {title}
              </Text>
              {attemptedPublish && !actionsValidityObject[action.id]?.isValid && (
                <Tooltip>
                  <TooltipTrigger>
                    <div className={cn('border-border bg-transparent rounded-sm border-[0.4px] border-solid p-1', {})}>
                      <Icon name="warning-square" className="text-kp-tags-8" />
                    </div>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent side="top" className="bg-dialog-bg rounded-md p-1 px-3">
                      {actionsValidityObject[action.id]?.message}
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              )}

              <WorkflowBlockDropdown action={action} />
            </div>
            {description && <div className={cn(blockStyles.details)}>{description}</div>}
          </button>
        </ContextMenuTrigger>
        <ContextMenuContent className="rounded-[8px] border-0 bg-[#737373]/5 shadow-md ring-1 ring-neutral-700 backdrop-blur-xl">
          <DeleteWorkflowActionDropdownButton action={action} />
        </ContextMenuContent>
      </ContextMenu>

      <div
        role="presentation"
        className={cn('from-accent to-transparent relative h-[30px] w-[1px] bg-gradient-to-t')}
      />
      <WorkflowGraphAddBlock
        parentActionId={action.id}
        isParentACondition={isConditionAction}
        isPath={isConditionAction}
      />
    </TooltipProvider>
  );
}
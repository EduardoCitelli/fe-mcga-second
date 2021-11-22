import { UserActionType } from '../../types/users/userTypes';
import { ApiActionType } from '../../types/api/apiTypes';

export type AppActions = UserActionType | ApiActionType;
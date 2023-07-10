import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { EventiGare } from '../eventi-gare.type';

export const getEventiGareJsonDbEndpoint = () => `EventiGare`;
export const getEventiGareLocalEndpoint = () =>
  `/assets/mocks/eventi-gare.mock.json`;

export type GetEventiGareSuccessResponse = ApiSuccessResponse<EventiGare>;

export type GetEventiGareFailureResponse = ApiFailureResponse<{}>;

export type GetEventiGareBody = ApiBody<{}>;

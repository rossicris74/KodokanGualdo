import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { NavigationBarType } from '../public-api';

export const getNavigationBarEndpoint = () => `Misc/TaxDraft/Close/`;

export type GetNavigationBarSuccessResponse =
  ApiSuccessResponse<NavigationBarType.NavigationBar>;

export type GetNavigationBarFailureResponse = ApiFailureResponse<{}>;

export type GetNavigationBarBody = ApiBody<{}>;

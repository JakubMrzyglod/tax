const addIdIfExists = (id?: string) => (id ? `/${id}` : '');

export enum Collection {
  COMPANIES = 'companies',
}

export enum DocIdName {
  COMPANY_ID = 'companyId',
}

export const FS_PATH = {
  [Collection.COMPANIES]: (id?: string) =>
    `${Collection.COMPANIES}${addIdIfExists(id)}`,
};

export const TriggerPath = {
  [Collection.COMPANIES]: FS_PATH.companies(`{${DocIdName.COMPANY_ID}}`),
};

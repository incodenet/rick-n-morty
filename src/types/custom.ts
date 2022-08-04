export type Character = {
  id?: number;
  created?: string;
  image?: string;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  url?: string;
  origin?: Origin;
  episode?: string[];
  location?: Loaction;
};

export type Loaction = {
  name?: string;
  url?: string;
};

export type Origin = {
  name?: string;
  url?: string;
};

export type Episode = {
  air_date?: string;
  characters?: string[];
  created?: string;
  episode?: string;
  id?: number;
  name?: string;
  url?: string;
};

export type Location = {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: string[];
  url?: string;
  created?: string;
};

export type SelectOption = {
  name?: string;
  value?: string;
};

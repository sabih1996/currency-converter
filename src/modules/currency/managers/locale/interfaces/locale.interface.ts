type LocaleApiResponse = LocaleResponse[];

type LocaleResponse = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type NativeName = {
  eng: Eng;
};

type Eng = {
  official: string;
  common: string;
};

type Currencies = {
  USD: Usd;
};

type Usd = {
  name: string;
  symbol: string;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Languages = {
  eng: string;
};

type Translations = {
  ara: Ara;
  bre: Bre;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld;
  per: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa;
  srp: Srp;
  swe: Swe;
  tur: Tur;
  urd: Urd;
  zho: Zho;
};

type Ara = {
  official: string;
  common: string;
};

type Bre = {
  official: string;
  common: string;
};

type Ces = {
  official: string;
  common: string;
};

type Cym = {
  official: string;
  common: string;
};

type Deu = {
  official: string;
  common: string;
};

type Est = {
  official: string;
  common: string;
};

type Fin = {
  official: string;
  common: string;
};

type Fra = {
  official: string;
  common: string;
};

type Hrv = {
  official: string;
  common: string;
};

type Hun = {
  official: string;
  common: string;
};

type Ita = {
  official: string;
  common: string;
};

type Jpn = {
  official: string;
  common: string;
};

type Kor = {
  official: string;
  common: string;
};

type Nld = {
  official: string;
  common: string;
};

type Per = {
  official: string;
  common: string;
};

type Pol = {
  official: string;
  common: string;
};

type Por = {
  official: string;
  common: string;
};

type Rus = {
  official: string;
  common: string;
};

type Slk = {
  official: string;
  common: string;
};

type Spa = {
  official: string;
  common: string;
};

type Srp = {
  official: string;
  common: string;
};

type Swe = {
  official: string;
  common: string;
};

type Tur = {
  official: string;
  common: string;
};

type Urd = {
  official: string;
  common: string;
};

type Zho = {
  official: string;
  common: string;
};

type Demonyms = {
  eng: Eng2;
  fra: Fra2;
};

type Eng2 = {
  f: string;
  m: string;
};

type Fra2 = {
  f: string;
  m: string;
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Gini = {
  '2018': number;
};

type Car = {
  signs: string[];
  side: string;
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};

type CoatOfArms = {
  png: string;
  svg: string;
};

type CapitalInfo = {
  latlng: number[];
};

type PostalCode = {
  format: string;
  regex: string;
};

export { LocaleApiResponse };

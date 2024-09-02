import { CurrenciesList } from '../../src/modules/currency/managers/swop/interfaces/swop.manager.interface';

const mockCountriesList: CurrenciesList = [
  {
    code: 'AED',
    numeric_code: '784',
    decimal_digits: 2,
    name: 'United Arab Emirates dirham',
    active: true,
  },
  {
    code: 'AFN',
    numeric_code: '971',
    decimal_digits: 2,
    name: 'Afghan afghani',
    active: true,
  },
  {
    code: 'ALL',
    numeric_code: '008',
    decimal_digits: 2,
    name: 'Albanian lek',
    active: true,
  },
  {
    code: 'AMD',
    numeric_code: '051',
    decimal_digits: 2,
    name: 'Armenian dram',
    active: true,
  },
  {
    code: 'ANG',
    numeric_code: '532',
    decimal_digits: 2,
    name: 'Netherlands Antillean guilder',
    active: true,
  },
  {
    code: 'AOA',
    numeric_code: '973',
    decimal_digits: 2,
    name: 'Angolan kwanza',
    active: true,
  },
  {
    code: 'ARS',
    numeric_code: '032',
    decimal_digits: 2,
    name: 'Argentine peso',
    active: true,
  },
  {
    code: 'AUD',
    numeric_code: '036',
    decimal_digits: 2,
    name: 'Australian dollar',
    active: true,
  },
  {
    code: 'AWG',
    numeric_code: '533',
    decimal_digits: 2,
    name: 'Aruban florin',
    active: true,
  },
  {
    code: 'AZN',
    numeric_code: '944',
    decimal_digits: 2,
    name: 'Azerbaijani manat',
    active: true,
  },
  {
    code: 'BAM',
    numeric_code: '977',
    decimal_digits: 2,
    name: 'Bosnia and Herzegovina convertible mark',
    active: true,
  },
  {
    code: 'BBD',
    numeric_code: '052',
    decimal_digits: 2,
    name: 'Barbados dollar',
    active: true,
  },
  {
    code: 'BDT',
    numeric_code: '050',
    decimal_digits: 2,
    name: 'Bangladeshi taka',
    active: true,
  },
  {
    code: 'BGN',
    numeric_code: '975',
    decimal_digits: 2,
    name: 'Bulgarian lev',
    active: true,
  },
  {
    code: 'BHD',
    numeric_code: '048',
    decimal_digits: 3,
    name: 'Bahraini dinar',
    active: true,
  },
  {
    code: 'BIF',
    numeric_code: '108',
    decimal_digits: 0,
    name: 'Burundian franc',
    active: true,
  },
  {
    code: 'BND',
    numeric_code: '096',
    decimal_digits: 2,
    name: 'Brunei dollar',
    active: true,
  },
  {
    code: 'BOB',
    numeric_code: '068',
    decimal_digits: 2,
    name: 'Boliviano',
    active: true,
  },
  {
    code: 'BRL',
    numeric_code: '986',
    decimal_digits: 2,
    name: 'Brazilian real',
    active: true,
  },
  {
    code: 'BSD',
    numeric_code: '044',
    decimal_digits: 2,
    name: 'Bahamian dollar',
    active: true,
  },
  {
    code: 'BWP',
    numeric_code: '072',
    decimal_digits: 2,
    name: 'Botswana pula',
    active: true,
  },
  {
    code: 'BYN',
    numeric_code: '933',
    decimal_digits: 2,
    name: 'Belarusian ruble',
    active: true,
  },
  {
    code: 'BZD',
    numeric_code: '084',
    decimal_digits: 2,
    name: 'Belize dollar',
    active: true,
  },
  {
    code: 'CAD',
    numeric_code: '124',
    decimal_digits: 2,
    name: 'Canadian dollar',
    active: true,
  },
  {
    code: 'CDF',
    numeric_code: '976',
    decimal_digits: 2,
    name: 'Congolese franc',
    active: true,
  },
  {
    code: 'CHF',
    numeric_code: '756',
    decimal_digits: 2,
    name: 'Swiss franc',
    active: true,
  },
  {
    code: 'CLP',
    numeric_code: '152',
    decimal_digits: 0,
    name: 'Chilean peso',
    active: true,
  },
  {
    code: 'CNY',
    numeric_code: '156',
    decimal_digits: 2,
    name: 'Renminbi (Chinese) yuan',
    active: true,
  },
  {
    code: 'COP',
    numeric_code: '170',
    decimal_digits: 2,
    name: 'Colombian peso',
    active: true,
  },
  {
    code: 'CRC',
    numeric_code: '188',
    decimal_digits: 2,
    name: 'Costa Rican colon',
    active: true,
  },
  {
    code: 'CVE',
    numeric_code: '132',
    decimal_digits: 2,
    name: 'Cape Verdean escudo',
    active: true,
  },
  {
    code: 'CZK',
    numeric_code: '203',
    decimal_digits: 2,
    name: 'Czech koruna',
    active: true,
  },
  {
    code: 'DJF',
    numeric_code: '262',
    decimal_digits: 0,
    name: 'Djiboutian franc',
    active: true,
  },
  {
    code: 'DKK',
    numeric_code: '208',
    decimal_digits: 2,
    name: 'Danish krone',
    active: true,
  },
  {
    code: 'DOP',
    numeric_code: '214',
    decimal_digits: 2,
    name: 'Dominican peso',
    active: true,
  },
  {
    code: 'DZD',
    numeric_code: '012',
    decimal_digits: 2,
    name: 'Algerian dinar',
    active: true,
  },
  {
    code: 'EGP',
    numeric_code: '818',
    decimal_digits: 2,
    name: 'Egyptian pound',
    active: true,
  },
  {
    code: 'ERN',
    numeric_code: '232',
    decimal_digits: 2,
    name: 'Eritrean nakfa',
    active: true,
  },
  {
    code: 'ETB',
    numeric_code: '230',
    decimal_digits: 2,
    name: 'Ethiopian birr',
    active: true,
  },
  {
    code: 'EUR',
    numeric_code: '978',
    decimal_digits: 2,
    name: 'Euro',
    active: true,
  },
  {
    code: 'FJD',
    numeric_code: '242',
    decimal_digits: 2,
    name: 'Fiji dollar',
    active: true,
  },
  {
    code: 'GBP',
    numeric_code: '826',
    decimal_digits: 2,
    name: 'Pound sterling',
    active: true,
  },
  {
    code: 'GEL',
    numeric_code: '981',
    decimal_digits: 2,
    name: 'Georgian lari',
    active: true,
  },
  {
    code: 'GHS',
    numeric_code: '936',
    decimal_digits: 2,
    name: 'Ghanaian cedi',
    active: true,
  },
  {
    code: 'GIP',
    numeric_code: '292',
    decimal_digits: 2,
    name: 'Gibraltar pound',
    active: true,
  },
  {
    code: 'GMD',
    numeric_code: '270',
    decimal_digits: 2,
    name: 'Gambian dalasi',
    active: true,
  },
  {
    code: 'GNF',
    numeric_code: '324',
    decimal_digits: 0,
    name: 'Guinean franc',
    active: true,
  },
  {
    code: 'GTQ',
    numeric_code: '320',
    decimal_digits: 2,
    name: 'Guatemalan quetzal',
    active: true,
  },
  {
    code: 'GYD',
    numeric_code: '328',
    decimal_digits: 2,
    name: 'Guyanese dollar',
    active: true,
  },
  {
    code: 'HKD',
    numeric_code: '344',
    decimal_digits: 2,
    name: 'Hong Kong dollar',
    active: true,
  },
  {
    code: 'HNL',
    numeric_code: '340',
    decimal_digits: 2,
    name: 'Honduran lempira',
    active: true,
  },
  {
    code: 'HRK',
    numeric_code: '191',
    decimal_digits: 2,
    name: 'Croatian kuna',
    active: true,
  },
  {
    code: 'HTG',
    numeric_code: '332',
    decimal_digits: 2,
    name: 'Haitian gourde',
    active: true,
  },
  {
    code: 'HUF',
    numeric_code: '348',
    decimal_digits: 2,
    name: 'Hungarian forint',
    active: true,
  },
  {
    code: 'IDR',
    numeric_code: '360',
    decimal_digits: 2,
    name: 'Indonesian rupiah',
    active: true,
  },
  {
    code: 'ILS',
    numeric_code: '376',
    decimal_digits: 2,
    name: 'Israeli new shekel',
    active: true,
  },
  {
    code: 'INR',
    numeric_code: '356',
    decimal_digits: 2,
    name: 'Indian rupee',
    active: true,
  },
  {
    code: 'IQD',
    numeric_code: '368',
    decimal_digits: 3,
    name: 'Iraqi dinar',
    active: true,
  },
  {
    code: 'IRR',
    numeric_code: '364',
    decimal_digits: 2,
    name: 'Iranian rial',
    active: true,
  },
  {
    code: 'ISK',
    numeric_code: '352',
    decimal_digits: 0,
    name: 'Icelandic króna',
    active: true,
  },
  {
    code: 'JMD',
    numeric_code: '388',
    decimal_digits: 2,
    name: 'Jamaican dollar',
    active: true,
  },
  {
    code: 'JOD',
    numeric_code: '400',
    decimal_digits: 3,
    name: 'Jordanian dinar',
    active: true,
  },
  {
    code: 'JPY',
    numeric_code: '392',
    decimal_digits: 0,
    name: 'Japanese yen',
    active: true,
  },
  {
    code: 'KES',
    numeric_code: '404',
    decimal_digits: 2,
    name: 'Kenyan shilling',
    active: true,
  },
  {
    code: 'KGS',
    numeric_code: '417',
    decimal_digits: 2,
    name: 'Kyrgyzstani som',
    active: true,
  },
  {
    code: 'KHR',
    numeric_code: '116',
    decimal_digits: 2,
    name: 'Cambodian riel',
    active: true,
  },
  {
    code: 'KMF',
    numeric_code: '174',
    decimal_digits: 0,
    name: 'Comoro franc',
    active: true,
  },
  {
    code: 'KRW',
    numeric_code: '410',
    decimal_digits: 0,
    name: 'South Korean won',
    active: true,
  },
  {
    code: 'KWD',
    numeric_code: '414',
    decimal_digits: 3,
    name: 'Kuwaiti dinar',
    active: true,
  },
  {
    code: 'KZT',
    numeric_code: '398',
    decimal_digits: 2,
    name: 'Kazakhstani tenge',
    active: true,
  },
  {
    code: 'LAK',
    numeric_code: '418',
    decimal_digits: 2,
    name: 'Lao kip',
    active: true,
  },
  {
    code: 'LBP',
    numeric_code: '422',
    decimal_digits: 2,
    name: 'Lebanese pound',
    active: true,
  },
  {
    code: 'LKR',
    numeric_code: '144',
    decimal_digits: 2,
    name: 'Sri Lankan rupee',
    active: true,
  },
  {
    code: 'LRD',
    numeric_code: '430',
    decimal_digits: 2,
    name: 'Liberian dollar',
    active: true,
  },
  {
    code: 'LSL',
    numeric_code: '426',
    decimal_digits: 2,
    name: 'Lesotho loti',
    active: true,
  },
  {
    code: 'LYD',
    numeric_code: '434',
    decimal_digits: 3,
    name: 'Libyan dinar',
    active: true,
  },
  {
    code: 'MAD',
    numeric_code: '504',
    decimal_digits: 2,
    name: 'Moroccan dirham',
    active: true,
  },
  {
    code: 'MDL',
    numeric_code: '498',
    decimal_digits: 2,
    name: 'Moldovan leu',
    active: true,
  },
  {
    code: 'MGA',
    numeric_code: '969',
    decimal_digits: 2,
    name: 'Malagasy ariary',
    active: true,
  },
  {
    code: 'MKD',
    numeric_code: '807',
    decimal_digits: 2,
    name: 'Macedonian denar',
    active: true,
  },
  {
    code: 'MMK',
    numeric_code: '104',
    decimal_digits: 2,
    name: 'Myanmar kyat',
    active: true,
  },
  {
    code: 'MNT',
    numeric_code: '496',
    decimal_digits: 2,
    name: 'Mongolian tögrög',
    active: true,
  },
  {
    code: 'MOP',
    numeric_code: '446',
    decimal_digits: 2,
    name: 'Macanese pataca',
    active: true,
  },
  {
    code: 'MRU',
    numeric_code: '929',
    decimal_digits: 2,
    name: 'Mauritanian ouguiya',
    active: true,
  },
  {
    code: 'MUR',
    numeric_code: '480',
    decimal_digits: 2,
    name: 'Mauritian rupee',
    active: true,
  },
  {
    code: 'MVR',
    numeric_code: '462',
    decimal_digits: 2,
    name: 'Maldivian rufiyaa',
    active: true,
  },
  {
    code: 'MWK',
    numeric_code: '454',
    decimal_digits: 2,
    name: 'Malawian kwacha',
    active: true,
  },
  {
    code: 'MXN',
    numeric_code: '484',
    decimal_digits: 2,
    name: 'Mexican peso',
    active: true,
  },
  {
    code: 'MYR',
    numeric_code: '458',
    decimal_digits: 2,
    name: 'Malaysian ringgit',
    active: true,
  },
  {
    code: 'MZN',
    numeric_code: '943',
    decimal_digits: 2,
    name: 'Mozambican metical',
    active: true,
  },
  {
    code: 'NAD',
    numeric_code: '516',
    decimal_digits: 2,
    name: 'Namibian dollar',
    active: true,
  },
  {
    code: 'NGN',
    numeric_code: '566',
    decimal_digits: 2,
    name: 'Nigerian naira',
    active: true,
  },
  {
    code: 'NIO',
    numeric_code: '558',
    decimal_digits: 2,
    name: 'Nicaraguan córdoba',
    active: true,
  },
  {
    code: 'NOK',
    numeric_code: '578',
    decimal_digits: 2,
    name: 'Norwegian krone',
    active: true,
  },
  {
    code: 'NPR',
    numeric_code: '524',
    decimal_digits: 2,
    name: 'Nepalese rupee',
    active: true,
  },
  {
    code: 'NZD',
    numeric_code: '554',
    decimal_digits: 2,
    name: 'New Zealand dollar',
    active: true,
  },
  {
    code: 'OMR',
    numeric_code: '512',
    decimal_digits: 3,
    name: 'Omani rial',
    active: true,
  },
  {
    code: 'PAB',
    numeric_code: '590',
    decimal_digits: 2,
    name: 'Panamanian balboa',
    active: true,
  },
  {
    code: 'PEN',
    numeric_code: '604',
    decimal_digits: 2,
    name: 'Peruvian sol',
    active: true,
  },
  {
    code: 'PGK',
    numeric_code: '598',
    decimal_digits: 2,
    name: 'Papua New Guinean kina',
    active: true,
  },
  {
    code: 'PHP',
    numeric_code: '608',
    decimal_digits: 2,
    name: 'Philippine peso',
    active: true,
  },
  {
    code: 'PKR',
    numeric_code: '586',
    decimal_digits: 2,
    name: 'Pakistani rupee',
    active: true,
  },
  {
    code: 'PLN',
    numeric_code: '985',
    decimal_digits: 2,
    name: 'Polish złoty',
    active: true,
  },
  {
    code: 'PYG',
    numeric_code: '600',
    decimal_digits: 0,
    name: 'Paraguayan guaraní',
    active: true,
  },
  {
    code: 'QAR',
    numeric_code: '634',
    decimal_digits: 2,
    name: 'Qatari riyal',
    active: true,
  },
  {
    code: 'RON',
    numeric_code: '946',
    decimal_digits: 2,
    name: 'Romanian leu',
    active: true,
  },
  {
    code: 'RSD',
    numeric_code: '941',
    decimal_digits: 2,
    name: 'Serbian dinar',
    active: true,
  },
  {
    code: 'RUB',
    numeric_code: '643',
    decimal_digits: 2,
    name: 'Russian ruble',
    active: true,
  },
  {
    code: 'RWF',
    numeric_code: '646',
    decimal_digits: 0,
    name: 'Rwandan franc',
    active: true,
  },
  {
    code: 'SAR',
    numeric_code: '682',
    decimal_digits: 2,
    name: 'Saudi riyal',
    active: true,
  },
  {
    code: 'SBD',
    numeric_code: '090',
    decimal_digits: 2,
    name: 'Solomon Islands dollar',
    active: true,
  },
  {
    code: 'SCR',
    numeric_code: '690',
    decimal_digits: 2,
    name: 'Seychelles rupee',
    active: true,
  },
  {
    code: 'SDG',
    numeric_code: '938',
    decimal_digits: 2,
    name: 'Sudanese pound',
    active: true,
  },
  {
    code: 'SEK',
    numeric_code: '752',
    decimal_digits: 2,
    name: 'Swedish krona/kronor',
    active: true,
  },
  {
    code: 'SGD',
    numeric_code: '702',
    decimal_digits: 2,
    name: 'Singapore dollar',
    active: true,
  },
  {
    code: 'SLE',
    numeric_code: '925',
    decimal_digits: 2,
    name: 'Sierra Leonean leone',
    active: true,
  },
  {
    code: 'SOS',
    numeric_code: '706',
    decimal_digits: 2,
    name: 'Somali shilling',
    active: true,
  },
  {
    code: 'SRD',
    numeric_code: '968',
    decimal_digits: 2,
    name: 'Surinamese dollar',
    active: true,
  },
  {
    code: 'SSP',
    numeric_code: '728',
    decimal_digits: 2,
    name: 'South Sudanese pound',
    active: true,
  },
  {
    code: 'STN',
    numeric_code: '930',
    decimal_digits: 2,
    name: 'São Tomé and Príncipe dobra',
    active: true,
  },
  {
    code: 'SVC',
    numeric_code: '222',
    decimal_digits: 2,
    name: 'Salvadoran colón',
    active: true,
  },
  {
    code: 'SYP',
    numeric_code: '760',
    decimal_digits: 2,
    name: 'Syrian pound',
    active: true,
  },
  {
    code: 'SZL',
    numeric_code: '748',
    decimal_digits: 2,
    name: 'Swazi lilangeni',
    active: true,
  },
  {
    code: 'THB',
    numeric_code: '764',
    decimal_digits: 2,
    name: 'Thai baht',
    active: true,
  },
  {
    code: 'TJS',
    numeric_code: '972',
    decimal_digits: 2,
    name: 'Tajikistani somoni',
    active: true,
  },
  {
    code: 'TMT',
    numeric_code: '934',
    decimal_digits: 2,
    name: 'Turkmenistan manat',
    active: true,
  },
  {
    code: 'TND',
    numeric_code: '788',
    decimal_digits: 3,
    name: 'Tunisian dinar',
    active: true,
  },
  {
    code: 'TOP',
    numeric_code: '776',
    decimal_digits: 2,
    name: 'Tongan paanga',
    active: true,
  },
  {
    code: 'TRY',
    numeric_code: '949',
    decimal_digits: 2,
    name: 'Turkish lira',
    active: true,
  },
  {
    code: 'TTD',
    numeric_code: '780',
    decimal_digits: 2,
    name: 'Trinidad and Tobago dollar',
    active: true,
  },
  {
    code: 'TWD',
    numeric_code: '901',
    decimal_digits: 2,
    name: 'New Taiwan dollar',
    active: true,
  },
  {
    code: 'TZS',
    numeric_code: '834',
    decimal_digits: 2,
    name: 'Tanzanian shilling',
    active: true,
  },
  {
    code: 'UAH',
    numeric_code: '980',
    decimal_digits: 2,
    name: 'Ukrainian hryvnia',
    active: true,
  },
  {
    code: 'UGX',
    numeric_code: '800',
    decimal_digits: 0,
    name: 'Ugandan shilling',
    active: true,
  },
  {
    code: 'USD',
    numeric_code: '840',
    decimal_digits: 2,
    name: 'United States dollar',
    active: true,
  },
  {
    code: 'UYU',
    numeric_code: '858',
    decimal_digits: 2,
    name: 'Uruguayan peso',
    active: true,
  },
  {
    code: 'UZS',
    numeric_code: '860',
    decimal_digits: 2,
    name: 'Uzbekistan som',
    active: true,
  },
  {
    code: 'VES',
    numeric_code: '928',
    decimal_digits: 2,
    name: 'Venezuelan bolívar soberano',
    active: true,
  },
  {
    code: 'VND',
    numeric_code: '704',
    decimal_digits: 0,
    name: 'Vietnamese đồng',
    active: true,
  },
  {
    code: 'VUV',
    numeric_code: '548',
    decimal_digits: 0,
    name: 'Vanuatu vatu',
    active: true,
  },
  {
    code: 'WST',
    numeric_code: '882',
    decimal_digits: 2,
    name: 'Samoan tala',
    active: true,
  },
  {
    code: 'XAF',
    numeric_code: '950',
    decimal_digits: 0,
    name: 'CFA franc BEAC',
    active: true,
  },
  {
    code: 'XAU',
    numeric_code: '959',
    decimal_digits: 6,
    name: 'Gold (one troy ounce)',
    active: true,
  },
  {
    code: 'XCD',
    numeric_code: '951',
    decimal_digits: 2,
    name: 'East Caribbean dollar',
    active: true,
  },
  {
    code: 'XDR',
    numeric_code: '960',
    decimal_digits: 2,
    name: 'Special drawing rights  International Moneta',
    active: true,
  },
  {
    code: 'XOF',
    numeric_code: '952',
    decimal_digits: 0,
    name: 'CFA franc BCEAO',
    active: true,
  },
  {
    code: 'XPF',
    numeric_code: '953',
    decimal_digits: 0,
    name: 'CFP franc (franc Pacifique)',
    active: true,
  },
  {
    code: 'YER',
    numeric_code: '886',
    decimal_digits: 2,
    name: 'Yemeni rial',
    active: true,
  },
  {
    code: 'ZAR',
    numeric_code: '710',
    decimal_digits: 2,
    name: 'South African rand',
    active: true,
  },
  {
    code: 'ZMW',
    numeric_code: '967',
    decimal_digits: 2,
    name: 'Zambian kwacha',
    active: true,
  },
  {
    code: 'ZWL',
    numeric_code: '932',
    decimal_digits: 2,
    name: 'Zimbabwean dollar',
    active: true,
  },
];

export { mockCountriesList };

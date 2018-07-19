interface PortfolioPosition {
    assetId: string;
    assetName: string;
    quantity: number;
    price: number;
    currency: 'GBP' | 'EUR' | 'USD';
    dailyGain: number;
}

interface PortfolioPositionsMap {
    [portfolioId: string]: PortfolioPosition[];
}

export const portfolioPositions: PortfolioPositionsMap = {
    '675a0572-bae8-437b-94c8-21704abd23c3': [
        {
            assetId: 'CASH',
            assetName: 'Cash',
            quantity: 10000,
            price: 1,
            currency: 'GBP',
            dailyGain: -0.0002
        },
        {
            assetId: 'GOOG',
            assetName: 'Alphabet Inc.',
            quantity: 1000,
            price: 1056.86,
            currency: 'GBP',
            dailyGain: 0.0256
        },
        {
            assetId: 'BARC',
            assetName: 'Barclays PLC',
            quantity: 100,
            price: 186.45,
            currency: 'GBP',
            dailyGain: -0.0053
        },
        {
            assetId: 'RBS',
            assetName: 'Royal Bank of Scotland Group plc',
            quantity: 500,
            price: 268.7,
            currency: 'GBP',
            dailyGain: 0.0113
        },
        {
            assetId: 'TSCO',
            assetName: 'Tesco PLC',
            quantity: 250,
            price: 195.0,
            currency: 'GBP',
            dailyGain: 0.0215
        }
    ],
    'a21d91d3-6f63-470d-aad9-5744174b097d': [
        {
            assetId: 'CASH',
            assetName: 'Cash',
            quantity: 10000,
            price: 1,
            currency: 'GBP',
            dailyGain: -0.0002
        },
        {
            assetId: 'GOOG',
            assetName: 'Alphabet Inc.',
            quantity: 1000,
            price: 1056.86,
            currency: 'GBP',
            dailyGain: 0.0256
        },
        {
            assetId: 'VOD',
            assetName: 'Vodafone Group plc',
            quantity: 350,
            price: 225.01,
            currency: 'GBP',
            dailyGain: 0.0041
        },
        {
            assetId: 'TW',
            assetName: 'Taylor Wimpey plc',
            quantity: 100,
            price: 193.53,
            currency: 'GBP',
            dailyGain: 0.0073
        },
        {
            assetId: 'TSCO',
            assetName: 'Tesco PLC',
            quantity: 250,
            price: 195.0,
            currency: 'GBP',
            dailyGain: 0.0215
        }
    ],
    'e27cda8b-cab3-4989-a43e-e1dbb7478be0': [
        {
            assetId: 'CASH',
            assetName: 'Cash',
            quantity: 10000,
            price: 1,
            currency: 'GBP',
            dailyGain: -0.0002
        },
        {
            assetId: 'TW',
            assetName: 'Taylor Wimpey plc',
            quantity: 50,
            price: 193.53,
            currency: 'GBP',
            dailyGain: 0.0073
        },
        {
            assetId: 'BARC',
            assetName: 'Barclays PLC',
            quantity: 100,
            price: 186.45,
            currency: 'GBP',
            dailyGain: -0.0053
        },
        {
            assetId: 'RBS',
            assetName: 'Royal Bank of Scotland Group plc',
            quantity: 300,
            price: 268.7,
            currency: 'GBP',
            dailyGain: 0.0113
        },
        {
            assetId: 'TSCO',
            assetName: 'Tesco PLC',
            quantity: 250,
            price: 195.0,
            currency: 'GBP',
            dailyGain: 0.0215
        }
    ],
    'e629ea7c-20fc-40e7-80f9-d6c50382db7b': [
        {
            assetId: 'CASH',
            assetName: 'Cash',
            quantity: 10000,
            price: 1,
            currency: 'GBP',
            dailyGain: -0.0002
        },
        {
            assetId: 'GOOG',
            assetName: 'Alphabet Inc.',
            quantity: 1000,
            price: 1056.86,
            currency: 'GBP',
            dailyGain: 0.0256
        },
        {
            assetId: 'RBS',
            assetName: 'Royal Bank of Scotland Group plc',
            quantity: 500,
            price: 268.7,
            currency: 'GBP',
            dailyGain: 0.0113
        },
        {
            assetId: 'TSCO',
            assetName: 'Tesco PLC',
            quantity: 250,
            price: 195.0,
            currency: 'GBP',
            dailyGain: 0.0215
        }
    ]
};

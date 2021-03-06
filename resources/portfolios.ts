interface Portfolio {
    id: string;
    name: string;
    riskLevel: number;
    currency: 'GBP' | 'EUR' | 'USD';
    currentMarketValue: number;
}

interface PortfoliosPerUser {
    [userId: string]: Portfolio[];
}

export const portfoliosPerUser: PortfoliosPerUser = {
    '200fda4d-69d1-40ce-9122-427d0653a7fc': [
        {
            id: 'e629ea7c-20fc-40e7-80f9-d6c50382db7b',
            name: 'Retirement Fund',
            riskLevel: 3,
            currency: 'GBP',
            currentMarketValue: 150000
        },
        {
            id: 'e27cda8b-cab3-4989-a43e-e1dbb7478be0',
            name: 'Rainy Day Fund',
            riskLevel: 4,
            currency: 'USD',
            currentMarketValue: 50000
        },
        {
            id: 'a21d91d3-6f63-470d-aad9-5744174b097d',
            name: "Jeremy's ISA",
            riskLevel: 3,
            currency: 'GBP',
            currentMarketValue: 10000
        },
        {
            id: '675a0572-bae8-437b-94c8-21704abd23c3',
            name: 'High Risk Fund',
            riskLevel: 7,
            currency: 'GBP',
            currentMarketValue: 20000
        }
    ]
};

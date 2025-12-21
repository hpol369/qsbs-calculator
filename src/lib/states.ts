export type ConformityStatus = 'full' | 'none' | 'no_tax';

export interface StateInfo {
  code: string;
  name: string;
  conformity: ConformityStatus;
  topRate: number;
  notes: string;
}

export const states: StateInfo[] = [
  // NO CONFORMITY - Do not recognize QSBS exclusion
  { code: 'AL', name: 'Alabama', conformity: 'none', topRate: 0.05, notes: 'Does not conform to federal QSBS exclusion.' },
  { code: 'CA', name: 'California', conformity: 'none', topRate: 0.133, notes: 'Largest startup state. Does not recognize QSBS. Full gain taxable at up to 13.3%.' },
  { code: 'MS', name: 'Mississippi', conformity: 'none', topRate: 0.05, notes: 'Does not conform to federal QSBS exclusion.' },
  { code: 'PA', name: 'Pennsylvania', conformity: 'none', topRate: 0.0307, notes: 'Does not conform to federal QSBS exclusion.' },

  // NO STATE INCOME TAX
  { code: 'AK', name: 'Alaska', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },
  { code: 'FL', name: 'Florida', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },
  { code: 'NV', name: 'Nevada', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },
  { code: 'NH', name: 'New Hampshire', conformity: 'no_tax', topRate: 0, notes: 'No tax on earned income or capital gains.' },
  { code: 'SD', name: 'South Dakota', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },
  { code: 'TN', name: 'Tennessee', conformity: 'no_tax', topRate: 0, notes: 'No state income tax on wages or capital gains.' },
  { code: 'TX', name: 'Texas', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },
  { code: 'WA', name: 'Washington', conformity: 'no_tax', topRate: 0, notes: 'No state income tax (7% capital gains tax on gains over $270K applies separately).' },
  { code: 'WY', name: 'Wyoming', conformity: 'no_tax', topRate: 0, notes: 'No state income tax.' },

  // FULL CONFORMITY - Recognize federal QSBS exclusion
  { code: 'AZ', name: 'Arizona', conformity: 'full', topRate: 0.025, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'AR', name: 'Arkansas', conformity: 'full', topRate: 0.047, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'CO', name: 'Colorado', conformity: 'full', topRate: 0.044, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'CT', name: 'Connecticut', conformity: 'full', topRate: 0.0699, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'DE', name: 'Delaware', conformity: 'full', topRate: 0.066, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'DC', name: 'District of Columbia', conformity: 'full', topRate: 0.1075, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'GA', name: 'Georgia', conformity: 'full', topRate: 0.0549, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'HI', name: 'Hawaii', conformity: 'full', topRate: 0.11, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'ID', name: 'Idaho', conformity: 'full', topRate: 0.058, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'IL', name: 'Illinois', conformity: 'full', topRate: 0.0495, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'IN', name: 'Indiana', conformity: 'full', topRate: 0.0305, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'IA', name: 'Iowa', conformity: 'full', topRate: 0.057, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'KS', name: 'Kansas', conformity: 'full', topRate: 0.057, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'KY', name: 'Kentucky', conformity: 'full', topRate: 0.04, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'LA', name: 'Louisiana', conformity: 'full', topRate: 0.0425, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'ME', name: 'Maine', conformity: 'full', topRate: 0.0715, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MD', name: 'Maryland', conformity: 'full', topRate: 0.0575, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MA', name: 'Massachusetts', conformity: 'full', topRate: 0.09, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MI', name: 'Michigan', conformity: 'full', topRate: 0.0425, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MN', name: 'Minnesota', conformity: 'full', topRate: 0.0985, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MO', name: 'Missouri', conformity: 'full', topRate: 0.048, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'MT', name: 'Montana', conformity: 'full', topRate: 0.059, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'NE', name: 'Nebraska', conformity: 'full', topRate: 0.0584, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'NJ', name: 'New Jersey', conformity: 'full', topRate: 0.1075, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'NM', name: 'New Mexico', conformity: 'full', topRate: 0.059, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'NY', name: 'New York', conformity: 'full', topRate: 0.109, notes: 'Conforms to federal QSBS exclusion. NYC residents may have additional local tax.' },
  { code: 'NC', name: 'North Carolina', conformity: 'full', topRate: 0.0475, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'ND', name: 'North Dakota', conformity: 'full', topRate: 0.0225, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'OH', name: 'Ohio', conformity: 'full', topRate: 0.035, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'OK', name: 'Oklahoma', conformity: 'full', topRate: 0.0475, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'OR', name: 'Oregon', conformity: 'full', topRate: 0.099, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'RI', name: 'Rhode Island', conformity: 'full', topRate: 0.0599, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'SC', name: 'South Carolina', conformity: 'full', topRate: 0.064, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'UT', name: 'Utah', conformity: 'full', topRate: 0.0465, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'VT', name: 'Vermont', conformity: 'full', topRate: 0.0875, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'VA', name: 'Virginia', conformity: 'full', topRate: 0.0575, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'WV', name: 'West Virginia', conformity: 'full', topRate: 0.052, notes: 'Conforms to federal QSBS exclusion.' },
  { code: 'WI', name: 'Wisconsin', conformity: 'full', topRate: 0.0765, notes: 'Conforms to federal QSBS exclusion.' },
];

// Sort states alphabetically by name for dropdown
export const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name));

export function getStateByCode(code: string): StateInfo | undefined {
  return states.find(s => s.code === code);
}

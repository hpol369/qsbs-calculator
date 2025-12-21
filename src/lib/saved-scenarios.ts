import type { CalculatorInputs, CalculationResults } from './calculations';

export interface SavedScenario {
  id: string;
  name: string;
  createdAt: string;
  inputs: CalculatorInputs;
  results: CalculationResults;
}

const STORAGE_KEY = 'qsbs_saved_scenarios';
const MAX_SCENARIOS = 10;

// Convert Date objects to ISO strings for storage
function serializeInputs(inputs: CalculatorInputs): Record<string, unknown> {
  return {
    ...inputs,
    grantDate: inputs.grantDate?.toISOString() || null,
    exerciseDate: inputs.exerciseDate?.toISOString() || null,
    vestingDate: inputs.vestingDate?.toISOString() || null,
    purchaseDate: inputs.purchaseDate?.toISOString() || null,
    conversionDate: inputs.conversionDate?.toISOString() || null,
    saleDate: inputs.saleDate?.toISOString() || null,
  };
}

// Convert ISO strings back to Date objects
function deserializeInputs(data: Record<string, unknown>): CalculatorInputs {
  return {
    ...data,
    grantDate: data.grantDate ? new Date(data.grantDate as string) : null,
    exerciseDate: data.exerciseDate ? new Date(data.exerciseDate as string) : null,
    vestingDate: data.vestingDate ? new Date(data.vestingDate as string) : null,
    purchaseDate: data.purchaseDate ? new Date(data.purchaseDate as string) : null,
    conversionDate: data.conversionDate ? new Date(data.conversionDate as string) : null,
    saleDate: data.saleDate ? new Date(data.saleDate as string) : null,
  } as CalculatorInputs;
}

// Serialize results for storage (handle Date objects in holdingPeriod)
function serializeResults(results: CalculationResults): Record<string, unknown> {
  return {
    ...results,
    holdingPeriod: {
      ...results.holdingPeriod,
      startDate: results.holdingPeriod.startDate?.toISOString() || null,
      qualificationDate: results.holdingPeriod.qualificationDate?.toISOString() || null,
    },
  };
}

// Deserialize results from storage
function deserializeResults(data: Record<string, unknown>): CalculationResults {
  const holdingPeriod = data.holdingPeriod as Record<string, unknown>;
  return {
    ...data,
    holdingPeriod: {
      ...holdingPeriod,
      startDate: holdingPeriod.startDate ? new Date(holdingPeriod.startDate as string) : null,
      qualificationDate: holdingPeriod.qualificationDate ? new Date(holdingPeriod.qualificationDate as string) : null,
    },
  } as CalculationResults;
}

export function getSavedScenarios(): SavedScenario[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored) as Array<{
      id: string;
      name: string;
      createdAt: string;
      inputs: Record<string, unknown>;
      results: Record<string, unknown>;
    }>;

    return parsed.map((item) => ({
      id: item.id,
      name: item.name,
      createdAt: item.createdAt,
      inputs: deserializeInputs(item.inputs),
      results: deserializeResults(item.results),
    }));
  } catch {
    return [];
  }
}

export function saveScenario(
  name: string,
  inputs: CalculatorInputs,
  results: CalculationResults
): SavedScenario {
  const scenarios = getSavedScenarios();

  const newScenario: SavedScenario = {
    id: `scenario_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    createdAt: new Date().toISOString(),
    inputs,
    results,
  };

  // Add to beginning, limit to max
  const updated = [newScenario, ...scenarios].slice(0, MAX_SCENARIOS);

  // Serialize for storage
  const toStore = updated.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.createdAt,
    inputs: serializeInputs(s.inputs),
    results: serializeResults(s.results),
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));

  return newScenario;
}

export function deleteScenario(id: string): void {
  const scenarios = getSavedScenarios();
  const updated = scenarios.filter((s) => s.id !== id);

  const toStore = updated.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.createdAt,
    inputs: serializeInputs(s.inputs),
    results: serializeResults(s.results),
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
}

export function renameScenario(id: string, newName: string): void {
  const scenarios = getSavedScenarios();
  const updated = scenarios.map((s) =>
    s.id === id ? { ...s, name: newName } : s
  );

  const toStore = updated.map((s) => ({
    id: s.id,
    name: s.name,
    createdAt: s.createdAt,
    inputs: serializeInputs(s.inputs),
    results: serializeResults(s.results),
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
}

export function clearAllScenarios(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// Generate a default name based on inputs
export function generateScenarioName(inputs: CalculatorInputs, results: CalculationResults): string {
  const stockTypeNames: Record<string, string> = {
    iso: 'ISO',
    nso: 'NSO',
    common_stock: 'Common Stock',
    restricted_stock: 'Restricted Stock',
    rsu: 'RSU',
    safe_conversion: 'SAFE',
    gift: 'Gift',
    inheritance: 'Inheritance',
  };

  const stockLabel = stockTypeNames[inputs.stockType] || 'Stock';
  const savings = results.totalSavings;

  // Format savings for name
  let savingsLabel: string;
  if (savings >= 1000000) {
    savingsLabel = `$${(savings / 1000000).toFixed(1)}M`;
  } else if (savings >= 1000) {
    savingsLabel = `$${(savings / 1000).toFixed(0)}K`;
  } else {
    savingsLabel = `$${savings.toFixed(0)}`;
  }

  return `${stockLabel} - ${savingsLabel} savings`;
}

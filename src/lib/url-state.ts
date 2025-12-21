import type { CalculatorInputs, StockType, AcquisitionMethod } from './calculations';

interface SerializedState {
  st: StockType;
  am: AcquisitionMethod;
  e83b: boolean | null;
  gd: string | null;
  ed: string | null;
  vd: string | null;
  pd: string | null;
  cd: string | null;
  sd: string;
  cb: number;
  ev: number;
  sc: string;
}

/**
 * Encodes calculator inputs into a URL-safe string
 */
export function encodeState(inputs: CalculatorInputs): string {
  const state: SerializedState = {
    st: inputs.stockType,
    am: inputs.acquisitionMethod,
    e83b: inputs.election83b,
    gd: inputs.grantDate?.toISOString() || null,
    ed: inputs.exerciseDate?.toISOString() || null,
    vd: inputs.vestingDate?.toISOString() || null,
    pd: inputs.purchaseDate?.toISOString() || null,
    cd: inputs.conversionDate?.toISOString() || null,
    sd: inputs.saleDate.toISOString(),
    cb: inputs.costBasis,
    ev: inputs.expectedValue,
    sc: inputs.stateCode
  };

  try {
    const json = JSON.stringify(state);
    // Use base64url encoding (URL-safe)
    const encoded = btoa(json)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    return encoded;
  } catch {
    return '';
  }
}

/**
 * Decodes a URL state string back into calculator inputs
 */
export function decodeState(encoded: string): CalculatorInputs | null {
  try {
    // Restore base64 padding and characters
    let base64 = encoded
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }

    const json = atob(base64);
    const state: SerializedState = JSON.parse(json);

    return {
      stockType: state.st,
      acquisitionMethod: state.am,
      election83b: state.e83b,
      grantDate: state.gd ? new Date(state.gd) : null,
      exerciseDate: state.ed ? new Date(state.ed) : null,
      vestingDate: state.vd ? new Date(state.vd) : null,
      purchaseDate: state.pd ? new Date(state.pd) : null,
      conversionDate: state.cd ? new Date(state.cd) : null,
      saleDate: new Date(state.sd),
      costBasis: state.cb,
      expectedValue: state.ev,
      stateCode: state.sc
    };
  } catch {
    return null;
  }
}

/**
 * Generates a shareable URL for the current results
 */
export function generateShareableUrl(inputs: CalculatorInputs): string {
  const encoded = encodeState(inputs);
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${window.location.pathname}?s=${encoded}`;
  }
  return `?s=${encoded}`;
}

/**
 * Copies text to clipboard and returns success status
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

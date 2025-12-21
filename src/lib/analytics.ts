// Analytics events for GA4 tracking
// These fire custom events that can be captured by Google Analytics 4

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Check if gtag is available
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

// Generic event tracking
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!isGtagAvailable()) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, params);
    }
    return;
  }

  window.gtag!('event', eventName, params);
}

// Calculator Events
export const CalculatorEvents = {
  // Form interactions
  formStart: () =>
    trackEvent('calculator_form_start', {
      event_category: 'calculator',
      event_label: 'form_started',
    }),

  stockTypeSelected: (stockType: string) =>
    trackEvent('stock_type_selected', {
      event_category: 'calculator',
      stock_type: stockType,
    }),

  stateSelected: (stateCode: string) =>
    trackEvent('state_selected', {
      event_category: 'calculator',
      state_code: stateCode,
    }),

  // Calculation events
  calculationCompleted: (params: {
    stockType: string;
    stateCode: string;
    isQualified: boolean;
    totalSavings: number;
    federalSavings: number;
    stateSavings: number;
  }) =>
    trackEvent('calculation_completed', {
      event_category: 'calculator',
      stock_type: params.stockType,
      state_code: params.stateCode,
      is_qualified: params.isQualified,
      total_savings: params.totalSavings,
      federal_savings: params.federalSavings,
      state_savings: params.stateSavings,
    }),

  // Result interactions
  resultCopied: () =>
    trackEvent('result_link_copied', {
      event_category: 'engagement',
      event_label: 'share_link',
    }),

  pdfDownloaded: () =>
    trackEvent('pdf_downloaded', {
      event_category: 'engagement',
      event_label: 'results_pdf',
    }),

  calculatorReset: () =>
    trackEvent('calculator_reset', {
      event_category: 'calculator',
    }),

  // Scenario interactions
  scenarioComparisonOpened: () =>
    trackEvent('scenario_comparison_opened', {
      event_category: 'engagement',
    }),

  scenarioAdded: (scenarioType: string) =>
    trackEvent('scenario_added', {
      event_category: 'engagement',
      scenario_type: scenarioType,
    }),

  // Saved scenarios
  scenarioSaved: () =>
    trackEvent('scenario_saved', {
      event_category: 'engagement',
      event_label: 'local_storage',
    }),

  scenarioLoaded: () =>
    trackEvent('scenario_loaded', {
      event_category: 'engagement',
      event_label: 'local_storage',
    }),

  // Content engagement
  learnMoreClicked: (topic: string) =>
    trackEvent('learn_more_clicked', {
      event_category: 'content',
      topic: topic,
    }),

  externalLinkClicked: (destination: string) =>
    trackEvent('external_link_clicked', {
      event_category: 'outbound',
      destination: destination,
    }),

  // Validation errors
  validationError: (field: string) =>
    trackEvent('validation_error', {
      event_category: 'calculator',
      field: field,
    }),
};

// Page view tracking (for SPAs or custom tracking)
export function trackPageView(path: string, title?: string): void {
  if (!isGtagAvailable()) return;

  window.gtag!('config', process.env.NEXT_PUBLIC_GA_ID || '', {
    page_path: path,
    page_title: title,
  });
}

// Conversion tracking for key actions
export const ConversionEvents = {
  // Primary conversion: completed calculation with significant savings
  highValueCalculation: (savings: number) => {
    if (savings >= 100000) {
      trackEvent('high_value_calculation', {
        event_category: 'conversion',
        value: savings,
        currency: 'USD',
      });
    }
  },

  // User shared results
  resultsShared: () =>
    trackEvent('results_shared', {
      event_category: 'conversion',
    }),

  // User saved multiple scenarios (engaged user)
  engagedUser: (scenarioCount: number) => {
    if (scenarioCount >= 3) {
      trackEvent('engaged_user', {
        event_category: 'conversion',
        scenario_count: scenarioCount,
      });
    }
  },
};

// User timing for performance tracking
export function trackTiming(
  category: string,
  variable: string,
  value: number,
  label?: string
): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'timing_complete', {
    event_category: category,
    name: variable,
    value: Math.round(value),
    event_label: label,
  });
}

// Track calculation time
export function trackCalculationTime(startTime: number): void {
  const duration = performance.now() - startTime;
  trackTiming('calculator', 'calculation_time', duration, 'full_calculation');
}

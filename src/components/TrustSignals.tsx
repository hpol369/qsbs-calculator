'use client';

interface LastUpdatedProps {
  date: string; // ISO date string or readable date
  className?: string;
}

export function LastUpdated({ date, className = '' }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={`flex items-center gap-2 text-sm text-gray-500 ${className}`}>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Last updated: {formattedDate}</span>
    </div>
  );
}

interface IRCCitationProps {
  section: string;
  title: string;
  href?: string;
  className?: string;
}

export function IRCCitation({ section, title, href, className = '' }: IRCCitationProps) {
  const defaultHref = `https://www.law.cornell.edu/uscode/text/26/${section.replace('§', '')}`;
  const linkHref = href || defaultHref;

  return (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline ${className}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <span>IRC {section} — {title}</span>
    </a>
  );
}

interface SourceCitationProps {
  source: string;
  href?: string;
  className?: string;
}

export function SourceCitation({ source, href, className = '' }: SourceCitationProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 ${className}`}
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span>Source: {source}</span>
      </a>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs text-gray-500 ${className}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span>Source: {source}</span>
    </div>
  );
}

interface TrustBadgeProps {
  type: 'verified' | 'official' | 'updated';
  text: string;
  className?: string;
}

export function TrustBadge({ type, text, className = '' }: TrustBadgeProps) {
  const styles = {
    verified: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    official: 'bg-blue-100 text-blue-800 border-blue-200',
    updated: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const icons = {
    verified: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    official: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    updated: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${styles[type]} ${className}`}
    >
      {icons[type]}
      <span>{text}</span>
    </div>
  );
}

// IRC section links for common citations
export const IRCLinks = {
  '1202': 'https://www.law.cornell.edu/uscode/text/26/1202',
  '1202a': 'https://www.law.cornell.edu/uscode/text/26/1202#a',
  '1202b': 'https://www.law.cornell.edu/uscode/text/26/1202#b',
  '1202c': 'https://www.law.cornell.edu/uscode/text/26/1202#c',
  '1202e': 'https://www.law.cornell.edu/uscode/text/26/1202#e',
  '1045': 'https://www.law.cornell.edu/uscode/text/26/1045',
  '83b': 'https://www.law.cornell.edu/uscode/text/26/83#b',
};

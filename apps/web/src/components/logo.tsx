import type * as React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Inline BoilerBear mark. Renders the cocoa variant on light surfaces and the
 * cream variant on dark surfaces via `dark:` Tailwind classes — no flash, no
 * extra requests. Source of truth for the artwork is
 * `apps/web/public/brand/mark.svg`; keep them in sync.
 */
export function Logo({ size = 28, className }: LogoProps): React.JSX.Element {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={`block dark:hidden ${className ?? ''}`}
        aria-hidden="true"
      >
        <circle cx="72" cy="44" r="30" fill="#2A1F1A" />
        <circle cx="184" cy="44" r="30" fill="#2A1F1A" />
        <circle cx="72" cy="44" r="12" fill="#F5A524" />
        <circle cx="184" cy="44" r="12" fill="#F5A524" />
        <rect x="32" y="40" width="192" height="184" rx="44" ry="44" fill="#2A1F1A" />
        <circle cx="98" cy="118" r="9" fill="#FAF6EE" />
        <circle cx="158" cy="118" r="9" fill="#FAF6EE" />
        <path
          d="M104 162 L124 176 L104 190"
          fill="none"
          stroke="#F5A524"
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="138" y="170" width="22" height="14" rx="4" fill="#5EE2C5" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={`hidden dark:block ${className ?? ''}`}
        aria-hidden="true"
      >
        <circle cx="72" cy="44" r="30" fill="#FAF6EE" />
        <circle cx="184" cy="44" r="30" fill="#FAF6EE" />
        <circle cx="72" cy="44" r="12" fill="#F5A524" />
        <circle cx="184" cy="44" r="12" fill="#F5A524" />
        <rect x="32" y="40" width="192" height="184" rx="44" ry="44" fill="#FAF6EE" />
        <circle cx="98" cy="118" r="9" fill="#2A1F1A" />
        <circle cx="158" cy="118" r="9" fill="#2A1F1A" />
        <path
          d="M104 162 L124 176 L104 190"
          fill="none"
          stroke="#2A1F1A"
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="138" y="170" width="22" height="14" rx="4" fill="#5EE2C5" />
      </svg>
    </>
  );
}

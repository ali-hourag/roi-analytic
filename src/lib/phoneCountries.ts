/**
 * Countries for phone prefix dropdown (flag + dial code).
 * Order: Spain, Netherlands, UAE, UK, USA, France, Portugal, Italy, Germany, Belgium, Luxembourg, Switzerland, Sweden, Austria.
 */
export const PHONE_COUNTRIES = [
  { code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { code: "US", dialCode: "+1", flag: "🇺🇸" },
  { code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { code: "LU", dialCode: "+352", flag: "🇱🇺" },
  { code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { code: "AT", dialCode: "+43", flag: "🇦🇹" },
] as const;

export type PhoneCountryCode = (typeof PHONE_COUNTRIES)[number]["code"];

export const PHONE_COUNTRY_CODES = PHONE_COUNTRIES.map((c) => c.code);

export const getDialCodeByCode = (code: string): string =>
  PHONE_COUNTRIES.find((c) => c.code === code)?.dialCode ?? "+34";

import CookieConsent from "react-cookie-consent";
import { Link } from "react-router";

/**
 * GDPR-compliant cookie consent banner.
 *
 * Displays at the bottom of the page using `react-cookie-consent`.
 * Allows users to accept or decline non-essential cookies.
 * Includes a link to the Privacy Policy page.
 */
const CookieCons = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="cookie_consent"
      expires={365}
      disableStyles
      containerClasses="sticky bottom-0 w-full space-y-2 border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-4 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
      contentClasses="mx-auto flex w-full max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between"
      buttonWrapperClasses="flex shrink-0 max-w-5xl mx-auto flex-col gap-2 sm:flex-row"
      buttonClasses="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
      declineButtonClasses="rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
    >
      <div className="space-y-1 text-sm leading-relaxed">
        <p className="text-base font-semibold">Cookie preferences</p>
        <p className="text-slate-200">
          We use essential cookies for core functionality and optional analytics
          cookies to improve the app. Accepting enables analytics; declining
          keeps only essential cookies. Read the privacy policy for details.
          <Link
            to="/privacy"
            className="ml-2 text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Privacy policy
          </Link>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieCons;

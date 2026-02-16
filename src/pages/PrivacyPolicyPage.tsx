export const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 text-slate-100">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-white md:text-3xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-300">Last updated: 2026-02-16</p>
      </div>

      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold text-white">Who we are</h2>
        <p className="text-sm text-slate-200">
          Project: Tower of Hanoi
          <br />
          Author: Roman Karbivskyi
          <br />
          Contact: vt231_krp@student.ztu.edu.ua
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold text-white">Data we collect</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>Cookie consent preference (essential)</li>
          <li>Optional analytics data if enabled</li>
        </ul>
        <p className="text-sm text-slate-200">
          We do not require personal data to use the app.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold text-white">
          Cookies and consent
        </h2>
        <p className="text-sm text-slate-200">
          We use cookies for essential functionality and optional analytics only
          if you accept. You can withdraw consent by clearing cookies.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold text-white">
          Usage and limitations
        </h2>
        <p className="text-sm text-slate-200">
          The app is provided for educational use. Use at your own risk and do
          not use the app for illegal or harmful purposes.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold text-white">Your rights</h2>
        <p className="text-sm text-slate-200">
          You can request access, correction, or deletion of data and withdraw
          consent at any time.
        </p>
      </section>
    </div>
  );
};

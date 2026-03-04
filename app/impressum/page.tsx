import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 py-24 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Simple back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

        {/* Legal content provided by eRecht24 */}
        <div className="space-y-8 text-sm leading-relaxed text-neutral-400">
          <section>
            <p>
              Oleg Gromov
              <br />
              Heerstra&szlig;e 282
              <br />
              13595 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
            <p>
              Telefon: +49 152 08974152
              <br />
              E-Mail: rekops13@gmail.com
            </p>
          </section>

          {/* Source attribution as required by eRecht24 */}
          <section className="pt-8 border-t border-white/10 mt-12 text-xs text-neutral-500">
            <p>
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de/impressum-generator.html"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                e-recht24.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

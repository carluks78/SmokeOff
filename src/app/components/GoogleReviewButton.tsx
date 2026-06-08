import { motion } from "motion/react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CfKPIfcLn-uGEBM/review";

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function GoogleReviewButton() {
  return (
    <motion.a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
      aria-label="Laisser un avis Google pour SmokeOff Évreux"
    >
      <GoogleLogo />
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC05">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500 font-medium">Donnez votre avis</span>
      </div>
    </motion.a>
  );
}

export function GoogleReviewSection() {
  return (
    <section className="py-14 px-4 lg:px-8" style={{ backgroundColor: "#F8FFFE" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#00C9A7" }}>Vos avis comptent</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F3A] mb-3">
          Vous avez arrêté de fumer grâce à SmokeOff ?
        </h2>
        <p className="text-gray-500 mb-7">
          Partagez votre expérience sur Google et aidez d'autres fumeurs à franchir le pas. Chaque avis compte !
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <GoogleReviewButton />
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-100">
            <div className="text-3xl font-bold text-[#0A1F3A]">5.0</div>
            <div>
              <div className="flex items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBC05">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-medium">89 avis Google vérifiés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

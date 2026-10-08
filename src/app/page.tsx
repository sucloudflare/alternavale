import Image from "next/image";
import { Heart, Instagram, ArrowRight, Hash, Crown } from "lucide-react";
import {
  Sparkle,
  SparkleSmall,
  SiTiktok,
  SiX,
  SiGoogledrive,
} from "@/components/alternavale/icons";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type LinkItem = {
  title: string;
  sub: string;
  href: string;
  icon: React.ReactNode;
  titleClassName?: string;
};

const LINKS: LinkItem[] = [
  {
    title: "AJUDE O ROLÊ!",
    sub: "Apoie a nossa comunidade!",
    href: "#",
    icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-neon" strokeWidth={2.4} />,
    titleClassName: "text-periwinkle",
  },
  {
    title: "INSTAGRAM",
    sub: "Nos siga no Instagram!",
    href: "https://instagram.com/alternavale",
    icon: (
      <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-neon" strokeWidth={2.4} />
    ),
  },
  {
    title: "TWITTER/X",
    sub: "Acompanhe no X!",
    href: "https://x.com/AlternaVale",
    icon: <SiX className="h-6 w-6 sm:h-8 sm:w-8 text-neon" />,
  },
  {
    title: "TIKTOK",
    sub: "Vem pro nosso TikTok!",
    href: "https://tiktok.com/@alternavale",
    icon: <SiTiktok className="h-6 w-6 sm:h-8 sm:w-8 text-neon" />,
  },
  {
    title: "ALTERNAVALE #2 – DRIVE",
    sub: "Arquivos e materiais!",
    href: "https://drive.google.com",
    icon: <SiGoogledrive className="h-6 w-6 sm:h-8 sm:w-8 text-neon" />,
  },
  {
    title: "ALTERNAVALE #1 – DRIVE",
    sub: "Arquivos e materiais!",
    href: "https://drive.google.com",
    icon: <SiGoogledrive className="h-6 w-6 sm:h-8 sm:w-8 text-neon" />,
  },
];

const SOCIALS = [
  { label: "TikTok", href: "https://tiktok.com/@alternavale", icon: <SiTiktok className="h-[18px] w-[18px] sm:h-5 sm:w-5" /> },
  { label: "Instagram", href: "https://instagram.com/alternavale", icon: <Instagram className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.4} /> },
  { label: "X", href: "https://x.com/AlternaVale", icon: <SiX className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /> },
];

const FOOTER_ROW_1 = ["Cookie Preferences", "Report", "Privacy"];
const FOOTER_ROW_2 = ["Explore", "About this account"];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black">
      {/* ============================ BACKGROUND ============================ */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <Image
          src="/images/bg-texture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="fade-mask-bottom object-cover object-top opacity-65"
        />
        {/* dark vignette keeping the center black like the reference */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_64%_at_50%_40%,rgba(0,0,0,0.78),rgba(0,0,0,0.3)_60%,transparent_88%)]" />
        {/* soft crimson aura behind the hero */}
        <div className="absolute inset-x-0 top-[6%] h-[48%] bg-[radial-gradient(ellipse_55%_60%_at_50%_42%,rgba(255,45,85,0.12),transparent_70%)]" />
        {/* subtle red mist rising from the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#3d0612]/55 via-[#1a0207]/35 to-transparent" />
      </div>

      {/* ============================== CONTENT ============================= */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-[900px] px-4 sm:px-8">
          {/* ------------------------------ HEADER ------------------------------ */}
          <header className="flex items-center justify-between gap-3 pt-5 sm:pt-7">
            <a
              href="#"
              className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
              aria-label="AlternaVale — início"
            >
              <span className="relative shrink-0">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -scale-x-125 scale-y-125 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),rgba(255,45,85,0.12)_55%,transparent_75%)]"
                />
                <Image
                  src="/images/logo-mono-v2.png"
                  alt="Símbolo da AlternaVale"
                  width={96}
                  height={96}
                  priority
                  className="relative h-9 w-9 object-contain sm:h-12 sm:w-12"
                />
              </span>
              <Sparkle className="hidden h-2.5 w-2.5 shrink-0 text-neon sm:block" />
              <span className="title-metal truncate font-gothic text-xl leading-none text-white sm:text-3xl">
                AlternaVale
              </span>
              <Sparkle className="hidden h-2.5 w-2.5 shrink-0 text-neon sm:block" />
            </a>

            <a
              href="#"
              className="neon-glow flex shrink-0 items-center gap-2 rounded-lg border border-neon/70 bg-black/60 px-2 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:neon-glow-strong hover:bg-black/80 sm:px-3 sm:py-2 sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-neon/80 text-neon sm:h-7 sm:w-7">
                <Hash className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
              </span>
              @AlternaVale
            </a>
          </header>

          <main>
            {/* ------------------------------- HERO ------------------------------ */}
            <section className="mt-3 flex flex-col items-center text-center sm:mt-4">
              <h1 className="sr-only">AlternaVale</h1>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 scale-125 bg-[radial-gradient(circle_at_50%_36%,rgba(255,45,85,0.3),transparent_60%)]"
                />
                <Image
                  src="/images/hero-art-v3.png"
                  alt="Lua carmesim atrás de asas góticas de morcego prateadas — logo da AlternaVale"
                  width={485}
                  height={447}
                  priority
                  sizes="(max-width: 640px) 320px, 460px"
                  className="h-auto w-[320px] sm:w-[400px] lg:w-[460px]"
                />
              </div>

              <div className="mt-2 flex w-full items-center justify-center gap-2.5 sm:mt-4 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink bg-gradient-to-r from-transparent via-neon/40 to-neon/60 sm:w-20 lg:w-28"
                />
                <SparkleSmall className="h-3 w-3 shrink-0 text-neon" />
                <p className="whitespace-nowrap text-[15px] font-semibold text-zinc-50 min-[420px]:text-base sm:text-2xl">
                  Junte-se a AlternaVale hoje!
                </p>
                <SparkleSmall className="h-3 w-3 shrink-0 text-neon" />
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink bg-gradient-to-r from-neon/60 via-neon/40 to-transparent sm:w-20 lg:w-28"
                />
              </div>
            </section>

            {/* ---------------------------- SOCIAL ROW ---------------------------- */}
            <section
              aria-label="Redes sociais oficiais"
              className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-9 sm:gap-x-4"
            >
              <span className="text-sm font-bold text-white sm:text-base">
                AlternaVale Official:
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="neon-glow flex h-9 w-9 items-center justify-center rounded-[10px] border-[1.5px] border-neon text-neon transition-all duration-200 hover:-translate-y-0.5 hover:neon-glow-strong hover:text-neon-soft sm:h-11 sm:w-11"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <span
                aria-hidden="true"
                className="mx-0.5 hidden h-6 w-px bg-zinc-400/50 sm:block"
              />
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-bold text-white transition-colors hover:text-neon-soft sm:text-base"
              >
                <Hash className="h-4 w-4 text-neon sm:h-[18px] sm:w-[18px]" strokeWidth={3} />
                @AlternaVale
              </a>
            </section>

            {/* ------------------------------ BANNER ------------------------------ */}
            <section className="mt-6 sm:mt-9">
              <div className="neon-glow relative rounded-md border border-neon/70 p-[5px]">
                {/* corner brackets like the reference plaque frame */}
                <span aria-hidden="true" className="absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 border-neon" />
                <span aria-hidden="true" className="absolute -right-px -top-px h-2.5 w-2.5 border-r-2 border-t-2 border-neon" />
                <span aria-hidden="true" className="absolute -bottom-px -left-px h-2.5 w-2.5 border-b-2 border-l-2 border-neon" />
                <span aria-hidden="true" className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b-2 border-r-2 border-neon" />
                <div className="flex items-center justify-center gap-2.5 rounded-[4px] border border-neon/35 bg-black/70 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4">
                  <Sparkle className="h-4 w-4 shrink-0 text-neon text-glow-pink sm:h-5 sm:w-5" />
                  <p className="font-script text-center text-[15px] font-bold italic leading-snug text-zinc-100 sm:text-lg lg:whitespace-nowrap lg:text-[21px]">
                    ## Rolê underground de gente esquisita do Vale do São
                    Francisco
                  </p>
                </div>
              </div>
            </section>

            {/* ----------------------------- LINK GRID ---------------------------- */}
            <nav aria-label="Links da AlternaVale" className="mt-4 sm:mt-6">
              <ul className="grid grid-cols-2 gap-2.5 sm:gap-5">
                {LINKS.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-glow group flex h-full items-center gap-2 rounded-xl border-[1.5px] border-neon/90 bg-black/75 px-2.5 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:neon-glow-strong hover:bg-black/85 sm:gap-4 sm:px-5 sm:py-4"
                    >
                      <span className="shrink-0 [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-8 sm:[&>svg]:w-8">
                        {link.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-[10px] font-bold leading-tight tracking-wide min-[400px]:text-[11px] sm:text-sm sm:leading-tight lg:text-[15px] ${link.titleClassName ?? "text-white"}`}
                        >
                          {link.title}
                        </span>
                        <span className="mt-0.5 block line-clamp-2 text-[10px] leading-tight text-zinc-300/85 sm:line-clamp-none sm:truncate sm:text-[13px]">
                          {link.sub}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-neon transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5"
                        strokeWidth={2.5}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ---------------------------- DIVIDER ✦ ----------------------------- */}
            <div
              aria-hidden="true"
              className="mt-9 flex items-center justify-center gap-2 text-neon sm:mt-12 sm:gap-2.5"
            >
              <SparkleSmall className="h-2 w-2 opacity-80" />
              <SparkleSmall className="h-3.5 w-3.5" />
              <Sparkle className="h-6 w-6 text-glow-pink sm:h-7 sm:w-7" />
              <SparkleSmall className="h-3.5 w-3.5" />
              <SparkleSmall className="h-2 w-2 opacity-80" />
            </div>

            {/* ---------------------------- FOOTER CARD --------------------------- */}
            <section className="neon-glow mt-6 rounded-xl border border-neon/60 bg-[linear-gradient(135deg,rgba(30,7,13,0.92),rgba(0,0,0,0.86)_55%,rgba(30,7,13,0.9))] p-4 sm:mt-8 sm:p-5">
              <div className="flex items-center gap-3.5 sm:gap-5">
                <span className="relative shrink-0">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 scale-150 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(255,45,85,0.1)_55%,transparent_75%)]"
                  />
                  <Image
                    src="/images/logo-mono-v2.png"
                    alt="Símbolo da AlternaVale"
                    width={128}
                    height={128}
                    className="relative h-12 w-12 object-contain sm:h-16 sm:w-16"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="title-metal font-gothic text-xl leading-none text-white sm:text-[26px]">
                    AlternaVale
                  </h2>
                  <p className="mt-1.5 text-xs text-zinc-200 sm:text-sm">
                    Mais que um rolê, uma comunidade!
                  </p>
                  <p className="mt-1 text-xs text-zinc-200 sm:text-sm">
                    Vale do São Francisco{" "}
                    <span aria-label="amor" role="img">
                      ❤️
                    </span>
                  </p>
                </div>
                <div className="relative -rotate-6 shrink-0 pr-1 text-right font-marker leading-none text-neon">
                  <Crown
                    aria-hidden="true"
                    className="absolute -top-4 right-1.5 h-3.5 w-3.5 sm:right-2 sm:h-4 sm:w-4"
                    strokeWidth={2.4}
                  />
                  <p className="text-sm sm:text-lg">AQUI É</p>
                  <p className="text-base sm:text-[22px]">ALTERNAVALE!</p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 10"
                    preserveAspectRatio="none"
                    className="mx-auto mt-1 h-2 w-[92%] text-neon"
                  >
                    <path
                      d="M4 7 C 34 2, 88 2, 116 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </section>

            {/* ---------------------------- FOOTER LINKS -------------------------- */}
            <footer className="pb-2 pt-6 text-center sm:pt-9">
              <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-zinc-400 sm:gap-x-2.5 sm:text-xs">
                {FOOTER_ROW_1.map((item, i) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-2.5">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-zinc-600">
                        •
                      </span>
                    )}
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] font-medium text-zinc-200 sm:gap-x-2.5 sm:text-xs">
                {FOOTER_ROW_2.map((item, i) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-2.5">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-zinc-600">
                        •
                      </span>
                    )}
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </main>
        </div>

        {/* --------------------------- BOTTOM ORNAMENT ------------------------- */}
        <div className="relative mt-auto w-full px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16">
          <div className="relative mx-auto flex max-w-[1200px] items-center">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-transparent via-neon/40 to-neon/70"
            />
            <Sparkle className="mx-3 h-6 w-6 shrink-0 text-neon-soft text-glow-pink sm:mx-5 sm:h-8 sm:w-8" />
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-l from-transparent via-neon/40 to-neon/70"
            />
          </div>
        </div>
      </div>

      {/* ============================== FRAME =============================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
      >
        <div className="absolute inset-2 border border-neon/40 shadow-[0_0_20px_-8px_rgba(255,45,85,0.6),inset_0_0_24px_-14px_rgba(255,45,85,0.5)] sm:inset-3" />
        {/* corners */}
        <Sparkle className="absolute left-2 top-2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-neon text-glow-pink sm:left-3 sm:top-3 sm:h-5 sm:w-5" />
        <Sparkle className="absolute right-2 top-2 h-4 w-4 translate-x-1/2 -translate-y-1/2 text-neon text-glow-pink sm:right-3 sm:top-3 sm:h-5 sm:w-5" />
        <Sparkle className="absolute bottom-2 left-2 h-4 w-4 -translate-x-1/2 translate-y-1/2 text-neon text-glow-pink sm:bottom-3 sm:left-3 sm:h-5 sm:w-5" />
        <Sparkle className="absolute bottom-2 right-2 h-4 w-4 translate-x-1/2 translate-y-1/2 text-neon text-glow-pink sm:bottom-3 sm:right-3 sm:h-5 sm:w-5" />
        {/* side edges */}
        <SparkleSmall className="absolute left-2 top-[30%] h-2.5 w-2.5 -translate-x-1/2 text-neon/80 sm:left-3" />
        <SparkleSmall className="absolute left-2 top-[74%] h-2.5 w-2.5 -translate-x-1/2 text-neon/80 sm:left-3" />
        <SparkleSmall className="absolute right-2 top-[24%] h-2.5 w-2.5 translate-x-1/2 text-neon/80 sm:right-3" />
        <SparkleSmall className="absolute right-2 top-[68%] h-2.5 w-2.5 translate-x-1/2 text-neon/80 sm:right-3" />
        {/* tiny dots near top center */}
        <SparkleSmall className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-[220%] -translate-y-1/2 text-neon/60 sm:top-3" />
        <SparkleSmall className="absolute left-1/2 top-2 h-1.5 w-1.5 translate-x-[120%] -translate-y-1/2 text-neon/60 sm:top-3" />
      </div>
    </div>
  );
}

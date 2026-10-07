import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function Landing() {
  return (
    <section
      id="home"
      className="
      relative grid place-items-center min-h-[80vh]
      pt-[14vw] md:pt-[10vw] lg:pt-[3vw]   /* leave space for the Navbar */
      overflow-hidden                      /* clip anything past the bottom */
      pb-[14vw] md:pb-[10vw] lg:pb-[8vw]   /* leave space for the wave depth */
      bg-cover bg-center bg-no-repeat
      bg-[url('/images/landing_background6.0.svg')]
    "
    >
      

      {/* Decorations (under logo/timer) */}
      <Image
        src="/images/schooloffish6.0.svg"
        alt=""
        width={700}
        height={400}
        className="
          absolute left-[4%] top-[10%]
          w-[380px] md:w-[520px]
          h-auto max-w-none
          z-[1] pointer-events-none
          rotate-[-8deg]
        "
      />

      <Image
        src="/images/schooloffish6.0.svg"
        alt=""
        width={700}
        height={400}
        className="
          absolute right-[4%] bottom-[24%]
          w-[380px] md:w-[520px]
          h-auto max-w-none
          z-[1] pointer-events-none
          rotate-[-8deg]
        "
      />

      {/* Logo + countdown (still above waves/decors, but below any navbar wrapper) */}
      <div className="z-[2] text-center grid place-items-center gap-0 translate-y-8 md:translate-y-14 lg:translate-y-18">
        <div className="relative w-[320px] h-[291px] drop-shadow-[0_10px_16px_rgba(251,172,204,0.25)] max-lg:w-[420px] max-lg:h-[420px] max-sm:w-[300px] max-sm:h-[300px]">
          <Image
            src="/images/logos_5.0/main_logo6.0.svg"
            alt="MarinaHacks 6.0 logo"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 520px"
            className="sway-more-slow"
            priority
          />
        </div>

        {/* Timer slightly above logo for overlap, but still low overall */}
        <div className="z-[3] flex flex-col items-center gap-6">
          <a
            href="APPLICATION_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-[240px] h-[51px] sm:w-[280px] sm:h-[59px]
              flex items-center justify-center gap-3
              rounded-[25px]
              translate-y-2
              bg-[#FFC1D8]
              border-4 border-white
              text-[32px] font-monomaniac text-white
              shadow-[0_6px_15px_rgba(251,172,204,0.4)]
              transition-transform duration-300
              hover:scale-105
            "
          >
            <span className="flex -translate-y-1 items-center gap-3 leading-none">
              <span>Apply Now</span>
              <span aria-hidden="true">→</span>
            </span>
          </a>

          <CountdownTimer targetDate="2026-10-24T10:00:00" />
        </div>
      </div>
    </section>
  );
}

// targetDate="2025-10-25T10:00:00"

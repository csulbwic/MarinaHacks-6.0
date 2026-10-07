import React, { useState, useEffect } from "react";
import style from "../styles/contact.module.css";
import Image from "next/image";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDateObj = new Date(targetDate);
    const difference = targetDateObj.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isCountdownOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isCountdownOver) {
    return (
      <div className="justify-center mt-10 mb-10">
        <div className="flex items-center justify-center px-10 md:px-16 py-6 md:h-[140px] bg-[#FFC1D8] backdrop-blur-m rounded-[25px] shadow-[0_0_25px_rgba(180, 220, 235, 0.6)]">
          <p className="text-4xl md:text-5xl font-monomaniac text-[#FFFFFF] font-nunito text-center whitespace-nowrap leading-none -translate-y-1">
            MarinaHacks Happens Now!
          </p>
        </div>

        <a
          href="https://marina-hacks-5-0.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-[#FFC1D8] backdrop-blur-m rounded-[25px] border-4 border-white shadow-[0_0_25px_rgba(180, 220, 235, 0.35)] hover:shadow-[0_0_35px_rgba(251,172,204,0.5)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p className="text-lg md:text-2xl font-monomaniac text-[#FFFFFF] font-nunito text-center whitespace-nowrap">
            DevPost
          </p>
        </a>

        <a
          href="https://docs.google.com/document/d/1kP8YUct2d7iaGLmMwALtOXxFjrcB5Hv_jwIteBdNCIY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-[#FFC1D8] backdrop-blur-m rounded-[25px] border-4 border-white shadow-[0_0_25px_rgba(180, 220, 235, 0.35)] hover:shadow-[0_0_35px_rgba(251,172,204,0.5)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p className="text-lg md:text-2xl font-monomaniac text-[#FFFFFF] font-nunito text-center whitespace-nowrap">
            Project Submission Requirements
          </p>
        </a>
      </div>
    );
  }

  return (
    // Each time unit in its own box with pink border and white background
    // Styling repeats between boxes, thus using flexbox and grid for layout

  <div className="flex flex-col items-center gap-6">
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

    <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 md:gap-10 lg:gap-16">
      {/* Days */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] [animation-delay:0s]`}
        >
          <Image
            src="/images/bubble6.0.svg"
            alt=""
            fill
            className="object-contain"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <p className="font-bold text-[1.5rem]">{timeLeft.days}</p>
            <p className="text-[0.75rem] md:text-[1rem]">Days</p>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] [animation-delay:0.4s]`}
        >
          <Image
            src="/images/bubble6.0.svg"
            alt=""
            fill
            className="object-contain"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <p className="font-bold text-[1.5rem]">{timeLeft.hours}</p>
            <p className="text-[0.75rem] md:text-[1rem]">Hours</p>
          </div>
        </div>
      </div>

      {/* Minutes */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] [animation-delay:0.8s]`}
        >
          <Image
            src="/images/bubble6.0.svg"
            alt=""
            fill
            className="object-contain"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <p className="font-bold text-[1.5rem]">{timeLeft.minutes}</p>
            <p className="text-[0.75rem] md:text-[1rem]">Minutes</p>
          </div>
        </div>
      </div>

      {/* Seconds */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] [animation-delay:1.2s]`}
        >
          <Image
            src="/images/bubble6.0.svg"
            alt=""
            fill
            className="object-contain"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <p className="font-bold text-[1.5rem]">{timeLeft.seconds}</p>
            <p className="text-[0.75rem] md:text-[1rem]">Seconds</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

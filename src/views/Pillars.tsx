import React, { useState } from "react";
import Image from "next/image";

type Pillar = { title: string; description: string; color: string};

const DATA: Pillar[] = [
  { title: "Best Overall", description: "Most memorable and favorite project!", color: "#df8ed1ff"},
  {
    title: "Best Social Good",
    description:
      "Focuses the best on addressing social issues such as climate change, renewable energy, waste reduction, and sustainable practices!", color: "#a6a4e2ff"
  },
  {
    title: "Best Entertainment",
    description:
      "Best entertainment product (music, gaming, art, food, culture, outdoor activities, physical activities, fashion, and beauty)!", color: "#eb89adff"
  },
 
  {
    title: "Best Technical",
    description:
      "Best project for the most advanced, challenging, and difficulty in implementation!", color: "#fd85b5ff "
  },
];

// exact ribbon colors (in order)
const HEADER = ["#F7D3F1", "#DAD9F6", "#EFC0D1", "#FBACCC"];

export const Pillars = () => {
  const [open, setOpen] = useState<boolean[]>(() => DATA.map(() => false));

  const toggle = (index: number) => {
    setOpen((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  return (
    <section
      id="pillars"
      className="relative bg-[url('/images/pillars/background6.0.png')] bg-no-repeat bg-cover bg-center pt-28 md:pt-36 pb-24 scroll-mt-28 md:scroll-mt-36"
    >
      {/* Content wrapper */}
      <div className="mx-auto max-w-5xl px-6">
        {/* Title and fish triplet */}
        <div className="relative mx-auto mb-20 w-fit">
          <Image 
          src="/images/pillars/title6.0.png"
          alt="Title"
          width={250}
          height={250}
          />

          {/* Fish triplet */}
          <Image
          src="/images/pillars/fish_triplet6.0.png"
          alt=""
          width={180}
          height={120}
          className="absolute top-[22%] -right-[29%] w-[170px] h-auto md:w-[170px] z-[1] pointer-events-none select-none"
          />
        </div>

        {/* Pillars list */}
        <div className="relative z-10 flex flex-col items-center space-y-12">
          {DATA.map((p, i) => (
            <div key={p.title} className="w-full flex flex-col items-center">
              {/* Ribbon (on top) */}
              <button
                type="button"
                aria-expanded={open[i]}
                onClick={() => toggle(i)}
                className="
                  relative z-10
                  w-[92%] md:w-[88%] lg:w-[84%]
                  cursor-pointer border-0 p-0 font-[inherit]
                  rounded-2xl
                  shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                  ring-1 ring-black/5
                  text-center
                "
                style={{ background: HEADER[i % HEADER.length] }}
              >
                <div className="py-5">
                  {/* if you want white uppercase like the prototype, swap the color & add uppercase */}
                  <h3 className="text-white uppercase tracking-[0.08em] text-[18px] sm:text-[20px] md:text-[22px] font-extrabold">
                    {p.title}
                  </h3>
                </div>
              </button>

              {/* Card under the ribbon (slightly tucked underneath) */}
              {open[i] && (
              <div
                className="
                  relative z-0
                  w-[86%] md:w-[82%] lg:w-[78%]
                  -mt-4              /* <-- pulls the white card up, under the ribbon */
                  rounded-2xl bg-white
                  shadow-lg ring-1 ring-black/5
                  px-8 py-8
                "
              >
                <p className="text-center font-bold text-[17px] leading-7" style={{color:p.color}}>
                  {p.description}
                </p>
              </div>
              )}
            </div>
          ))}
        </div>

        {/* Fish triplet and pufferfish */}
        <Image
        src="/images/pillars/fish_triplet6.0.png"
        alt=""
        width={180}
        height={120}
        className="absolute -bottom-[2%] left-[2%] w-[170px] h-auto md:w-[170px] z-[1] pointer-events-none select-none"
        />
        
        <Image
        src="/images/pillars/pufferfish6.0.png"
        alt=""
        width={180}
        height={120}
        className="absolute bottom-[2%] right-[1%] w-[200px] h-auto md:w-[300px] z-[1] pointer-events-none select-none"
        />
      </div>
    </section>
  );
};
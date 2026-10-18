import { useState } from "react";
import { questions } from "@/Data/questions";
import style from "@/styles/faq.module.css";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className={style.faqContainer}>
      <img
        src="/images/faq-heading.png"
        alt="Frequently Asked Questions"
        className={style.faqHeadingImage}
      />

      <span
        aria-hidden="true"
        className={`${style.starDecoration} ${style.starLeft}`}
      />
      <span
        aria-hidden="true"
        className={`${style.starDecoration} ${style.starRight}`}
      />

      <div className={style.faqWrapper}>
        <div className={style.faqList}>
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={style.questionBox} key={item.question}>
                <button
                  id={questionId}
                  type="button"
                  className={style.questionButton}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleActive(index)}
                >
                  <span className={style.questionText}>{item.question}</span>
                  <img
                    src="/images/dropdown_arrow.png"
                    alt=""
                    aria-hidden="true"
                    className={`${style.faqArrow} ${
                      isOpen ? style.faqArrowOpen : ""
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  className={`${style.answerBox} ${
                    isOpen ? style.answerBoxOpen : ""
                  }`}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div className={style.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
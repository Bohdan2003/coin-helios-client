//ui
import { Question } from '@/app/[lang]/_ui/QuestionsSection/Qestion';
//utils
import { bigTitleCls } from '@/shared/classNames/classNames';
//helpers
import { getQuestionsData } from '@/app/[lang]/_ui/QuestionsSection/helper';

export const QuestionsSection = () => {
  const questions = getQuestionsData();

  return (
    <section>
      <div className="container">
        <h3 className={bigTitleCls}>Frequently Asked Questions</h3>
        <div className="mt-[32px] grid sm:grid-cols-2 gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            {questions.slice(0, Math.round(questions.length / 2)).map(({ question, answer, id }) => (
              <Question
                key={id}
                question={question}
                answer={answer}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[16px]">
            {questions.slice(Math.round(questions.length / 2), questions.length).map(({ question, answer, id }) => (
              <Question
                key={id}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
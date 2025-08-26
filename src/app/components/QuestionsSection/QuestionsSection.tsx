//ui
import { Question } from '@/app/components/QuestionsSection/Qestion';
//utils
import { titleCls } from '@/utils/consts/clsVariable';
//helpers
import { getQuestionsData } from '@/app/components/QuestionsSection/helper';

export const QuestionsSection = () => {
  const questions = getQuestionsData();

  return (
    <section>
      <div className="container">
        <h3 className={titleCls}>Frequently Asked Questions</h3>
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
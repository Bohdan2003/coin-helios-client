//ui
import { Question } from '@/app/[lang]/_ui/QuestionsSection/Qestion';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { bigTitleCls } from '@/shared/classNames';

export const QuestionsSection: React.FC<{
  dictionary: TDictionary['main']['faq'];
}> = ({ dictionary: {
  questions,
  title
} }) => {

  return (
    <section>
      <div className="container">
        <h3 className={bigTitleCls}>{ title }</h3>
        <div className="mt-[32px] grid sm:grid-cols-2 gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            {questions.slice(0, Math.round(questions.length / 2)).map(({ question, answer }, i) => (
              <Question
                key={i+'first'}
                question={question}
                answer={answer}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[16px]">
            {questions.slice(Math.round(questions.length / 2), questions.length).map(({ question, answer }, i) => (
              <Question
                key={i+'second'}
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
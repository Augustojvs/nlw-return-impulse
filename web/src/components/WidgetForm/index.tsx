import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        placeholder: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedBackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedBackSent(false);
        setFeedBackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
               <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedBackSent(true)}
                        />
                    )}
               </> 
            )}

            <footer className="text-xs text-neutral-400">
                Feito com 🤍 por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/augustojvs/" >Augusto's enterprise</a>
            </footer>
        </div>
    )
}

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Survey = () => {
    const {questionNumber} = useParams()
    const questionNumbInt = parseInt(questionNumber)
    const prevQuestion = questionNumbInt === 1 ? 1 : questionNumbInt -1
    const nextQuestion = questionNumbInt + 1
   
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestion}`}>Précédent</Link>
            { questionNumbInt === 10 ? (
                <Link to='/survey/results'>Résultats</Link>
            ):(
                <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
            )}

        </div>
    );
};

export default Survey;
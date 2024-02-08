import React from 'react'
import { useQuestionsStore } from '../store/questionsStore';
import { httpHelper } from '../helper/httpContainer';
import FeebackConatiner from './feedback/feedback';


function SlideComponent() {
    const { activeIndex, questionsList } = useQuestionsStore();
    const url = "http://localhost:5050/feedback";
    const api = httpHelper();
    const getResponse = () => {
        api
            .get(`${url}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    const postResponse = response => {
        api
            .post(`${url}`, { body: response })
            .then(res => getResponse())
            .catch(err => console.log(err))
    }

    const data = questionsList[activeIndex];
    const ratingProvided = !!data.rating;
    const handleSubmit = (e) => {
        e.preventDefault();
        const questionCopy = [...questionsList];
        const questionPart = questionCopy.slice(0, -1);

        postResponse(questionPart);

    }
    if (activeIndex === questionsList.length - 1) {
        const renderEmojis = (val) => {
            switch (val) {
                case "Like":
                    return <span key={val} className='submit-emoji'>&#128077;</span>
                case "Nuetral":
                    return <span key={val} className='submit-emoji'>&#129300;</span>
                case "Dislike":
                    return <span key={val} className='submit-emoji'>&#128078;</span>
            }
        }
        let questionPart = questionsList.slice(0, -1).find(o => !!o.rating);
        return (
            <aside className="panel panel-grid" style={{ background: 'rgba( 255, 255, 255, 0.45 )', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur( 16px )' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>

                    <tbody>
                        {questionsList.map((question) => {
                            return (
                                <tr key={question.id} style={{ borderBottom: '0.5px dotted blue' }}>
                                    <td>{question.questions}</td>
                                    <td>{renderEmojis(question.rating)}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {!Boolean(questionPart) && <p>Provide feedback to proceed</p>}
                <button type="submit" onClick={handleSubmit} disabled={!Boolean(questionPart)}>Submit Response</button>
            </aside>
        );
    }
    return (
        <aside className="panel">
            <section className='slide-container' id='question-container'>
                <h2 className={ratingProvided ? "panel-answered-question" : "panel-question"} style={{ animation: 'animation: 2s anim-lineUp ease-out 1' }}>{data.questions}</h2>
            </section>
            <section className='slide-container' id='emoji-container'>
                {activeIndex < questionsList.length - 1 &&
                    <FeebackConatiner questionId={data.id} />}
            </section>


        </aside>
    )
}

export default SlideComponent;
import React from 'react'
import { useQuestionsStore } from '../store/questionsStore';

function SlideNavigator() {
    const {activeIndex, setActiveindex, questionsList} = useQuestionsStore();
    return (
        <div className="selectors">
            {questionsList.map((data) => {
                return (
                    <div key={data.id} className={activeIndex === data.id ? 'selector active' : 'selector'} onClick={() => setActiveindex(data.id)}>
                    </div>
                )
            })}
        </div>
    );
}

export default SlideNavigator;

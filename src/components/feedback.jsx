import React from 'react'
import { useQuestionsStore } from '../store/questionsStore';
const emojis = [
    {
        id: 0,
        val: 1,
        name: 'Like',
        unicode: '&#128077;',
    },
    {
        id: 1,
        val: 0,
        name: 'Nuetral',
        unicode: '&#129300;',
    },
    {
        id: 2,
        val: -1,
        name: 'Dislike',
        unicode: '&#128078;',
    },
];
function FeebackConatiner({ questionId, qRating }) {
    const { activeIndex, questionsList, setActiveindex, updateQuestions } = useQuestionsStore();

    const renderEmojis = (val) => {
        switch (val) {
            case 1:
                return <span key={val} className='emoji' >&#128077;</span>
            case 0:
                return <span key={val} className='emoji'>&#129300;</span>
            case -1:
                return <span key={val} className='emoji'>&#128078;</span>
            default:
                return null;
        }
    }
    const handleEmojiClick = (val) => {
        updateQuestions(questionId, val.val);
        // setTimeout(() => {
            setActiveindex(activeIndex + 1);
        // }, 2000);
    }
    const { rating } = questionsList[activeIndex];
    const handleActiveEmoji = (emojiVal) => {
        if (!!rating) {
            if (rating === emojiVal) {
                if (emojiVal === 'Like') {
                    return '0 0 20px #99ff33, 0 0 25px #0000FF';
                } else if (emojiVal === 'Nuetral') {
                    return '0 0 20px #ffcc00, 0 0 25px #0000FF';
                } else {
                    return '0 0 20px #ff0000, 0 0 25px #0000FF';
                }
            }
        } else {
            return null;
        }
    }
    return (
        <section >
            <ul className="emoji-list" >
                {emojis.map((emoji) => {
                    return (
                        <li style={{ textShadow: handleActiveEmoji(emoji.name) }} key={emoji.id} onClick={() => handleEmojiClick(emoji)}>{renderEmojis(emoji.val)}</li>
                    );
                })}
            </ul>
        </section>
    )
}

export default FeebackConatiner
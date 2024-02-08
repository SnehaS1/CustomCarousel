import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const style = {

}

const questionsList = [{
  id: 0,
  header: 'Gluten-free Bicycle',
  questions: 'how likely are you to recommend us to friends, family, or colleagues?',
  rating: null,
  body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
  colour: '#242846',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg'
}, {
  id: 1,
  header: 'Post-ironic Disrupt',
  body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
  questions: 'How would you rate your satisfaction with the customer service representative you spoke to?',
  rating: null,
  colour: '#ba9077',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
}, {
  id: 2,
  header: 'Lumber-Sexual Roof Party ',
  body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
  colour: '#1ABC9C',
  questions: 'how would you rate the effort you had to make to get in touch with us?',
  rating: null,
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
  id: 3,
  header: 'Vegan hoodie trust fund',
  body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
  colour: '#C0392B',
  questions: ' how would you rate the effort you had to make to speak directly to someone on the customer service team?',
  rating: null,
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
  id: 4,
  header: 'cliche craft beer',
  questions: 'how would you rate the quality of your customer service experience ?',
  rating: null,
  body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
  colour: '#513B56',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];
const emojis = [
  {
    id: 0,
    name: 'Happy',
    htmlUrl: '&#128077;',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
  },
  {
    id: 1,
    name: 'Nuetral',
    htmlUrl: '&#129300;',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
  },
  {
    id: 2,
    name: 'Sad',
    htmlUrl: '&#128078;',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
  },
];
const Selector = ({ key, id, activeID, handleClick }) => {
  let componentClass = 'selector';
  if (activeID === id) {
    componentClass = 'selector active';
  }
  return (
    <div className={componentClass} onClick={() => handleClick(id)}></div>
  );
}
const ActivePanel = ({ anObjectMapped }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid red' }}
    >
      <div style={{ display: 'flex', flex: 1, border: `1px solid ${anObjectMapped.colour}`, backgroundColor: `${anObjectMapped.color}`, justifyContent: 'center', alignItems: 'center' }}>
        <p key={`${anObjectMapped.id}`}>
          {anObjectMapped.questions}
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <div className="emoji-container1">
          {/* <p>{String.fromCodePoint(`0x${symbol}`)}</p> */}
          <p>&#128077;</p>
        </div>

        {/* <ul className="emoji-container" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
          {emojis.map(emoji => (
            <li key={emoji.id} className="list-container">
              <button
                type="button"
                className="button"
              >
                <p>{emoji.htmlUrl}</p>
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
const ActivePAnel1 = ({ anObjectMapped }) => {
  return (
    <aside className="panel">
				<h2 className="panel-header">{anObjectMapped.questions}</h2>
				<p className="panel-info">{anObjectMapped.header}</p>
				<button className="panel-button" 
				>
					Read More
				</button>
			</aside>
  );
}
function App() {
  const symbol = "1f44d";
  console.log('DATA', questionsList)
  const [activeID, setActiveID] = useState(0);
  const handeleActiveSelector = (id) => {
    setActiveID(id);
  }
  return (
    <div className="App">
      <div style={{}}>
        <div className="selectors">
          {questionsList.map((item) =>
            <Selector
              key={item.id}
              id={item.id}
              handleClick={handeleActiveSelector}
              // _handleClick={this._handleClick}
              // _changeActive={this.props._changeActive}
              activeID={activeID}
            />
          )}
          <ActivePAnel1 anObjectMapped={questionsList[activeID]} />
          {/* <ActivePanel anObjectMapped={questionsList[activeID]} /> */}
        </div>
        {/* {questionsList.map((anObjectMapped, index) => {
          return (
            <div style={{ height: '300px', display: 'flex', marginBottom: '10px', alignItems: 'center', justifyContent: 'center', border: '2px solid red' }}>
              <div style={{ display: 'flex', flex: 1, border: `1px solid ${anObjectMapped.colour}`, height: '100%', backgroundColor: `${anObjectMapped.color}`, justifyContent: 'center', alignItems: 'center' }}>
                <p key={`${anObjectMapped.id}`}>
                  {anObjectMapped.questions} //////- {anObjectMapped.body}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <div className="emoji-container1">
                  <p>&#128077;</p>
                </div>

                <ul className="emoji-container" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
                  {emojis.map(emoji => (
                    <li key={emoji.id} className="list-container">
                      <button
                        type="button"
                        className="button"
                      >
                        <p>{emoji.htmlUrl}</p>
                        <p>{emoji.name}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default App;

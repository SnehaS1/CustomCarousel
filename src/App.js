import './App.css';
import SlideNavigator from './components/navigator';
import SlideComponent from './components/slides';
import { useQuestionsStore } from './store/questionsStore';

function App() {
  // const firstName = usePersonStore((state) => state.firstName)
  const { activeIndex,questionsList, } = useQuestionsStore();

  console.log('DATA', questionsList)

  return (
    <div className="App">
      <section className="wrapper" style={{ backgroundColor: questionsList[activeIndex].backgroundColor }}>
        <SlideNavigator />
        <SlideComponent data={questionsList[activeIndex]}  />
      </section>

    </div>
  );
}

export default App;

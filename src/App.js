import './App.css';
import SlideNavigator from './components/navigator/navigator';
import SlideComponent from './components/slides/slides';
import { useQuestionsStore } from './store/questionsStore';

function App() {
  const { activeIndex,questionsList, } = useQuestionsStore();


  return (
    <div className="App">
      <section className="wrapper" style={{ backgroundColor: '#8464fc' }}>
        <SlideNavigator />
        <SlideComponent data={questionsList[activeIndex]}  />
      </section>

    </div>
  );
}

export default App;

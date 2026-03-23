import {gsap, ScrollTrigger,SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className='text-3xl flex-center h-[100vh]'>Hello GSAp</div>
  )
}

export default App
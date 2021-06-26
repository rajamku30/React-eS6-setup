import './styles.css'
import IMAGE from './svb-logo.png'
import { Counter } from './Counter'

const App = () => {
  return (
    <>
      <h1>
        Welcome to TMS-Frontend Application{process.env.NODE_ENV}{' '}
        {process.env.name}{' '}
      </h1>
      <img src={IMAGE} alt="SVB-logo" />
      <Counter />
    </>
  )
}

export default App

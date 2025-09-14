import { toast } from 'sonner'
import Hero from './components/Hero'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div>
      <Hero />
      <Button 
      onClick = {() => console.log("Button Clicked ")}
      className="cursor-pointer">Get Started</Button>
      <Button 
      onClick = {() => console.log('Welcome back!')}
      className="cursor-pointer">Sign In</Button>
    </div>
    
  )
}

export default App


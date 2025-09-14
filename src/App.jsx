import { toast } from 'sonner'
import Hero from './components/Hero'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div>
      <Hero />
      <Button variant ="outline" size="lg"
      onClick = {() => console.log("Button Clicked ")}
      className="cursor-pointer shadow-md rounded-3xl">Get Started Anonymously</Button>
      <Button 
      onClick = {() => console.log('Welcome back!')}
      className="cursor-pointer shadow-md rounded-3xl">Sign In</Button>
    </div>
    
  )
}

export default App


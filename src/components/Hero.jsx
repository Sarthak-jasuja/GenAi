import { AuroraText } from './ui/aurora-text'
import { Button } from './ui/button'
import { SpinningText } from './ui/spinning-text'

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row pt-10 justify-between rounded-2xl px-6 md:px-10 lg:px-20 overflow-hidden min-h-[80vh]">

      {/* Left Side: Welcome Text */}
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Welcome to the <AuroraText>Sangati</AuroraText>
        </h1>
        <p className="mt-4 text-lg">Your Mental Wellness Ally</p>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => console.log('Button Clicked')}
          className="shadow-md rounded-3xl"
        >
          Get Started Anonymously
        </Button>

        <Button
          onClick={() => console.log('Welcome back!')}
          className="shadow-md rounded-3xl"
        >
          Sign In
        </Button>
      </div>

      {/* Spinning Text at Bottom Right */}
      <div className="absolute bottom-4 right-4">
        <SpinningText>
          SarthakJasuja.dev • SarthakJasuja.dev • SarthakJasuja.dev •
        </SpinningText>
      </div>
    </div>
  )
}

export default Hero

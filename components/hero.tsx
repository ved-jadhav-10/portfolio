import { cn } from '@/lib/utils'
import { Spotlight } from './ui/Spotlight'
import { TextHoverEffect } from './ui/text-hover-effect';

const hero = () => {
  return (
    <div className = "pb-20 pt-36">
        <div>
            <Spotlight className = "-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className = "top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className = "top-28 left-80 md:-left-32 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-black-100 top-0 left-0">
            <div className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              )}
            />
              {/* Radial gradient for the container to give a faded look */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/[0.003] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100">
              </div>
        </div>
        <div className="absolute top-20 left-0 right-0 flex items-center justify-center z-10 overflow-visible">
          <div className="w-full px-4 overflow-visible">
            <TextHoverEffect text="Ved Jadhav" duration={3} />
          </div>
        </div>
    </div>
  );
}

export default hero
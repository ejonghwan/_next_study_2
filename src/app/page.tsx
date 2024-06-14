import Social from '@/components/Social'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from 'react-icons/fi'


const HomePage = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left mt-10'>
            <span>Software Developer</span>
            <h1 className='h1 mt-10'>Hello I'm <br /><span className='text-accent'>JongHwan</span></h1>
            <p className='max-w-[500px] mb-9 mt-6 text-white/80'>I excel at crafting elegant digital experienes and I am proficient in various programming languages and technologies.</p>
          </div>
          <div className='flex flex-col xl:flex-row items-center gap-8'>
            <Button variant="outline" size="lg" className='uppercase flex items-center gap-2'>
              <span>Donwload CV</span>
              <FiDownload className='text-xl' />
            </Button>
            <div className='mb-8 xl:mb-0'>
              <Social />
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
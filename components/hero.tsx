import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Wind, Wrench } from 'lucide-react';
import AnimateOnScroll from '@/components/animations/animate-on-scroll';
import StaggerChildren from '@/components/animations/stagger-children';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id='inicio'
      className='bg-gradient-to-br from-teal-50 to-white py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <AnimateOnScroll animation='fadeInLeft' delay={200}>
            <div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
                Soluções Sustentáveis em{' '}
                <span className='text-teal-600'>Energia Solar</span> e{' '}
                <span className='text-teal-600'>Climatização</span>
              </h1>
              <p className='text-xl text-gray-600 mb-8'>
                Mais de 8 anos de experiência oferecendo tecnologia de ponta
                para museus, hospitais, indústrias e diversos segmentos.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-all duration-300'
                >
                  <Link href='/#contato'>
                    Solicitar Orçamento
                    <ArrowRight className='ml-2 w-5 h-5' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='hover:scale-105 transition-all duration-300 bg-transparent'
                >
                  Nossos Projetos
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation='fadeInRight' delay={400}>
            <StaggerChildren
              className='grid grid-cols-2 gap-6'
              staggerDelay={150}
            >
              <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <Zap className='w-12 h-12 text-teal-600 mb-4' />
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Energia Solar
                </h3>
                <p className='text-gray-600 text-sm'>
                  Sistemas fotovoltaicos completos
                </p>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <Wind className='w-12 h-12 text-teal-600 mb-4' />
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Climatização
                </h3>
                <p className='text-gray-600 text-sm'>Soluções especializadas</p>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-lg col-span-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <Wrench className='w-12 h-12 text-teal-600 mb-4' />
                <h3 className='font-semibold text-gray-900 mb-2'>Manutenção</h3>
                <p className='text-gray-600 text-sm'>
                  Preventiva e corretiva com equipe especializada
                </p>
              </div>
            </StaggerChildren>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

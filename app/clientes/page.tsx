import Header from '@/components/header';
import Footer from '@/components/footer';
import AnimateOnScroll from '@/components/animations/animate-on-scroll';
import StaggerChildren from '@/components/animations/stagger-children';
import ClientCard from '@/components/client-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function ClientesPage() {
  const featuredClients = [
    {
      name: 'Museu de Arte Contemporânea de Campinas william teste br',
      sector: 'Museu',
      service: 'Preservação de Acervo',
      period: '2022-2024',
      description:
        'Sistema de climatização especializado para preservação de obras de arte contemporânea',
      logo: '/images/museu-de-arte-contemporanea-de-campinas-jose-pancetti.png',
    },
    {
      name: 'Instituto de Estudos Brasileiros - USP',
      sector: 'Educação',
      service: 'Climatização Especializada',
      period: '2020-2024',
      description: 'Controle ambiental para biblioteca e arquivo histórico',
      logo: '/images/institudo-de-estudo-brasileiros.jpg',
    },
    {
      name: 'Museu da Imagem e do Som',
      sector: 'Museu',
      service: 'Sistema de Climatização',
      period: '2021-2024',
      description:
        'Preservação de acervo audiovisual com controle rigoroso de temperatura e umidade',
      logo: '/images/mis-museu-da-imagem-e-do-som.png',
    },
    {
      name: 'Museu do Ipiranga',
      sector: 'Museu',
      service: 'Climatização Museológica',
      period: '2023-2024',
      description:
        'Sistema de climatização desenvolvido para preservar o acervo histórico',
      logo: '/images/museu-do-ipiranga.png',
    },
    {
      name: 'Museu da Imigração do Estado de São Paulo',
      sector: 'Educação',
      service: 'Controle Ambiental',
      period: '2021-2023',
      description:
        'Sistema de climatização para preservação de acervo bibliográfico raro',
      logo: '/images/museu-da-imigracao-do-estado-de-sao-paulo.png',
    },
    {
      name: 'Faculdade de Medicina - USP',
      sector: 'Educação',
      service: 'Climatização Especializada',
      period: '2023-2024',
      description:
        'Controle rigoroso de temperatura e umidade para produção farmacêutica',
      logo: '/images/faculdades-de-medicina.jpg',
    },
  ];

  return (
    <main className='min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-teal-50 to-white py-20'>
        <div className='container mx-auto px-4'>
          <AnimateOnScroll animation='fadeInUp' className='text-center'>
            <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Nossos <span className='text-teal-600'>Clientes</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Confiança de instituições renomadas, museus de prestígio e
              universidades de referência nacional
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Principais Clientes - Cards */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <AnimateOnScroll animation='fadeInUp' className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Principais Projetos
            </h2>
            <p className='text-xl text-gray-600'>
              Conheça alguns dos principais projetos desenvolvidos pela Sena
              Engenharia
            </p>
          </AnimateOnScroll>

          <StaggerChildren
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            staggerDelay={150}
          >
            {featuredClients.map((client, index) => (
              <ClientCard
                key={index}
                name={client.name}
                sector={client.sector}
                service={client.service}
                period={client.period}
                description={client.description}
                logo={client.logo}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-teal-600'>
        <div className='container mx-auto px-4 text-center'>
          <AnimateOnScroll animation='fadeInUp'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
              Seja Nosso Próximo Cliente
            </h2>
            <p className='text-xl text-teal-100 mb-8 max-w-2xl mx-auto'>
              Junte-se a essas instituições renomadas e garanta a melhor solução
              para seu projeto
            </p>
            <Link href='/#contato'>
              <Button
                size='lg'
                className='bg-white text-teal-600 hover:bg-gray-100'
              >
                Solicitar Orçamento
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Image from 'next/image';

interface ClientCardProps {
  name: string;
  sector: string;
  service: string;
  period: string;
  logo?: string;
  description?: string;
}

export default function ClientCard({
  name,
  sector,
  service,
  period,
  logo = '',
  description,
}: ClientCardProps) {
  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'museu':
        return 'bg-emerald-100 text-emerald-800';
      case 'educação':
        return 'bg-blue-100 text-blue-800';
      case 'hospital':
        return 'bg-red-100 text-red-800';
      case 'indústria':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden'>
      <div className='p-6'>
        {/* Badge do setor */}
        <div className='mb-4'>
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getSectorColor(
              sector
            )}`}
          >
            {sector}
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className='flex gap-4'>
          {/* Logo do cliente */}
          <div className='flex-shrink-0'>
            <div className='w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden'>
              <Image
                src={logo || '/placeholder.svg'}
                alt={`Logo ${name}`}
                width={80}
                height={80}
                className='w-full h-full object-contain'
              />
            </div>
          </div>

          {/* Informações do cliente */}
          <div className='flex-1 min-w-0'>
            <h3 className='text-lg font-bold text-gray-900 mb-2 leading-tight'>
              {name}
            </h3>
            <p className='text-teal-600 font-medium mb-2'>{service}</p>
            <p className='text-sm text-gray-500'>{period}</p>
            {description && (
              <p className='text-sm text-gray-600 mt-2 line-clamp-2'>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

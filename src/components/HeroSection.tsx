import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/a38f2b10-ee8c-4e6c-9165-d673d9b1adbe/files/bef8809a-256a-471d-8212-20b80511369b.jpg',
  'https://cdn.poehali.dev/projects/a38f2b10-ee8c-4e6c-9165-d673d9b1adbe/files/713cd26f-0106-45f5-a5bd-f42fb2d5897f.jpg',
  'https://cdn.poehali.dev/projects/a38f2b10-ee8c-4e6c-9165-d673d9b1adbe/files/6025fe40-fee4-49b3-840e-44b939a0adbe.jpg',
];

const services = [
  { icon: 'Building2', text: 'Новостройки' },
  { icon: 'Home', text: 'Вторичное жильё' },
  { icon: 'FileCheck', text: 'Сделки любой сложности' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-56 md:w-56">
                <img
                  src="https://cdn.poehali.dev/projects/a38f2b10-ee8c-4e6c-9165-d673d9b1adbe/files/ca4b5030-601e-4555-9533-416adf61cf32.jpg"
                  alt="Агент по недвижимости в Белгороде"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Недвижимость в Белгороде
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Сделки любой сложности · Вторичка и новостройки
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {services.map((service) => (
                    <div
                      key={service.text}
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                    >
                      <Icon name={service.icon} size={18} className="text-white/90" />
                      <span className="text-sm font-medium text-white/90">{service.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 pt-6">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Написать в Telegram
                  </a>
                  <a
                    href="tel:+7"
                    className="flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    <Icon name="Phone" size={18} />
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

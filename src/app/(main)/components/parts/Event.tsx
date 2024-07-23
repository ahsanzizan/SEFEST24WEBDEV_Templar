import { Link } from '@/app/components/global/button';
import { H2, H3, P } from '@/app/components/global/text';
import { Event } from '@prisma/client';
import { FaArrowRight } from 'react-icons/fa';
import { FaNoteSticky } from 'react-icons/fa6';

const events: Event[] = [
  {
    id: '1',
    name: 'Indonesia Kenyang 2045',
    description:
      'Mewujudkan indonesia bebas dari kelaparan yang melanda selama tahun 2030-2044',
    date: new Date(),
    organizer_id: '',
    slug: 'ass'
  },
  {
    id: '2',
    name: 'Papua Makan Bersama 2025',
    description:
      'Melayani pulau papua untuk ketersediaan makanan. Ikuti event ini dan tunjukan rasa kemanusiaan mu!',
    date: new Date(),
    organizer_id: '',
    slug: 'ass'
  },
  {
    id: '3',
    name: 'Peduli Palu 2020',
    description:
      'Sebuah bencana alam yang melanda daerah sulawesi yang berfokus pada palu. Menyebabkan banyak nya rumah hancur, dan warga yang kelaparan',
    date: new Date(),
    organizer_id: '',
    slug: 'ass'
  }
];

export default function Events() {
  return (
    <section
      id="events"
      className="flex w-screen flex-col justify-center gap-y-8 p-4 sm:p-20"
    >
      <div className="mb-4 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <H2 className="mb-4 w-full sm:mb-0 sm:w-1/3">Event untuk Relawan</H2>
        <div className="flex w-full flex-col items-start gap-2 sm:w-1/2 sm:items-end">
          <P className="mb-2 text-left sm:text-right">
            Event-event yang sedang berlangsung pada FeedForward, anda dapat
            berkontribusi dengan menjadi relawan
          </P>
          <Link href={'/events'} variant={'default'}>
            Lihat semua{' '}
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {events ? (
          events.map((event) => (
            <div
              key={event.id}
              className="flex h-[320px] w-full flex-col justify-between rounded-lg border border-gray-400 bg-primary p-5 md:w-[32%]"
            >
              <div>
                <FaNoteSticky className="mb-4 text-3xl text-white" />
                <H3 className="mb-4 truncate">{event.name}</H3>
                <P className="line-clamp-4">{event.description}</P>
              </div>
              <Link href={`/events/${event.slug}`} variant={'default'}>
                Lebih detail
              </Link>
            </div>
          ))
        ) : (
          <P>Belum ada event apa-apa nih...</P>
        )}
      </div>
    </section>
  );
}

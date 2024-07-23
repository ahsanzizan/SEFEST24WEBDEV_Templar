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
      className="flex w-screen flex-col justify-center gap-y-8 p-20"
    >
      <div className="mb-4 flex items-center justify-between">
        <H2 className="w-1/3">Event untuk Relawan</H2>
        <div className="flex w-1/2 flex-col items-end gap-2">
          <P className="mb-2 text-right">
            Event-event yang sedang berlangsung pada FeedForward, anda dapat
            berkontribusi dengan menjadi relawan
          </P>
          <Link href={'/events'} variant={'default'}>
            Lihat semua{' '}
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-x-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex h-[320px] w-1/3 flex-col justify-between rounded-lg border border-gray-400 bg-primary p-5"
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
        ))}
      </div>
    </section>
  );
}

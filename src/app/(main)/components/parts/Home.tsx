import { Link } from '@/app/components/global/button';
import { H1, P } from '@/app/components/global/text';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <section id="home" className="flex h-[80vh] w-screen items-center p-20">
      <div className="mx-auto max-w-[80%] text-center">
        <H1 className="mb-4">
          Sumbangkan <span className="text-highlight">Pangan</span>, Atasi
          Kelaparan
        </H1>
        <P className="mb-8">
          Bergabung dan bantu kami optimalkan distribusi pangan untuk atasi
          kelaparan
        </P>
        <div className="mx-auto flex w-full items-center justify-center gap-5">
          <Link href={'/donor'} variant={'default'}>
            Mau Nyumbang{' '}
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
          <Link href={'/recipient'} variant={'inverse'}>
            Butuh Donor
          </Link>
        </div>
      </div>
    </section>
  );
}

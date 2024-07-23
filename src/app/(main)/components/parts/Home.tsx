import { Link } from '@/app/components/global/button';
import { H1, P } from '@/app/components/global/text';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      id="home"
      className="flex h-[80vh] w-screen items-center p-8 sm:p-20"
    >
      <div className="mx-auto max-w-[90%] text-center sm:max-w-[80%]">
        <H1 className="mb-4 text-3xl sm:text-4xl">
          Sumbangkan <span className="text-highlight">Pangan</span>, Atasi
          Kelaparan
        </H1>
        <P className="mb-8 text-lg sm:text-xl">
          Bergabung dan bantu kami optimalkan distribusi pangan untuk atasi
          kelaparan
        </P>
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href={'/donor'}
            variant={'default'}
            className="flex items-center"
          >
            Mau Nyumbang
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
          <Link
            href={'/recipient'}
            variant={'inverse'}
            className="flex items-center"
          >
            Butuh Donor
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { H2, H4, P } from '@/app/components/global/text';

export default function About() {
  return (
    <section
      id="about"
      className="flex w-screen items-center justify-center p-4 sm:p-20"
    >
      <div className="flex flex-col items-center justify-between gap-y-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <H2 className="mb-4">
            Pangan itu <span className="text-highlight-sec">Penting!</span>
          </H2>
          <div className="space-y-4">
            <P>
              <b>Surplus pangan</b> terjadi saat produksi makanan melebihi
              permintaan, disebabkan oleh produksi berlebih, distribusi buruk,
              pemborosan, dan produk yang dibuang meskipun masih layak.{' '}
              <b>Kerawanan pangan</b> terjadi ketika orang tidak memiliki akses
              cukup ke makanan bergizi karena kemiskinan, pengangguran, akses
              terbatas, dan bencana alam.{' '}
              <b>
                Dampaknya termasuk kesehatan buruk, kerugian ekonomi, dan dampak
                lingkungan negatif.
              </b>
            </P>
            <div>
              <H4 className="mb-2">Jadi Apa sih, FeedForward?</H4>
              <P>
                Kami ber-
                <b>
                  inisiatif untuk memanfaatkan teknologi digital untuk
                  menjembatani kesenjangan antara surplus pangan dan kerawanan
                  pangan
                </b>
                . Mengoptimalkan distribusi makanan berlebih kepada mereka yang
                membutuhkan, mengurangi limbah pangan, dan memberdayakan
                komunitas lokal untuk terlibat aktif dalam mengatasi masalah
                kelaparan.
              </P>
            </div>
          </div>
        </div>
        <div className="flex -space-x-10">
          <Image
            alt="Gambar 1"
            width={320}
            height={320}
            src="https://media.istockphoto.com/id/1457738274/photo/unrecognizable-woman-hands-out-food-donations-during-charity-drive.webp?b=1&s=170667a&w=0&k=20&c=tqZtASqRVjLIbLEBDNzxdZEhuUs6UDpfX9CBJ0xpAPM="
            className="mt-12 h-52 w-52 rounded-full bg-red-500 object-cover grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0 md:h-80 md:w-80"
          />
          <Image
            alt="Gambar 2"
            width={320}
            height={320}
            src="https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-32 w-32 rounded-full bg-red-500 object-cover grayscale transition-all duration-300 hover:rotate-12 hover:scale-110 hover:grayscale-0 md:h-64 md:w-64 lg:-mt-12"
          />
        </div>
      </div>
    </section>
  );
}

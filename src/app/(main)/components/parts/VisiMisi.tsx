import Image from 'next/image';
import { H2, P } from '@/app/components/global/text';

export default function VisiMisi() {
  return (
    <section
      id="tujuan"
      className="flex w-screen items-center justify-center p-20"
    >
      <div className="flex items-center justify-between space-x-10">
        <div className="w-1/2 space-y-6">
          <div>
            <H2 className="mb-6">
              <span className="text-highlight">Visi</span>
            </H2>
            <P>
              Menjadi platform terdepan dalam mengurangi pemborosan makanan dan
              memastikan setiap orang mendapatkan akses pangan yang layak,
              melalui donasi makanan yang efisien dan transparan.
            </P>
          </div>

          <div className="flex gap-4">
            <div className="h-80 w-44 rounded-full bg-red-500"></div>
            <div className="h-60 w-40 rounded-full bg-red-500"></div>
          </div>
        </div>

        <div>
          <Image
            alt="Gambar 1"
            width={320}
            height={320}
            src="https://media.istockphoto.com/id/1457738274/photo/unrecognizable-woman-hands-out-food-donations-during-charity-drive.webp?b=1&s=170667a&w=0&k=20&c=tqZtASqRVjLIbLEBDNzxdZEhuUs6UDpfX9CBJ0xpAPM="
            className="mt-12 h-96 w-72 rounded-full bg-red-500 object-cover grayscale"
          />
        </div>

        <div className="w-1/2">
          <div className="flex justify-end gap-4">
            <div className="h-60 w-40 rounded-full bg-red-500"></div>
            <div className="h-80 w-44 rounded-full bg-red-500"></div>
          </div>

          <H2 className="mb-4">
            <span className="text-highlight-sec">Misi</span>
          </H2>
          <P>
            Menghubungkan komunitas dengan membangun jaringan yang kuat antara
            penyumbang dan penerima makanan, termasuk individu, organisasi, dan
            lembaga amal. Selain itu, pengurangan pemborosan makanan dengan
            menciptakan solusi yang efektif dan efisien melalui donasi yang
            tepat sasaran. Berkomitmen untuk meningkatkan kesadaran masyarakat
            dengan memberikan edukasi tentang manajemen sisa makanan guna
            mengubah pola pikir dan perilaku masyarakat.
          </P>
        </div>
      </div>
    </section>
  );
}

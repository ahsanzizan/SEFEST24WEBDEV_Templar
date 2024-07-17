import Image from 'next/image';

const services: string[] = ['Donor', 'Recipient', 'Volunteer'];

export default function About() {
  return (
    <section className="flex h-screen w-screen flex-col justify-center gap-y-8 px-20">
      <h2 className="text-center text-5xl font-bold text-[#475443]">
        Our Service
      </h2>
      <p className="text-center text-lg text-[#475443]">
        Connect food donors (restaurants, grocery stores, etc) with food banks
        and shelters.Connect food donors (restaurants, grocery stores, etc) with
        food banks and shelters.
      </p>
      <div className="flex justify-between">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative h-[40vh] w-3/12 overflow-hidden rounded-lg"
          >
            <Image
              src="/dummy.jpeg"
              alt="Service"
              width={500}
              height={500}
              className="absolute h-full w-full object-cover brightness-50 transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute flex h-full flex-col gap-y-2 p-2">
              <h2 className="text-3xl font-semibold text-[#FFFBF2]">
                {service}
              </h2>
              <p className="text-justify text-lg text-[#FFFBF2]">
                Connect food donors (restaurants, grocery stores, etc) with food
                banks and shelters.Connect food donors (restaurants, grocery
                stores, etc) with food banks and shelters.
              </p>
              <p className="bg-accent absolute bottom-0 right-0 m-2 w-fit rounded-lg px-8 py-4 text-[#FFFBF2]">
                Donate Now
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

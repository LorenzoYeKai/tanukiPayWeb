import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-center gap-20 p-4">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/iconSquared.jpeg"
            alt="Logo"
            className="w-[128px] h-[128px] md:w-[256px] md:h-[256px]"
            width={512}
            height={512}
          />
          <p className="text-2xl md:text-8xl font-bold">
            TANUKI <span className="text-[#00cc7a]">PAY</span>
          </p>
        </div>
        <p className="text-lg md:text-4xl font-bold">
          Accept stablecoins in your store, restaurant, or event.
          <br />
          Pay with stablecoins at your favorite place.
        </p>
        <a
          href="https://forms.fillout.com/t/9A6sffB4Ymus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-md md:text-2xl font-bold text-[#00cc7a]">
            The APP will launch soon, register here for the waiting list
          </p>
        </a>
      </div>
    </div>
  );
}

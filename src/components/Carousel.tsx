import { PropsWithChildren } from "hono/jsx";

interface CarouselProps extends PropsWithChildren {
  items: { url: string; description: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <div
      class="swiper my-swiper"
      style="--swiper-theme-color: oklch(28.2% 0.091 267.935); --swiper-pagination-color: oklch(28.2% 0.091 267.935); --swiper-navigation-color: #737373;"
    >
      <div class="swiper-wrapper">
        {items.map((item, index) => (
          <div class="swiper-slide" key={index}>
            <img
              class="w-full h-full object-cover"
              src={item.url}
              alt={item.description}
            />
            <p class="text-white text-base/6 md:text-3xl/10 absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:px-16 py-8 bg-black/30 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/* <div class="swiper-button-next"></div> */}
      {/* <div class="swiper-button-prev"></div> */}
      <div class="swiper-pagination"></div>
    </div>
  );
}

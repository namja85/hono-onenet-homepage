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
            <img src={item.url} alt={item.description} />
            <p class="text-white text-3xl/10 absolute top-1/2 -translate-y-1/2 left-0 right-0 px-32 py-8 bg-black/30">
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

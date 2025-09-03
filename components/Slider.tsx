import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ images, isMobile = false }: any) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image: any, index: number) => (
          <CarouselItem key={index} className="w-full h-[75dvh] sm:h-[80vh] flex items-center justify-center">
            <Image
              src={image}
              alt=""
              // width={800}
              // height={400}
              quality={100}
              placeholder="blur"
              className={`${isMobile ? "w-auto h-full" : "w-full h-auto"}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;

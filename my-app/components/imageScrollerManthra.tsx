import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import work1 from '@/public/work1.jpg';
import work2 from '@/public/work2.jpg';
import work3 from '@/public/work3.jpg';
import work4 from '@/public/work4.jpg';


const ImageScrollerManthra = () => {
  return (
    <div className=" bg-transparent">
      <div className="items-center justify-center">
        
      </div>
      <HorizontalScrollCarousel />
      <div className=" items-center justify-center">
       
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["10%", "-25%"]);

  return (
    <section ref={targetRef} className="relative h-3/4">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[200px] w-[200px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-150 group-hover:scale-10"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ImageScrollerManthra;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/public/work1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/public/work2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/public/work3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/public/work4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/public/work1.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/public/work2.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/public/work3.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/public/work3.jpg",
    title: "Title 8",
    id: 8,
  },
  {
    url: "/public/work3.jpg",
    title: "Title 9",
    id: 9,
  },
  {
    url: "/public/work3.jpg",
    title: "Title 10",
    id: 10 ,
  },

];
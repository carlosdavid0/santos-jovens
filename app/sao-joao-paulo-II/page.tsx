"use client";

import { useMemo } from "react";
import { SaintStoriesCarousel } from "@/components/saints/SaintStoriesCarousel";
import type { Story } from "@/components/saints/types";

export default function SaoJoaoPauloIIPage() {
  const stories: Story[] = useMemo(
    () => [
      {
        id: "dor-esperanca",
        kicker: "Dor que virou missão",
        title: "Da dor à esperança",
        subtitle:
          "Karol Wojtyla enfrentou guerra, perdas e dor. Em Cristo, encontrou a força que depois entregou aos jovens.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Pope_John_Paul_II_%2818731175945%29.jpg",
        imagePosition: "50% 26%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#fb7185_0%,#e11d48_45%,#7e22ce_100%)]",
      },
      {
        id: "papa-jovens",
        kicker: "Juventude no centro",
        title: "Papa que confiava nos jovens",
        subtitle:
          "Desde 1978, ele repetia: os jovens são o presente da Igreja. Falava com verdade, exigência e confiança.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Portrait_of_the_Pope_John_Paul_II.JPG",
        imagePosition: "50% 18%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0%,#2563eb_45%,#1d4ed8_100%)]",
      },
      {
        id: "jmj",
        kicker: "Uma geração reunida",
        title: "Nasce a JMJ",
        subtitle:
          "Em 1985 nasceu a Jornada Mundial de Juventude: milhões de jovens, um só coração. Um encontro real com Cristo e com a Igreja no mundo inteiro.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Pope_John_Paul_II.jpg",
        imagePosition: "50% 32%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,#ea580c_45%,#be123c_100%)]",
      },
      {
        id: "nao-tenhais-medo",
        kicker: "Coragem para decidir",
        title: "Não tenhais medo",
        subtitle:
          "Ele chamava os jovens a viver sem medo: contra a corrente, com pureza, vocação e coragem para transformar o mundo.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/be/Jan_Pawe%C5%82_II%2C_Pozna%C5%84_1997_%281%29.jpg",
        imagePosition: "50% 36%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0%,#0ea5e9_45%,#4f46e5_100%)]",
      },
      {
        id: "legado",
        kicker: "Sinal para o futuro",
        title: "Legado que permanece",
        subtitle:
          "Mesmo frágil no fim da vida, ele continuou firme. Seu legado prova: santidade é possível em qualquer idade.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/aa/Portrait_of_Pope_John_Paul_II.jpg",
        imagePosition: "50% 22%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#4ade80_0%,#16a34a_45%,#14532d_100%)]",
      },
      {
        id: "equipe-sao-joao-paulo-ii",
        kicker: "Encerramento",
        title: "São João Paulo II, rogai por nós.",
        subtitle: "Você faz parte da equipe de São João Paulo II",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/aa/Portrait_of_Pope_John_Paul_II.jpg",
        imagePosition: "50% 20%",
        gradient:
          "bg-[radial-gradient(circle_at_20%_20%,#a855f7_0%,#7e22ce_50%,#312e81_100%)]",
      },
    ],
    [],
  );
  return <SaintStoriesCarousel stories={stories} profileAlt="São João Paulo II" />;
}

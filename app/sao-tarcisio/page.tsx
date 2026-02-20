import type { Metadata } from "next";
import { SaintStoriesCarousel } from "@/components/saints/SaintStoriesCarousel";
import type { Story } from "@/components/saints/types";

export const metadata: Metadata = {
  title: "São Tarcísio",
  description: "Histórias e reflexões sobre São Tarcísio para a juventude.",
  openGraph: {
    title: "São Tarcísio",
    description: "Histórias e reflexões sobre São Tarcísio para a juventude.",
    images: [
      {
        url: "https://diocesedeamparo.org.br/wp-content/uploads/2016/08/Tarc%C3%ADsio.jpg",
      },
    ],
  },
};

const stories: Story[] = [
  {
    id: "quem-foi-sao-tarcisio",
    kicker: "Quem foi São Tarcísio",
    title: "Jovem mártir da Igreja primitiva",
    subtitle:
      "São Tarcísio foi um jovem mártir que viveu em Roma no século III, durante as perseguições aos cristãos. Ele servia como acólito nas celebrações.",
    imageUrl:
      "https://diocesedeamparo.org.br/wp-content/uploads/2016/08/Tarc%C3%ADsio.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#f97316_0%,#ea580c_45%,#7c2d12_100%)]",
  },
  {
    id: "missao-jovem-acolito",
    kicker: "Sua missão como jovem acólito",
    title: "Amor profundo pela Eucaristia",
    subtitle:
      "Durante um período de perseguição, Tarcísio se dispôs a levar a Eucaristia aos prisioneiros, confiando que sua juventude protegeria Jesus presente na comunhão.",
    imageUrl:
      "https://franciscanos.org.br/vidacrista/wp-content/uploads/2019/08/1508-sao-tarcisio.jpg",
    imagePosition: "50% 22%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#38bdf8_0%,#0ea5e9_45%,#1e3a8a_100%)]",
  },
  {
    id: "amor-acima-de-tudo",
    kicker: "Amor pela Eucaristia acima de tudo",
    title: "Defendeu o tesouro com a própria vida",
    subtitle:
      "Enquanto carregava a Santa Comunhão, foi confrontado por um grupo. Tarcísio se recusou a entregar a Eucaristia e preferiu protegê-la com a própria vida.",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/695627/sao_tarcisio_busto_resina_67cm_359_1_55f1835c6b023bc80871411142209d6c_20251124100028.jpg",
    imagePosition: "50% 24%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#a78bfa_0%,#7c3aed_45%,#312e81_100%)]",
  },
  {
    id: "martirio-e-legado",
    kicker: "Martírio e legado",
    title: "Coragem e fidelidade até o fim",
    subtitle:
      "Pela sua fidelidade, Tarcísio foi agredido até a morte, defendendo a presença de Cristo na Eucaristia. Seu testemunho inspirou gerações de jovens na fé.",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/695627/sao_tarcisio_busto_resina_67cm_359_1_55f1835c6b023bc80871411142209d6c_20251124100028.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#fb7185_0%,#e11d48_45%,#881337_100%)]",
  },
  {
    id: "exemplo-juventude-catolica",
    kicker: "Exemplo para a juventude católica",
    title: "Patrono dos coroinhas e acólitos",
    subtitle:
      "é patrono dos coroinhas, acólitos e das primeiras comunhões. Sua festa é celebrada em 15 de agosto, lembrando que fé e serviço transformam vidas.",
    imageUrl: "https://i.ibb.co/BvrQVjW/Imagem-Instagram.jpg",
    imagePosition: "50% 18%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#4ade80_0%,#16a34a_45%,#14532d_100%)]",
  },
  {
    id: "encerramento-sao-tarcisio",
    kicker: "Encerramento",
    title: "São Tarcísio, rogai por nós.",
    subtitle: "Você faz parte da equipe de São Tarcísio",
    imageUrl:
      "https://diocesedeamparo.org.br/wp-content/uploads/2016/08/Tarc%C3%ADsio.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,#d97706_50%,#78350f_100%)]",
  },
];

export default function SaoTarcisioPage() {
  return <SaintStoriesCarousel stories={stories} profileAlt="São Tarcísio" />;
}

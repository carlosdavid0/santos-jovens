import { SaintStoriesCarousel } from "@/components/saints/SaintStoriesCarousel";
import type { Story } from "@/components/saints/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "São Carlo Acutis",
  description: "Histórias e reflexões sobre São Carlo Acutis para a juventude.",
  openGraph: {
    title: "São Carlo Acutis",
    description: "Histórias e reflexões sobre São Carlo Acutis para a juventude.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Carlo_Acutis_at_SMCB.jpg",
      },
    ],
  },
};

const stories: Story[] = [
  {
    id: "quem-foi",
    kicker: "Quem foi São Carlo Acutis",
    title: "Um jovem comum com fé extraordinária",
    subtitle:
      "Carlo Acutis nasceu em 3 de maio de 1991, em Londres, e foi criado em Milão. Mesmo jovem, viveu para Jesus com profundidade.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Carlo_Acutis.jpg/250px-Carlo_Acutis.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#fb7185_0%,#e11d48_45%,#7e22ce_100%)]",
  },
  {
    id: "juventude-fe-viva",
    kicker: "Juventude e fé viva",
    title: "Sempre unido a Jesus",
    subtitle:
      "Ainda menino, Carlo dizia que seu objetivo era estar sempre unido a Jesus. Rezava o terço e vivia a Adoração Eucarística com alegria.",
    imageUrl:
      "https://www.bonsfluidos.com.br/wp-content/uploads/2025/08/CAPA-BONS-FLUIDOS-2025-08-27T175150.386.jpg",
    imagePosition: "50% 24%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0%,#2563eb_45%,#1d4ed8_100%)]",
  },
  {
    id: "evangelizacao-moderna",
    kicker: "Evangelização moderna",
    title: "Santidade também no digital",
    subtitle:
      "Com talento para programação, Carlo criou um site sobre milagres eucarísticos, levando Cristo aos jovens conectados.",
    imageUrl:
      "https://diocesedecampos.org.br/wp-content/uploads/2020/10/foto-1.jpg",
    imagePosition: "50% 18%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,#ea580c_45%,#be123c_100%)]",
  },
  {
    id: "testemunho-jovens",
    kicker: "Testemunho entre os jovens",
    title: "Fé vivida no dia a dia",
    subtitle:
      "Carlo ajudava os pobres, defendia os mais fracos e falava de Deus com naturalidade. Sua vida simples virou referência para a juventude.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Exposi%C3%A7%C3%A3o_de_rel%C3%ADquia_de_Carlo_Acutis_no_Rio_de_Janeiro.jpg",
    imagePosition: "50% 22%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0%,#0ea5e9_45%,#4f46e5_100%)]",
  },
  {
    id: "sinal-esperanca",
    kicker: "Sinal de esperança para os jovens",
    title: "Santidade e juventude unidas",
    subtitle:
      "Carlo morreu aos 15 anos de leucemia e foi canonizado em 2025, tornando-se um dos santos mais jovens da Igreja.",
    imageUrl:
      "https://wp.pt.aleteia.org/wp-content/uploads/sites/5/2020/10/IMG_1224.jpeg?w=720",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#4ade80_0%,#16a34a_45%,#14532d_100%)]",
  },
  {
    id: "equipe-sao-carlo-acutis",
    kicker: "Encerramento",
    title: "São Carlo Acutis, rogai por nós.",
    subtitle: "Você faz parte da equipe de São Carlo Acutis",
    imageUrl:
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/508e/live/f43954d0-192f-11ef-baa7-25d483663b8e.jpg.webp",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#a855f7_0%,#7e22ce_50%,#312e81_100%)]",
  },
];

export default function SaoCarloAcutisPage() {
  return <SaintStoriesCarousel stories={stories} profileAlt="São Carlo Acutis" />;
}

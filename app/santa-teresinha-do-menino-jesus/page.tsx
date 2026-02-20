import type { Metadata } from "next";
import { SaintStoriesCarousel } from "@/components/saints/SaintStoriesCarousel";
import type { Story } from "@/components/saints/types";

export const metadata: Metadata = {
  title: "Santa Teresinha do Menino Jesus",
  description:
    "Histórias e reflexões sobre Santa Teresinha do Menino Jesus para a juventude.",
  openGraph: {
    title: "Santa Teresinha do Menino Jesus",
    description:
      "Histórias e reflexões sobre Santa Teresinha do Menino Jesus para a juventude.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Sainte_therese_de_lisieux.jpg",
      },
    ],
  },
};

const stories: Story[] = [
  {
    id: "quem-foi",
    kicker: "Quem foi Santa Teresinha",
    title: "Uma jovem de coração inteiro",
    subtitle:
      "Marie-Francoise-Therese Martin nasceu em 2 de janeiro de 1873, na França, entrou no Carmelo de Lisieux aos 15 anos",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Sainte_therese_de_lisieux.jpg",
    imagePosition: "50% 24%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#fb7185_0%,#e11d48_45%,#7e22ce_100%)]",
  },
  {
    id: "pequeno-caminho",
    kicker: "O Pequeno Caminho",
    title: "Santidade nas pequenas coisas",
    subtitle:
      "Teresinha ensinou que a santidade nasce no cotidiano: servir, sorrir e oferecer tudo a Deus com amor. Confiança de criança e entrega total em cada gesto simples.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Th%C3%A9r%C3%A8se_de_Lisieux_in_1885.jpg",
    imagePosition: "50% 22%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0%,#2563eb_45%,#1d4ed8_100%)]",
  },
  {
    id: "juventude-catolica",
    kicker: "Amor para a juventude católica",
    title: "Fé jovem, simples e profunda",
    subtitle:
      "Sua vida mostra aos jovens que não é preciso ser perfeito para amar a Deus com profundidade. Ela viveu dúvidas e sofrimento, oferecendo tudo por Cristo e pelas almas.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Therese_von_Lisieux.jpg",
    imagePosition: "50% 26%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,#ea580c_45%,#be123c_100%)]",
  },
  {
    id: "legado-missao",
    kicker: "Legado e missão universal",
    title: "Do claustro para o mundo inteiro",
    subtitle:
      "Mesmo sem sair do convento, foi proclamada Padroeira Universal das Missões em 1927. Seus escritos seguem formando grupos, retiros e jovens no caminho de Deus.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Saint_Th%C3%A9r%C3%A8se_of_Lisieux_Shrine_-_St_John_the_Evangelist_Cathedral_%2833576064408%29.jpg",
    imagePosition: "50% 18%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0%,#0ea5e9_45%,#4f46e5_100%)]",
  },
  {
    id: "chuva-de-rosas",
    kicker: "O amor continua a florir",
    title: "Uma chuva de rosas ao mundo",
    subtitle:
      "Teresinha prometeu uma chuva de rosas como sinal de graças. Mensagem-chave: a santidade está no amor simples, confiando em Deus como uma criança confia no Pai.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Th%C3%A9r%C3%A8se-vu-Lisieux-Statu%2C_Nidderdonwen-101.jpg",
    imagePosition: "50% 24%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#4ade80_0%,#16a34a_45%,#14532d_100%)]",
  },
  {
    id: "encerramento-santa-teresinha",
    kicker: "Encerramento",
    title: "Santa Teresinha do Menino Jesus, rogai por nós.",
    subtitle: "Você faz parte da equipe de Santa Teresinha",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Teresa-de-Lisieux.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#a855f7_0%,#7e22ce_50%,#312e81_100%)]",
  },
];

export default function SantaTeresinhaDoMeninoJesusPage() {
  return (
    <SaintStoriesCarousel
      stories={stories}
      profileAlt="Santa Teresinha do Menino Jesus"
    />
  );
}

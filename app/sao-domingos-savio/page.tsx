import type { Metadata } from "next";
import { SaintStoriesCarousel } from "@/components/saints/SaintStoriesCarousel";
import type { Story } from "@/components/saints/types";

export const metadata: Metadata = {
  title: "São Domingos Sávio",
  description: "Histórias e reflexões sobre São Domingos Sávio para a juventude.",
  openGraph: {
    title: "São Domingos Sávio",
    description: "Histórias e reflexões sobre São Domingos Sávio para a juventude.",
    images: [
      {
        url: "https://arquidiocesebh.org.br/wp-content/uploads/2017/03/9mar%C3%A7o-sao-domingos-savio.jpg",
      },
    ],
  },
};

const stories: Story[] = [
  {
    id: "jovem-santo-jovens",
    kicker: "Um jovem santo para os jovens",
    title: "Antes morrer do que pecar",
    subtitle:
      "São Domingos Sávio nasceu em 1842, na Itália, e desde pequeno decidiu viver totalmente para Deus, acreditando que a santidade é possível para todo jovem.",
    imageUrl:
      "https://arquidiocesebh.org.br/wp-content/uploads/2017/03/9mar%C3%A7o-sao-domingos-savio.jpg",
    imagePosition: "50% 22%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#fb7185_0%,#e11d48_45%,#7e22ce_100%)]",
  },
  {
    id: "encontro-dom-bosco",
    kicker: "O encontro que mudou tudo",
    title: "No Oratório com Dom Bosco",
    subtitle:
      "Aos 12 anos, Domingos conheceu São João Bosco e encontrou um caminho de alegria, disciplina e vida sacramental. Abraçou essa missão com intensidade.",
    imageUrl:
      "https://comshalom.org/wp-content/uploads/2021/05/Curiosidades-Sobre-Dom-Bosco-8-840x553.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0%,#2563eb_45%,#1d4ed8_100%)]",
  },
  {
    id: "amor-vira-missao",
    kicker: "Amor que se transforma em missão",
    title: "Companhia da Imaculada",
    subtitle:
      "Com os próprios colegas, fundou a Companhia da Imaculada para ajudar Dom Bosco na formação espiritual. Sua liderança era caridosa e inspiradora.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygBh_cDSjrZUNOqCafe42FBTa49RyKnZV7Q&s",
    imagePosition: "50% 24%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#f59e0b_0%,#ea580c_45%,#be123c_100%)]",
  },
  {
    id: "radicalidade-alegria",
    kicker: "Juventude com radicalidade e alegria",
    title: "Santidade com propósito",
    subtitle:
      "Domingos vivia com alegria, estudo, disciplina e amizade com Jesus. Mostrou que ser jovem católico é viver com propósito, devoção a Maria e serviço aos outros.",
    imageUrl:
      "https://blog.cancaonova.com/amigosdoceu/files/2015/05/C%C3%B3pia-de-01-San_Domenico_Savio-4.jpg",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0%,#0ea5e9_45%,#4f46e5_100%)]",
  },
  {
    id: "modelo-juventude-catolica",
    kicker: "Um modelo eterno para a juventude católica",
    title: "Santidade possível na juventude",
    subtitle:
      "Domingos morreu aos 14 anos, mas deixou um legado imenso: não é preciso esperar a vida adulta para amar a Igreja, evangelizar e formar outros jovens.",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizFuQbX9eISrjhXNI8ysxRkt5LHXSAOV68i3P2t9fBkJs9_msvcx9m0EIXQOdmjH19l1H8GtAatyPTrg8Qi1T3VQuk5wvdCh3dVYvJ8Z5I1bRXj7hd-Kx5qWIGtYQNHFvk_QsWBARzXFZA/s1600/423002_363804926986341_100000705117629_1192301_224245905_n.jpg",
    imagePosition: "50% 18%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#4ade80_0%,#16a34a_45%,#14532d_100%)]",
  },
  {
    id: "encerramento-sao-domingos-savio",
    kicker: "Encerramento",
    title: "São Domingos Sávio, rogai por nós.",
    subtitle: "Você faz parte da equipe de São Domingos Sávio",
    imageUrl:
      "https://idfg.com.br/wp-content/uploads/2021/08/ori_7c7d5e4797a26105966c005643974658.gif",
    imagePosition: "50% 20%",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,#a855f7_0%,#7e22ce_50%,#312e81_100%)]",
  },
];

export default function SaoDomingosSavioPage() {
  return <SaintStoriesCarousel stories={stories} profileAlt="São Domingos Sávio" />;
}

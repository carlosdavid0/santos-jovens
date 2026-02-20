"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Story = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imagePosition: string;
  gradient: string;
};

export default function SantaTeresinhaDoMeninoJesusPage() {
  const stories: Story[] = useMemo(
    () => [
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
    ],
    [],
  );
  const [activeStory, setActiveStory] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [incomingStory, setIncomingStory] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [animate, setAnimate] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const transitionToStory = (nextIndex: number) => {
    if (nextIndex === activeStory || incomingStory !== null) {
      return;
    }
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }
    setDirection(nextIndex > activeStory ? 1 : -1);
    setIncomingStory(nextIndex);
    setAnimate(false);
    setDragOffset(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    });

    transitionTimer.current = setTimeout(() => {
      setActiveStory(nextIndex);
      setIncomingStory(null);
      setAnimate(false);
    }, 280);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    dragStartX.current = event.clientX;
    setIsDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null || incomingStory !== null) {
      return;
    }
    const delta = event.clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const onPointerEnd = () => {
    const threshold = 60;
    if (dragOffset < -threshold && activeStory < stories.length - 1) {
      transitionToStory(activeStory + 1);
    } else if (dragOffset > threshold && activeStory > 0) {
      transitionToStory(activeStory - 1);
    }
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const goToNextStory = () => {
    if (activeStory < stories.length - 1) {
      transitionToStory(activeStory + 1);
    }
  };

  const goToPreviousStory = () => {
    if (activeStory > 0) {
      transitionToStory(activeStory - 1);
    }
  };

  const previewDirection: 1 | -1 = dragOffset > 0 ? -1 : 1;
  const previewIndex =
    previewDirection === 1
      ? activeStory < stories.length - 1
        ? activeStory + 1
        : null
      : activeStory > 0
        ? activeStory - 1
        : null;
  const shouldShowPreview =
    isDragging && Math.abs(dragOffset) > 2 && previewIndex !== null;
  const previewTravel = Math.min(Math.abs(dragOffset) * 0.45, 86);
  const previewOffset = 86 - previewTravel;
  const previewTranslate = previewDirection === 1 ? previewOffset : -previewOffset;
  const previewRotate = previewDirection === 1 ? -18 : 18;
  const previewOpacity = 0.72 + Math.min(Math.abs(dragOffset) / 220, 1) * 0.28;

  const renderStoryContent = (storyIndex: number) => {
    const story = stories[storyIndex];
    return (
      <>
        <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/65" />
        <div className={`absolute inset-0 opacity-90 ${story.gradient}`} />
        <div className="absolute -top-24 -right-14 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-black/30 blur-3xl" />
        <section
          className="relative z-10 flex h-full touch-pan-y flex-col px-3 text-white select-none"
          style={{
            paddingTop: "calc(env(safe-area-inset-top) + 12px)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)",
          }}
        >
          <div className="mb-3 flex gap-1">
            {stories.map((item, index) => (
              <span
                key={item.id}
                className={`h-1 flex-1 rounded-full ${
                  index <= storyIndex ? "bg-white/95" : "bg-white/35"
                }`}
              />
            ))}
          </div>

          <header className="mb-5 flex items-center justify-between">
            <a
              href="https://www.instagram.com/juventudedevarjota/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <div className="rounded-full bg-linear-to-tr from-fuchsia-500 via-orange-400 to-yellow-300 p-[2px]">
                <img
                  src="https://i.ibb.co/Nn9N46g4/Imagem-Instagram-1.jpg"
                  alt="Santa Teresinha do Menino Jesus"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">juventudedevarjota</p>
                <p className="text-xs text-white/75">Story {storyIndex + 1}</p>
              </div>
            </a>
            <button
              type="button"
              aria-label="Fechar story"
              className="text-xl leading-none text-white/85"
            >
              ×
            </button>
          </header>

          <div className="mb-5">
            <div className="relative h-48 overflow-hidden rounded-2xl border border-white/20 bg-black/20">
              <img
                src={story.imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-[2px]"
                style={{ objectPosition: story.imagePosition }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15" />
              <img
                src={story.imageUrl}
                alt={story.title}
                className="relative z-10 h-full w-full object-contain opacity-95"
                style={{ objectPosition: story.imagePosition }}
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              {story.kicker}
            </p>
          </div>

          <div className="mt-auto mb-8 rounded-2xl border border-white/15 bg-black/20 px-5 py-5 text-left backdrop-blur-xs">
            <p className="text-4xl leading-tight font-black tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]">
              {story.title}
            </p>
            <p className="mt-3 text-lg leading-8 text-white/95">{story.subtitle}</p>
          </div>

          <footer className="mt-auto flex items-center gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-white/45 bg-black/30 px-4 py-3 text-left text-sm text-white/85 backdrop-blur-sm"
            >
              Rezar por essa intenção
            </button>
            <button
              type="button"
              aria-label="Curtir"
              className="h-11 w-11 rounded-full border border-white/45 bg-black/30 text-lg"
            >
              ♡
            </button>
            <button
              type="button"
              aria-label="Compartilhar"
              className="h-11 w-11 rounded-full border border-white/45 bg-black/30 text-lg"
            >
              ↗
            </button>
          </footer>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-dvh bg-black font-sans text-white md:flex md:items-center md:justify-center md:bg-[#0c0c0f] md:p-4">
      <main className="relative h-dvh w-full overflow-hidden bg-black md:h-[90dvh] md:max-w-[390px] md:rounded-[32px] md:border md:border-white/10 md:shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        <div
          className="absolute inset-0 perspective-distant"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onPointerLeave={onPointerEnd}
        >
          <button
            type="button"
            aria-label="Story anterior"
            onClick={goToPreviousStory}
            className="absolute left-0 z-40 w-[24%]"
            style={{
              top: "calc(env(safe-area-inset-top) + 110px)",
              bottom: "calc(env(safe-area-inset-bottom) + 100px)",
            }}
          />
          <button
            type="button"
            aria-label="Próximo story"
            onClick={goToNextStory}
            className="absolute right-0 z-40 w-[24%]"
            style={{
              top: "calc(env(safe-area-inset-top) + 110px)",
              bottom: "calc(env(safe-area-inset-bottom) + 100px)",
            }}
          />

          {incomingStory === null && (
            <>
              {shouldShowPreview && (
                <div
                  className="absolute inset-0 z-20 overflow-hidden rounded-[24px] md:rounded-[28px] pointer-events-none"
                  style={{
                    transform: `translateX(${previewTranslate}%) rotateY(${previewRotate}deg) scale(0.96)`,
                    transformOrigin:
                      previewDirection === 1 ? "left center" : "right center",
                    opacity: previewOpacity,
                    transition:
                      !isDragging
                        ? "transform 220ms ease-out, opacity 220ms ease-out"
                        : "none",
                  }}
                >
                  {renderStoryContent(previewIndex)}
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              )}

              <div
                className="absolute inset-0 z-30"
                style={{
                  transform: `translateX(${dragOffset}px)`,
                  transition:
                    !isDragging
                      ? "transform 220ms ease-out"
                      : "none",
                }}
              >
                {renderStoryContent(activeStory)}
              </div>
            </>
          )}

          {incomingStory !== null && (
            <>
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                  transform: animate
                    ? `translateX(${direction === 1 ? "-100%" : "100%"})`
                    : "translateX(0%)",
                }}
              >
                {renderStoryContent(activeStory)}
              </div>
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                  transform: animate
                    ? "translateX(0%)"
                    : `translateX(${direction === 1 ? "100%" : "-100%"})`,
                }}
              >
                {renderStoryContent(incomingStory)}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

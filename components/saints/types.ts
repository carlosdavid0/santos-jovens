export type Story = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imagePosition: string;
  gradient: string;
};

export type SaintStoriesCarouselProps = {
  stories: Story[];
  profileAlt: string;
};

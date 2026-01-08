import LinkButton from "@/components/LinkButton";
import heptagram from "@/assets/heptagram.png";
import {
  SpotifyIcon,
  AppleMusicIcon,
  SoundCloudIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  TikTokIcon,
  InstagramIcon,
  ThreadsIcon,
  ShoppingBagIcon,
} from "@/components/icons/MusicIcons";

const Index = () => {
  const musicLinks = [
    { href: "https://open.spotify.com/artist/3G1VYRdglHiZ9pKPfzglct?si=sqj2GDvFTW6uJAxMmvrdEQ", icon: <SpotifyIcon />, label: "Spotify" },
    { href: "https://music.apple.com/us/artist/gasper-black/1808608625", icon: <AppleMusicIcon />, label: "Apple Music" },
    { href: "https://on.soundcloud.com/Fadv2fmPYgxe2Ed9Fo", icon: <SoundCloudIcon />, label: "SoundCloud" },
    { href: "https://youtube.com/@gasperblack33?si=BhqioMDN38x8wH1s", icon: <YouTubeIcon />, label: "YouTube" },
    { href: "https://music.youtube.com/channel/UCcMWzeNaTI_9-yVDuDJdGaw?si=VWyMW28u-M3Hr1S5", icon: <YouTubeMusicIcon />, label: "YouTube Music" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/gasperblack33?igsh=MTE1anJzYnIxNG5ieQ==", icon: <InstagramIcon />, label: "Instagram" },
    { href: "https://www.threads.net/@gasperblack33", icon: <ThreadsIcon />, label: "Threads" },
    { href: "https://www.tiktok.com/@gasperblack33?_r=1&_t=ZT-92tTy9QTNJf", icon: <TikTokIcon />, label: "TikTok" },
  ];

  const merchLinks = [
    { href: "https://black33.net/", icon: <ShoppingBagIcon />, label: "Merch" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Heptagram */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <img 
          src={heptagram} 
          alt="" 
          className="w-[80vmin] h-[80vmin] object-contain"
        />
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Artist Name */}
        <h1 className="font-gothic text-5xl md:text-6xl text-foreground mb-12 text-center tracking-wide">
          Gasper Black
        </h1>

        {/* Music Section */}
        <div className="w-full mb-10">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Music
          </h2>
          <div className="flex flex-col gap-3">
            {musicLinks.map((link) => (
              <LinkButton key={link.label} {...link} />
            ))}
          </div>
        </div>

        {/* Socials Section */}
        <div className="w-full mb-10">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Socials
          </h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <LinkButton key={`social-${link.label}`} {...link} />
            ))}
          </div>
        </div>

        {/* Merch Section */}
        <div className="w-full mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Merch
          </h2>
          <div className="flex flex-col gap-3">
            {merchLinks.map((link) => (
              <LinkButton key={`merch-${link.label}`} {...link} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
          © 2025 Gasper Black
        </footer>
      </div>
    </div>
  );
};

export default Index;

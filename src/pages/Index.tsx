import LinkButton from "@/components/LinkButton";
import {
  SpotifyIcon,
  AppleMusicIcon,
  SoundCloudIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
  TikTokIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
} from "@/components/icons/MusicIcons";

const Index = () => {
  const musicLinks = [
    { href: "#", icon: <SpotifyIcon />, label: "Spotify" },
    { href: "#", icon: <AppleMusicIcon />, label: "Apple Music" },
    { href: "#", icon: <SoundCloudIcon />, label: "SoundCloud" },
    { href: "#", icon: <YouTubeIcon />, label: "YouTube" },
    { href: "#", icon: <YouTubeMusicIcon />, label: "YouTube Music" },
    { href: "#", icon: <TikTokIcon />, label: "TikTok" },
    { href: "#", icon: <InstagramIcon />, label: "Instagram" },
  ];

  const socialLinks = [
    { href: "#", icon: <InstagramIcon />, label: "Instagram" },
    { href: "#", icon: <XIcon />, label: "X" },
    { href: "#", icon: <TikTokIcon />, label: "TikTok" },
    { href: "#", icon: <FacebookIcon />, label: "Facebook" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
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
        <div className="w-full mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Socials
          </h2>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <LinkButton key={`social-${link.label}`} {...link} />
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

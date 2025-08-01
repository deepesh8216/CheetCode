import { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Unleash the Power of CheatCode
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
          See how CheatCode empowers you to tackle any question, dominate job interviews, and outshine others.
          </p>
        </div>

        <div
  className="rounded-[6px] border border-primary/40 overflow-hidden 
             shadow-glow hover:shadow-luxury transition-all duration-500"
>
  <video
    ref={videoRef}
    className="w-full h-auto rounded-[6px]"
    autoPlay
    muted
    loop
    playsInline
    controls
    controlsList="nofullscreen"
    poster="/CheatCode-Demo-Picture.png"
  >
    <source src="/CheatCode-Video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      </div>
    </section>
  );
};

export default VideoSection;

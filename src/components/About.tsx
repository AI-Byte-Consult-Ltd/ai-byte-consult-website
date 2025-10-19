const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-purple-glow opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About the Company
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            AI Byte Consult Ltd. is a technology firm uniting automation, blockchain, and artificial intelligence into a single ecosystem. From NICS AI multi-channel systems to NFT-based digital intelligence, we develop real-world solutions powered by the next generation of AI.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our mission is to transform how businesses operate by integrating cutting-edge technology with practical, scalable solutions that drive growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
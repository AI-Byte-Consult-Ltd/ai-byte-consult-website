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
            AI Byte Consult Ltd. is a global technology company specializing in artificial intelligence and automation. We design intelligent systems that optimize operations, enhance decision-making, and accelerate digital transformation for organizations worldwide.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our AI-driven solutions serve diverse industries — from B2B and B2C enterprises to hospitality, healthcare, logistics, geology, and scientific research. We build scalable platforms that help businesses automate workflows, analyze data efficiently, and unlock new opportunities through intelligent innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

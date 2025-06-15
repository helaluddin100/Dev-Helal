import HeroSection from '@/components/home/HeroSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ServicesSection from '@/components/home/ServicesSection';
import SkillsSection from '@/components/home/SkillsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import BlogSection from '@/components/home/BlogSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
    </>
  );
}
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import { useLocale } from "@/i18n/useLocale";

const Index = () => {
  const { t } = useLocale();
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <footer className="py-12 border-t border-border">
        <div className="container text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">©</span> {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

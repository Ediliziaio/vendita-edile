import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const AgencyProblemsSection = () => {
  const falsePromises = [
    {
      promise: '"Avrai un consulente dedicato."',
      reality: 'il "consulente" non ha mai venduto un infisso',
    },
    {
      promise: '"Sarai seguito passo dopo passo."',
      reality: "risponde quando può, sparisce quando ci sono problemi veri",
    },
    {
      promise: '"Costruiremo una strategia su misura."',
      reality: "non conosce una trattativa edile",
    },
  ];

  return (
    <section id="problema" className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Per anni ti hanno detto:
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6 mb-16" staggerDelay={0.15}>
          {falsePromises.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 md:p-8 bg-background border border-border rounded-xl"
              >
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 line-through decoration-destructive/50 decoration-2">
                  {item.promise}
                </p>
                <p className="text-muted-foreground text-lg">
                  Poi inizi a lavorare… e ti accorgi che{" "}
                  <span className="text-foreground">{item.reality}</span>
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AgencyProblemsSection;

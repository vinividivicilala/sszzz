import { motion } from "framer-motion";
import ContactCard from "./contact-card";

function AboutMe() {
  return (
    <section className="pt-20">
      <h2 className="text-4xl text-center font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8" id="about-me">
      <div className="lg:w-1/2">
        <ContactCard />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-center font-semibold italic text-gray-900 dark:text-slate-500 mb-6"
        >
          &quot;Make your work so uniquely yours, it speaks before your name does.&quot;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300"
        >
          Hi, I&apos;m Ayush Tiwari, a passionate software developer with a keen interest in Machine Learning and Generative AI. Despite a non-Computer Science major, I've demonstrated a passion for software development with substantial industry experience, bridging the gap through my current project applying machine learning to thermoelectrics.. When I&apos;m not coding, you can find me participating in hackathons, solving complex problems on competitive programming platforms, or contributing to open-source projects. I believe in the power of technology to make a positive impact on the world, and I&apos;m excited to be part of this ever-evolving field.
        </motion.p>
      </div>
    </div>
    </section>
  );
}

export default AboutMe;
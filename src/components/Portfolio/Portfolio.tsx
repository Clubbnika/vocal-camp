"use client";

import { motion } from "framer-motion";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-[1040px] w-full mx-auto overflow-x-hidden" style={{ marginTop: '1rem' }}>
      <div className="bg-black/70 pb-4 mb-6 flex flex-col items-center p-4 w-full">
        
        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Виступи наших учнів</h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4 mb-8"
        >
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/LASgA6FLTFM?si=thq_LwWOCRuVjiCm" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/e73GfUXs70g?si=yVRwNlfiu3Qkg2eY" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/LWJOfSRnAx8?si=4THUvgxAQ9lTu9_Q" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
        </motion.div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Пісні наших учнів</h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4 mb-4"
        >
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/mWCe8-KCwMY?si=MTquJT4fw6jwCv-7" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/8CUN9F40ssc?si=zB7skyhXUUhvkQSp" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/LeQuaHkKgvE?si=_r4PlolmoHZuMlEn" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4 mb-8"
        >
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/oEq1VTqhWAI?si=qwBBfbw-yiy4iHVq" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/wdGEk00_WYI?si=asOduNQkVGQxjx5N" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
        </motion.div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Мюзикли, поставлені нашими учнями</h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4"
        >
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/ORQGY3T4AS8?si=Ajjm95udjowxwfDt" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/5uVoLDR-oK4?si=MLb7YLTBmns67rwA" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
          <motion.iframe variants={itemVariants} src="https://www.youtube.com/embed/rJtoYWTs3Ns?si=JetgljDo9Q7w3ain" frameBorder="0" allowFullScreen className="w-full md:w-1/3 h-[200px]" />
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
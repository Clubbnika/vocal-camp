"use client";

import { motion } from "framer-motion";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="LASgA6FLTFM" title="Виступ учня" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="e73GfUXs70g" title="Виступ учня" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="LWJOfSRnAx8" title="Виступ учня" poster="maxresdefault" />
          </motion.div>
        </motion.div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Пісні наших учнів</h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4 mb-4"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="mWCe8-KCwMY" title="Пісня учня" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="8CUN9F40ssc" title="Пісня учня" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="LeQuaHkKgvE" title="Пісня учня" poster="maxresdefault" />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4 mb-8"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="oEq1VTqhWAI" title="Пісня учня" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="wdGEk00_WYI" title="Пісня учня" poster="maxresdefault" />
          </motion.div>
        </motion.div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Мюзикли, поставлені нашими учнями</h1>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row w-full mx-auto justify-center px-4 gap-4"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="ORQGY3T4AS8" title="Мюзикл" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="5uVoLDR-oK4" title="Мюзикл" poster="maxresdefault" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 h-[200px] rounded-lg overflow-hidden">
            <LiteYouTubeEmbed id="rJtoYWTs3Ns" title="Мюзикл" poster="maxresdefault" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
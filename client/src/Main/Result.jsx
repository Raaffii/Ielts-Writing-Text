import { useState } from "react";
import { motion } from "framer-motion";

export default function Result() {
  const [isOpen, setIsOpen] = useState(false);

  async function translateText(text, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

    try {
      let response = await fetch(url);
      let result = await response.json();
      let translatedText = result[0].map((item) => item[0]).join("");
      console.log(`Translated: ${translatedText}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  //   translateText("Hello, how are you?", "id");

  return (
    <>
      <div className='bg-white  p-6 rounded-lg shadow-md text-xl font-semibold m-2'>
        <p>
          Analisis Output Task Achievement: 6.5 → Sudah menjawab pertanyaan tetapi kurang detail dalam pengembangan argumen. Coherence & Cohesion: 7.0 → Struktur paragraf bagus, tetapi transisi antar-ide perlu ditingkatkan. Lexical Resource: 6.0 → Kata-kata kurang bervariasi, ada pengulangan yang
          bisa dihindari. Grammatical Range & Accuracy: 5.5 → Ada beberapa kesalahan grammar yang perlu diperbaiki.
        </p>
      </div>

      <div className='bg-white  p-6 rounded-lg shadow-md text-xl font-semibold m-2 flex flex-col justify-center items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='bg-blue-500 text-white p-3 rounded-md w-full'>
          {isOpen ? "Tutup" : "Buka"} Konten
        </button>
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className='flex w-full justify-center '>
          <div className='flex items-center justify-center w-full h-full bg-gray-200 my-2 rounded-l-lg'>
            <input type='text' placeholder='hello' className='border-gray-200 text-xl bg-gray-200 rounded-md w-full min-w-0 m-2 outline-none' />
          </div>
          <div className='flex items-center justify-center w-full h-full bg-gray-700 my-2 rounded-r-lg '>
            <input type='text' placeholder='hello' className='border-gray-700 text-xl bg-gray-700 rounded-md w-full min-w-0 m-2 outline-none' />
          </div>
        </motion.div>
              
      </div>
      <div className='bg-white  p-6 rounded-lg shadow-md text-xl font-semibold m-2'>
        <p className='text-l'>
          In today’s fast-paced world, adaptability has become one of the most valuable skills in the workplace. The rapid evolution of technology, shifting market demands, and unexpected global events require professionals to be flexible and open to change. Those who can quickly adjust to new
          circumstances are more likely to thrive in their careers. One key aspect of adaptability is the ability to learn continuously. As industries evolve, employees must stay updated with the latest trends and tools. This means being proactive in acquiring new skills, whether through formal
          education, online courses, or self-study. Individuals who embrace lifelong learning are better equipped to handle challenges and seize new opportunities. Another crucial element is problem-solving under pressure. Adaptable employees do not panic when faced with unexpected situations.
          Instead, they assess the problem, explore solutions, and take decisive action. Their resilience enables them to navigate uncertainty and contribute positively to their teams. In today’s fast-paced world, adaptability has become one of the most valuable skills in the workplace. The rapid
          evolution of technology, shifting market demands, and unexpected global events require professionals to be flexible and open to change. Those who can quickly adjust to new circumstances are more likely to thrive in their careers. One key aspect of adaptability is the ability to learn
          continuously. As industries evolve, employees must stay updated with the latest trends and tools. This means being proactive in acquiring new skills, whether through formal education, online courses, or self-study. Individuals who embrace lifelong learning are better equipped to handle
          challenges and seize new opportunities. Another crucial element is problem-solving under pressure. Adaptable employees do not panic when faced with unexpected situations. Instead, they assess the problem, explore solutions, and take decisive action. Their resilience enables them to
          navigate uncertainty and contribute positively to their teams.
        </p>
      </div>
    </>
  );
}

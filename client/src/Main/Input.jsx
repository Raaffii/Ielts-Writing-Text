import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);

  const answer = async (e) => {
    setText(e.target.value);
    const jumlahKata = text.split(/\s+/).length;

    if (e.target.value == "") {
      setWords(0);
    } else {
      setWords(jumlahKata);
    }
  };

  return (
    <>
      {" "}
      <div className='bg-white  p-6 rounded-lg shadow-md text-xl font-semibold m-2'>Question</div>
      <form action=''>
        <div className='bg-white  p-6 rounded-lg shadow-md text-xl  m-2 h-100  items-end flex flex-col'>
          <textarea className='w-full h-full p-2 outline-none border border-gray-300 rounded-lg resize-none' onPaste={(e) => e.preventDefault()} onChange={(e) => answer(e)}></textarea>
          <div className='justify-center my-2 gap-0.5'>
            <label className='text-xl mx-3'>{words}</label>
            <button type='submit' className='button bg-blue-400'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

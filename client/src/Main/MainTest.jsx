import Input from "./Input";

export default function MainTest({ children }) {
  return (
    <section className='h-screen bg-djowhite/50 flex flex-col item-center text-center rounded-tl-[30px] rounded-tr-[30px] gap-4 p-8 mt-5 mb-0 mx-10 lg:mx-30'>
      <div className=' text-xl font-semibold m-2 flex items-end gap-3 '>
        <label className='relative inline-flex items-center cursor-pointer ml-auto'>
          <input type='checkbox' className='sr-only peer' />
          <div
            className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 
                   rounded-full peer 
                    peer-checked:after:translate-x-7 peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white 
                    after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                    peer-checked:bg-blue-600"></div>
        </label>
      </div>
      {/* Kotak Answer */}
      {children}
    </section>
  );
}

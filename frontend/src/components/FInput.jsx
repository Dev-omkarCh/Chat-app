import '../App.css';
const FInput = ({ field, value, handleChange , type }) => {
  return (
    <>
       <div className="input-group relative w-full">
        <input type={type ? type : "text" } required 
        className=' w-full min-h-[50px] text-[16px] text-white pl-4 pr-4 bg-transparent border border-gray-700 outline-none rounded-md 
        focus:border-accentColor focus:smooth-tran'
        value={value}
        onChange={e => { handleChange(e, field ) }}
        />
        <label className=' absolute top-[50%] left-[10px] 
        text-[16px] text-gray-400 pl-2 pr-2 pointer-events-none tran rounded-[20px] w-fit tran smooth-tran'>{ field }</label>
      </div>
    </>
  );
};

export default FInput;

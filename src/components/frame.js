const Frame = ({ children, title }) => (
  <div className=" mx-s1 mt-s1 border-solid rounded-frame border-black shadow-lg bg-white ">
    <div className="px-s1 py-s05 text-basic sm:p-s2 sm:text-baseD sm:max-w-2xl">
      <div className="text-base mb-s05 font-medium space-y-s03 space-y-reverse sm:text-infoD ">
        {title}
      </div>
      {children}
    </div>
  </div>
);

export default Frame;

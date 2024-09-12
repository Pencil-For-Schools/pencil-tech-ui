export default function SchedulingLayout({ children }) {
  return (
    <>
      {/* BACKGROUND */}
      <div className="flex justify-left z-50 p-4">
        <img
          src="/images/pencil-icon-2.f7c1ee4b.svg"
          id="pencil-icon"
          alt="A cartoon pencil"
          className="h-10 w-10 pr-3"
        />
        <div className="text-left">
          {/* Doubled the font size */}
          <h1 className="text-black font-bold text-lg">PENCIL BOX</h1>{" "}
          {/* Doubled the font size */}
        </div>
      </div>
      <div className="">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="dotted-line-1"></div>
        <div className="dotted-line-2"></div>
      </div>
      {children}
    </>
  );
}

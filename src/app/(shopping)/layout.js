export default function ShopLayout({ children }) {
  return (
    <>
      {/* BACKGOUND */}
      <div className="centered">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="dotted-line-1"></div>
        <div className="dotted-line-2"></div>
      </div>
      {children}
    </>
  );
}

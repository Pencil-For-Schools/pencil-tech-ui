export default function ShopLayout({ children }) {
  return (
    <>
      {/* BACKGOUND */}
      
      <div className="blob-1 z-10"></div>
      <div className="blob-2 z-11"></div>
      <div className="dotted-line-1"></div>
      <div className="dotted-line-2"></div>
      {children}
    </>
  );
}

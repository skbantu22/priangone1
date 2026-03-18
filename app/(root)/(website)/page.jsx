import dynamic from "next/dynamic";



// ✅ Lazy load heavy sections
const Featuredproducts = dynamic(() => import("@/components/ui/Application/website/Featuredproducts"), {
  loading: () => <div className="min-h-[200px]" />,
});


const Home = () => {
  return (
    <div>
      {/* ✅ LCP element should load first */}
     

      {/* ✅ Everything else loads after initial render */}
      <Featuredproducts />
    
    </div>
  );
};

export default Home;

import SearchLayout from "../component/SearchLayout"
import SearchBar from "../component/SearchBar";
// import { SpeedInsights } from "@vercel/speed-insights/next"
export default function RootLayout({ children }) {
  return (
    <>
    <SearchBar />
    
    <div className="min-h-screen flex flex-col lg:flex-row">
    <SearchLayout   />
      {/* Main Content */}
      <main className="w-full lg:w-3/4 mt-5 p-6">
        {children}
      </main>
    </div>
    {/* <SpeedInsights /> */}
    </>

  );
}


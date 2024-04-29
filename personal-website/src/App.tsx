import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import { ScrollProvider } from "@/contexts/ScrollContext";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

function App() {
  return (
    <ScrollProvider>
      <ActiveSectionProvider>
        <main className="flex flex-col items-center w-full">
          <Navbar />
          <Home />
        </main>
      </ActiveSectionProvider>
    </ScrollProvider>
  );
}

export default App;

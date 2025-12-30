import Sidebar from "./components/sidebar/Sidebar";
import TopSearchBar from "./components/header/TopSearchBar";
import WhiteHeader from "./components/header/WhiteHeader";
import RevenueRow from "./components/dashboard/RevenueRow";
import SummaryStrip from "./components/dashboard/SummaryStrip";
import AnalyticsPanel from "./components/dashboard/AnalyticsPanel";

function App() {
  return (
    <div className="min-h-screen bg-[#f7f4f2] grid grid-cols-[280px_1fr]">

      <Sidebar />

      <main className="p-6">

        <TopSearchBar />

        <div className="bg-white rounded-[32px] p-8 shadow-lg max-w-[1250px]">

          <WhiteHeader />
          <RevenueRow />
          <SummaryStrip />
          <AnalyticsPanel />

        </div>

      </main>
    </div>
  );
}

export default App;

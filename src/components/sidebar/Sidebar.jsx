import { sidebarMenu } from "../../data/sidebarMenu";

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#faf7f5] border-r flex">

      {/* ICON BAR */}
      <div className="w-[60px] flex flex-col items-center gap-4 py-4 border-r">
        {["fa-layer-group","fa-chart-pie","fa-file","fa-share-nodes","fa-gear"].map((icon,i)=>(
          <div key={i} className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 cursor-pointer">
            <i className={`fa-solid ${icon}`}></i>
          </div>
        ))}
      </div>

      {/* MENU TREE */}
      <div className="flex-1 p-4 text-sm">

        {/* LOGO */}
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold mb-4">
          C
        </div>

        {sidebarMenu.map((group, i) => (
          <div key={i} className="mb-6">
            <p className="text-[10px] text-gray-400 uppercase mb-2">
              {group.section}
            </p>

            {group.items.map((item, j) => (
              <div key={j} className="mb-3">

                <div className="flex justify-between items-center font-medium text-gray-700">
                  {item.label}
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>

                <div className="ml-3 mt-2 border-l pl-3 flex flex-col gap-2">
                  {item.children.map((child, k) => (
                    <div key={k} className="flex justify-between items-center">
                      <span className={`${child.highlight ? "text-pink-500 font-semibold" : "text-gray-500"}`}>
                        {child.label}
                      </span>

                      {child.badge && (
                        <span className="bg-pink-500 text-white text-xs px-2 rounded-full">
                          {child.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

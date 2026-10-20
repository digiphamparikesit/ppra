// assets/js/layout.js

function renderLayout(activeMenu, userName, userRole) {
  const sidebarHTML = `
    <!-- SIDEBAR DESKTOP -->
    <aside class="hidden md:flex flex-col w-64 bg-green-800 text-white h-screen fixed top-0 left-0 z-50 shadow-lg">
      <div class="p-5 border-b border-green-700">
        <h1 class="text-2xl font-bold tracking-wider">Form PPRA</h1>
        <p class="text-xs text-green-300 mt-1">Sistem Input Apoteker</p>
      </div>
      <nav class="flex-1 overflow-y-auto py-4">
        <a href="dashboard.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'dashboard' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">🏠 Dashboard</a>
        <a href="input.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'input' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">➕ Input Form PPRA</a>
        <a href="data.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'data' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">📋 Data Pasien</a>
        <a href="kinerja.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'kinerja' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">📊 Kinerja Apoteker</a>
        <a href="laporan.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'laporan' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">🖨️ Laporan</a>
        ${userRole === 'admin' ? `
          <div class="mt-4 border-t border-green-700 pt-2">
            <p class="px-5 text-xs text-green-300 mb-2 uppercase tracking-wider">Admin Area</p>
            <a href="master.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'master' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">⚙️ Master Data</a>
            <a href="users.html" class="block px-5 py-3 hover:bg-green-700 ${activeMenu === 'users' ? 'bg-green-700 border-l-4 border-white font-semibold' : ''}">👥 Kelola User</a>
          </div>
        ` : ''}
      </nav>
      <div class="p-5 border-t border-green-700">
        <p class="text-sm font-semibold truncate">${userName}</p>
        <p class="text-xs text-green-300 mb-3 capitalize">${userRole}</p>
        <button onclick="logoutUser()" class="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm transition">Logout</button>
      </div>
    </aside>

    <!-- BOTTOM NAV MOBILE -->
    <nav class="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <a href="dashboard.html" class="flex flex-col items-center ${activeMenu === 'dashboard' ? 'text-green-600' : 'text-gray-500'}">
        <span class="text-xl">🏠</span><span class="text-[10px] mt-1">Dashboard</span>
      </a>
      <a href="input.html" class="flex flex-col items-center ${activeMenu === 'input' ? 'text-green-600' : 'text-gray-500'}">
        <span class="text-xl">➕</span><span class="text-[10px] mt-1">Input</span>
      </a>
      <a href="data.html" class="flex flex-col items-center ${activeMenu === 'data' ? 'text-green-600' : 'text-gray-500'}">
        <span class="text-xl">📋</span><span class="text-[10px] mt-1">Data</span>
      </a>
      <a href="kinerja.html" class="flex flex-col items-center ${activeMenu === 'kinerja' ? 'text-green-600' : 'text-gray-500'}">
        <span class="text-xl">📊</span><span class="text-[10px] mt-1">Kinerja</span>
      </a>
      <button onclick="toggleMobileMenu()" class="flex flex-col items-center text-gray-500">
        <span class="text-xl">☰</span><span class="text-[10px] mt-1">Menu</span>
      </button>
    </nav>

    <!-- DRAWER MENU MOBILE -->
    <div id="mobileDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-[60] hidden">
      <div class="bg-white w-64 h-full absolute right-0 shadow-xl flex flex-col transform transition-transform translate-x-full duration-300" id="drawerContent">
        <div class="p-5 border-b flex justify-between items-center bg-green-800 text-white">
          <h2 class="font-bold">Menu Lainnya</h2>
          <button onclick="toggleMobileMenu()" class="text-2xl leading-none">&times;</button>
        </div>
        <div class="flex-1 overflow-y-auto p-4">
          <a href="laporan.html" class="block py-3 border-b text-gray-700">🖨️ Laporan</a>
          ${userRole === 'admin' ? `
            <a href="master.html" class="block py-3 border-b text-gray-700">⚙️ Master Data</a>
            <a href="users.html" class="block py-3 border-b text-gray-700">👥 Kelola User</a>
          ` : ''}
          <button onclick="logoutUser()" class="block w-full text-left py-3 text-red-600 font-semibold mt-4">Logout</button>
        </div>
      </div>
    </div>
  `;

  // Suntikkan ke dalam div dengan id="app-layout"
  document.getElementById('app-layout').innerHTML = sidebarHTML;
}

// Fungsi buka/tutup drawer mobile
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const content = document.getElementById('drawerContent');
  
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    setTimeout(() => content.classList.remove('translate-x-full'), 10);
  } else {
    content.classList.add('translate-x-full');
    setTimeout(() => drawer.classList.add('hidden'), 300);
  }
}

import { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export function useNavigationContext() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }) {
  const [selectedNavLink, setSelectedNavLink] = useState(
    localStorage.getItem("selectedNavLink") || "/"
  );

  useEffect(() => {
    localStorage.setItem("selectedNavLink", selectedNavLink);
  }, [selectedNavLink]);

  useEffect(() => {
    // Event listener ketika tab atau halaman tertutup
    const handleBeforeUnload = (event) => {
      // Reset data yang Anda inginkan di sini
      localStorage.removeItem("selectedNavLink");
      // Jangan lupa mengecek apakah Anda harus melakukan clean up lainnya
    };

    // Menambahkan event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ selectedNavLink, setSelectedNavLink }}>
      {children}
    </NavigationContext.Provider>
  );
}

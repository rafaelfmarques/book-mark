import Navbar from "@/components/Navbar";

export default function Search() {
  return (
    <div>
      <Navbar
        title="BOOKMARK"
        submenus={[
          { submenu: "SOBRE", link: "/" },
          { submenu: "CONTATO", link: "/" },
        ]}
      />
    </div>
  );
}

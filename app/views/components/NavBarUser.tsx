import { Icon } from "@iconify/react/dist/iconify.js";

export const NavBarUser = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="flex">
        <div className="w-14 h-14 border-2 rounded-full"></div>
        <div className="flex flex-col justify-center ml-3 text-sm">
          <span className="text-gray-700">Hola, user</span>
          <span className="font-bold">Bienvenido</span>
        </div>
      </div>

      <div className="flex p-4">
        <Icon className="text-3xl mr-2 text-gray-400" icon="tabler:bell" />
        <Icon className="text-3xl text-gray-400" icon="tabler:settings" />
      </div>
    </nav>
  );
};

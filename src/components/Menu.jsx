import React from "react";
import { Drawer } from "flowbite-react";

const Menu = ({ handleClose, isOpen }) => {
  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <ul className="flex flex-col gap-3 font-bold text-center text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default Menu;

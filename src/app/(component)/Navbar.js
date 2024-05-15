import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex flex-col mt-4">
      <div className="max-w-xl px-8 flex flex-col gap-4 ">
        <h1 className="text-4xl">Restaurant</h1>
        <p>
          Officia ex sint excepteur quis dolor tempor ad do quis nostrud nostrud
          culpa laborum deserunt. Est pariatur occaecat nulla dolore excepteur.
          Sit exercitation duis ullamco nostrud labore cupidatat excepteur
          dolore aliquip nostrud proident nulla fugiat. In eu nulla ipsum amet
          elit.
        </p>
      </div>
      <nav className="my-4 px-8 border-y border-gray-300 py-4 flex justify-between gap-8 items-center text-sm">
        <div className="flex items-center gap-8">
          Filter by :
          <DropdownMenu>
            <DropdownMenuTrigger className="flex border-b border-gray-300 gap-8 py-2 items-center">
              Price <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex border-b border-gray-300 gap-8 py-2 items-center">
                Categories <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenu>
        </div>
          <Button variant="outline">Clear all</Button>
      </nav>
    </div>
  );
};

export default Navbar;

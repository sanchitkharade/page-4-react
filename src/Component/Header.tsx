import { ActionIcon, Button, Input, Tabs } from "@mantine/core";
import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="pt-3">
      <div className="flex justify-between items-center m-2 ">
        <div className="text-2xl text-center pl-10">
          <span className="text-red-600">RAF</span>CART
        </div>
        <div className="flex w-1/3">
          <Input className="w-full  border " placeholder="Serach Hare" />
          <Button color="red" variant="filled">
            <IconSearch />
          </Button>
        </div>
        <div className="flex items-center gap-1 pr-10">
          <div>
            <ActionIcon
              size={42}
              variant="default"
              aria-label="ActionIcon with size as a number"
            >
              <IconHeart />
            </ActionIcon>
          </div>
          <div>
            <ActionIcon
              size={42}
              variant="default"
              aria-label="ActionIcon with size as a number"
            >
              <IconShoppingBag />
            </ActionIcon>
          </div>
          <div>
            <ActionIcon
              size={42}
              variant="default"
              aria-label="ActionIcon with size as a number"
            >
              <IconUser />
            </ActionIcon>
          </div>
        </div>
      </div>
      <div className="h-16 bg-black pl-20 text-white flex items-center justify-around">
        <div className="bg-black ">
          <Tabs color="red" variant="pills" defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="category" leftSection={<IconMenu2 />}>
                All Categories
              </Tabs.Tab>
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="shop">Shop</Tabs.Tab>
              <Tabs.Tab value="messages">About Us</Tabs.Tab>
              <Tabs.Tab value="settings">Contact Us</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
        <div>
          <Button className="mr-20" color="red" variant="filled">
            Login/Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

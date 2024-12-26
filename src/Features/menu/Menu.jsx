import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {/* hey */}
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  // console.log(menu);
  return menu;
}

export default Menu;

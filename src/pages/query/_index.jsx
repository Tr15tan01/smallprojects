import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./utils";
import { useState } from "react";
export const Query = () => {
  const [items, setItems] = useState([]);
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      console.log("data is", data);
      setItems(data);

      return data;
    },
  });
  console.log(data, isLoading);
  return (
    <div>
      {items.taskList.map((item) => {
        console.log(item);
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

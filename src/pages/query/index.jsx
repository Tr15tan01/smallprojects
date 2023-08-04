import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./utils";

export const Query = () => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      console.log("data is", data);
      return data;
    },
  });
  console.log(result.data);
  return (
    <div>
      {result.data.taskList.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

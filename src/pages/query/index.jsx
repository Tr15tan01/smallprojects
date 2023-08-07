import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const POSTS = [
  { id: 1, message: "fuckin nessag" },
  { id: 2, message: "another sfucnin message" },
];

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export const Query = () => {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => POSTS),
  });
  const newPostMutation = useMutation({
    mutationFn: (message) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), message })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  console.log(POSTS);
  if (postsQuery.isLoading) return <h2>Loading...</h2>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => (
        <p key={post.id}>{post.message}</p>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        className="btn"
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button>
    </div>
  );
};

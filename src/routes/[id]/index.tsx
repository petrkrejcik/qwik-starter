import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";

export const useRandom = routeLoader$(async (request) => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      const randomString = Math.random().toString(36).substring(7);
      resolve(randomString);
    }, 500);
  });
  return data as string;
});

export default component$(() => {
  const { id } = useLocation().params;
  const location = useLocation();
  const loading = location.isNavigating;
  const random = useRandom().value;

  return (
    <>
      <div>
        {id}: {loading ? "loading" : random}
      </div>
      <Link href={`/`} style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link href={`/${parseInt(id) + 1}`}>Next</Link>
    </>
  );
});

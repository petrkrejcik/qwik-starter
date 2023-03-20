import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import SelectId from '~/components/SelectId';

export default component$(() => {
  const { id } = useLocation().params;
  console.log(id);

  return <SelectId id={id} />;
});

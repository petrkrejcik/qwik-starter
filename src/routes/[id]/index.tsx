import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import SelectId from '~/components/SelectId';

export default component$(() => {
  const { id } = useLocation().params;

  return <SelectId id={id} />;
});

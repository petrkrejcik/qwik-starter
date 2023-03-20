import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import useId from '~/hooks/useId';

type Props = {
  id: string;
};

export default component$((props: Props) => {

  useId(props.id)

  return (
    <>
      <div>{props.id}</div>
      <Link href={`/${parseInt(props.id) + 1}`}>Next</Link>
    </>
  );
});

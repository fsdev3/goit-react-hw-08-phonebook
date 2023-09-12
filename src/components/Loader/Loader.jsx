import { Watch } from 'react-loader-spinner';

export function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#5cb2db"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

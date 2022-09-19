import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={150}
      width={150}
      strokeWidth={5}
      strokeWidthSecondary={1}
      color="blue"
      secondaryColor="white"
      wrapperStyle={{ margin: 'auto' }}
    />
  );
}

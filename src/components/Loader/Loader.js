import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    // <RotatingLines
    //   strokeColor="#3f51b5"
    //   strokeWidth="5"
    //   animationDuration="0.75"
    //   width="96"
    //   visible={true}
    //   wrapperStyle={{
    //     position: 'fixed',
    //     bottom: '30%',
    //     left: '50%',
    //     transform: 'translate(-50%,-50%)',
    //     zIndex: '100',
    //   }}
    // />
    <Oval
      ariaLabel="loading-indicator"
      height={150}
      width={150}
      strokeWidth={5}
      strokeWidthSecondary={5}
      color="#3f51b5"
      secondaryColor="white"
      wrapperStyle={{
        position: 'fixed',
        bottom: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '100',
      }}
    />
  );
}

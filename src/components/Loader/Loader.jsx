import { Watch } from 'react-loader-spinner'


export default function Loader({isLoading}) {
  return (
    <Watch
  visible={isLoading}
  height="50"
  width="50"
  radius="48"
  color="#FFFF00"
  ariaLabel="watch-loading"
          wrapperStyle={{
            marginTop: '20px',
            marginBottom: '20px',
             display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
  }}
  />
  )
}
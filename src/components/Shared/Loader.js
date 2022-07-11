import { Image } from 'react-bootstrap';
import Logo from 'assets/logo.svg'

function Loader() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Image
        src={Logo}
        alt="logo"
        style={{ width: 100 }}
        className="mb-5 animate__animated animate__bounce animate__infinite  infinite"
      />
    </div>
  )
}

export default Loader
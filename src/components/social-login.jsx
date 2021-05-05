import { Button } from "reactstrap";

import { signInWithGoogle, signInWithFacebook } from "../config/firebase";

const SocialLogin = () => (
  <div className="d-flex justify-content-between">
    <Button color="danger" className="w-100 mr-1" onClick={signInWithGoogle}>
      <i className="fab fa-google fa-fw"></i> Google
    </Button>
    <Button color="primary" className="w-100 ml-1" onClick={signInWithFacebook}>
      <i className="fab fa-facebook-f fa-fw"></i> Facebook
    </Button>
  </div>
);

export default SocialLogin;

import { Link } from "react-router-dom";

export const Verification = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="w-md-50 rounded-2 shadow-sm d-flex flex-column p-4 mt-5 mx-3 mx-md-0"
        style={{ backgroundColor: "white" }}
      >
        <Link to="/home" className="text-decoration-none">
          <i class="bi bi-arrow-left text-secondary">Go back</i>
        </Link>
        <i className="bi bi-phone fs-1"></i>
        <h5>Use your mobile device for verification</h5>
        <p className="text-secondary">
          Follow the instructions to verify your identity using Persona on your
          mobile device.
        </p>
        <h6>
          You need to have the LinkedIn app.
          <span className="text-primary ms-1 pointer">
            Download the LinkedIn app.
          </span>
        </h6>
        <div className="d-flex">
          <div>
            <img
              src="src\assets\qrcode.png"
              alt="qrcode"
              style={{ width: "200px" }}
              className="rounded-3 shadow-sm"
            />
          </div>
          <div
            className="ms-2 rounded-2 shadow-sm ps-2 w-100"
            style={{ backgroundColor: "#F8FAFD" }}
          >
            <p className="fw-bold">
              Instructions: <br />
              <span className="fw-normal">
                1. Open the camera app on your phone.
              </span>
              <br />
              <span className="fw-normal">
                2. Scan the QR code on the left.
              </span>
              <br />
              <span className="fw-normal">
                3. Follow the steps on your phone.
              </span>
            </p>
          </div>
        </div>
        <p className="mt-2">
          Learn
          <span className="text-primary fw-bold ms-1 pointer">
            how users can verify their information.
          </span>
        </p>
        <h6>This page will refresh once the verification is complete.</h6>
      </div>
    </div>
  );
};

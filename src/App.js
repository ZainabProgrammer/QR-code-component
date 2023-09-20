import code from "./images/code.png";

function App() {
  return (
    <div className="container-wrapper flex items-center justify-center  ">
      <div className="flex items-center justify-center px-5  ">
        <div className="container p-4  flex items-center flex-col  justify-center rounded-3xl   h-full">
          <img src={code} className="w-100 rounded-xl " alt="scan" />
          <div>
            <h1 className="main-h pt-5  ">
              Improve your front-end
              <br />
              skills by building projects
            </h1>
            <p className="sub-h py-3 ">
              Scan the QR code to visit Frontend
              <br />
              Mentor and take your coding skills to
              <br />
              the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

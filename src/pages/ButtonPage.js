import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("salkdjls");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-5">
          <GoBell />
          Hi there!
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5">
          <GoCloudDownload />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning className="mb-5">
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-5">
          Hide adds!
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-5">
          Buy!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

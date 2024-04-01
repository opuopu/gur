import { Button, ConfigProvider } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { buttonTheme } from "../../themes/buttonTheme";

const PrivacyPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <ConfigProvider theme={buttonTheme}>
      <div>
        <h1 className="text-orange text-32 font-600  mb-4">Privacy Policy</h1>
        <JoditEditor
          config={{
            height: "600px",
          }}
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
        <div className="flex justify-end mt-4">
          <Button
            className="bg-orange flex items-center border-0 font-600 "
            size="large"
            icon={<MdDoneOutline />}
          >
            Submit
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default PrivacyPolicy;

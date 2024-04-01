import { useRef, useState } from "react";
import { buttonTheme } from "../../themes/buttonTheme";
import { Button, ConfigProvider } from "antd";
import JoditEditor from "jodit-react";
import { MdDoneOutline } from "react-icons/md";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <ConfigProvider theme={buttonTheme}>
      <div>
        <h1 className="text-orange text-32 font-600  mb-4">
          Terms And Condition
        </h1>
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

export default TermsAndCondition;

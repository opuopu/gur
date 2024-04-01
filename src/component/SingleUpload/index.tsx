/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { multiUpload } from "../../themes/uploadTheme";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
const SingleUpload = ({ imageUrl, setImageUrl }: any) => {
  console.log(imageUrl);
  const handleChange: UploadProps["onChange"] = (info) => {
    getBase64(info.file.originFileObj as FileType, (url) => {
      setImageUrl(url);
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined className="text-orange" />
      <div style={{ marginTop: 8 }} className="text-orange">
        Upload
      </div>
    </button>
  );

  return (
    <ConfigProvider theme={multiUpload}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </ConfigProvider>
  );
};

export default SingleUpload;

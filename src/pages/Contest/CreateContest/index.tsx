/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, ConfigProvider, Form, Row, type UploadFile } from "antd";
import { useState } from "react";
import MultiFileUplaod from "../../../component/MultiFileUpload";
import GuruForm from "../../../component/Form/FormProvider";
import GuruInput from "../../../component/Form/GuruInput";
import GuruTextArea from "../../../component/Form/GuruTextArea";

import FileUpload from "../../../component/FileUpload";
import useImageUpload from "../../../hooks/useImageUpload";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { contestTheme } from "../../../themes/inputThemes";
import Swal from "sweetalert2";

const CreateContext = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { setFile, imageUrl } = useImageUpload();

  const onSubmit = async (data: any) => {
    console.log(data);
    Swal.fire({
      title: "Contest Added Successfully",
      text: "wow.you have successfully uploaded the contest",
      icon: "success",
      confirmButtonColor: "#FD8533",
    });
  };
  return (
    <div>
      <GuruForm onSubmit={onSubmit} theme={contestTheme}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <h1 className="text-32 text-white mb-2">Contest Details</h1>
            <Form.Item>
              <MultiFileUplaod fileList={fileList} setFileList={setFileList} />
            </Form.Item>
            <GuruInput
              label="Contest Name"
              type="text"
              name="contestName"
              labelColor="#FD8533"
              placeholder="enter contest name"
            />
            <GuruTextArea
              label="Contest Description"
              name="contestDescription"
              labelColor="#FD8533"
              placeholder="enter contest description"
            />
            <GuruInput
              type="date"
              label="Duration"
              name="duration"
              labelColor="#FD8533"
              placeholder="enter duration"
            />
            <GuruInput
              type="number"
              label="Award Amount"
              name="amount"
              labelColor="#FD8533"
              placeholder="enter amount"
            />
          </Col>
          <Col span={8}>
            <Form.List
              name="rules"
              key="rules"
              initialValue={[{ rulesName: "", rulesDescription: "" }]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div>
                      <Form.Item>
                        <FileUpload
                          setSelectedFile={setFile}
                          imageUrl={imageUrl}
                        />
                      </Form.Item>
                      <GuruInput
                        label="Rules Name"
                        type="text"
                        name={`rules[${index}].rulesName`}
                        placeholder="enter rules name"
                        labelColor="#FD8533"
                      />
                      <GuruTextArea
                        label="Rules Description"
                        name={`rules[${index}].rulesDescription`}
                        placeholder="enter rules Description"
                        labelColor="#FD8533"
                      />
                      {index !== 0 && (
                        <DeleteOutlined
                          className="text-red flex justify-end text-20"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <div className="flex justify-end mt-4">
                    <Button
                      icon={<PlusOutlined />}
                      className="bg-orange border-0 h-[40px] font-600 flex items-center mb-2   "
                      onClick={() => add()}
                    >
                      Add Another Field
                    </Button>
                  </div>
                </>
              )}
            </Form.List>
          </Col>
          <Col span={8}>
            <h1 className="text-32 text-white mb-2">Award Details</h1>
            <Form.List
              name="awards"
              key="awards"
              initialValue={[
                {
                  awardName: "",
                  awardProviderName: "",
                  awardProviderDetails: "",
                  providedBy: "",
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div>
                      <Form.Item key="rules_upload">
                        <FileUpload
                          setSelectedFile={setFile}
                          imageUrl={imageUrl}
                        />
                      </Form.Item>
                      <GuruInput
                        label="Award Name"
                        type="text"
                        name={`awards[${index}].awardName`}
                        placeholder="enter award name"
                        labelColor="#FD8533"
                      />
                      <GuruTextArea
                        label="Award Details"
                        name={`awards[${index}].awardProviderDetails`}
                        placeholder="enter rules awardProviderDetails"
                        labelColor="#FD8533"
                      />
                      <GuruInput
                        label="Award Provider Name"
                        type="text"
                        name={`awards[${index}].awardProviderName`}
                        placeholder="enter award name"
                        labelColor="#FD8533"
                      />

                      <GuruInput
                        label="Award Provider By"
                        type="text"
                        name={`awards[${index}].providedBy`}
                        placeholder="award provider"
                        labelColor="#FD8533"
                      />
                      {index !== 0 && (
                        <DeleteOutlined
                          className="text-red flex justify-end text-20"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <div className="flex justify-end mt-4">
                    <Button
                      icon={<PlusOutlined />}
                      className="bg-orange border-0 h-[40px] font-600 flex items-center mb-2   "
                      onClick={() => add()}
                    >
                      Add Another Field
                    </Button>
                  </div>
                </>
              )}
            </Form.List>
          </Col>
        </Row>
        <ConfigProvider>
          <Button
            className="bg-orange border-0 w-full  font-600 h-[40px] text-18"
            htmlType="submit"
          >
            Submit
          </Button>
        </ConfigProvider>
      </GuruForm>
    </div>
  );
};

export default CreateContext;

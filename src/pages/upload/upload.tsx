import React, { useState } from 'react';
import { Upload, message, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
interface Prop {
  size: number;
  uploadWay: Promise<any>;
}

const UploadEx = ({ size, uploadWay }: Prop) => {
  const [imgurl, setImgurl] = useState('');

  // 还未选择头像时的默认显示
  const UploadBtn = () => {
    return <Avatar size={size} icon={<UserOutlined />}></Avatar>;
  };
  // 上传前文件大小、格式的校验
  const beforeUpload = ({ type, size }: { type: string; size: number }) => {
    const isJpgOrPng = type === 'image/jpeg' || type === 'image/png';
    if (!isJpgOrPng) {
      message.error('请选择 JPG/PNG 文件类型!');
    }
    const isLt2M = size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小小于 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  let tip;
  const changeHandel = ({ file }: { file: File }) => {
    console.log(file.originFileObj, file);

    if (file.status === 'uploading') {
      tip = message.loading('正在上传...', 0);
      return;
    }
  };

  const getBase64 = (file: File) => {
    const reader = new FileReader();
    //显示出来
    reader.readAsDataURL(file);
    // 读取文件成功后触发
    reader.addEventListener('load', () => {
      setImgurl(reader.result);
    });
    file.status = 'done';
  };
  const customUpload = ({ file }: { file: File }) => {
    console.log(file.name);
    const formData = new FormData();
    formData.append('file', file);
    setTimeout(() => {
      uploadWay(formData)
        .then(() => {
          getBase64(file);
          setTimeout(tip);
          message.success('上传成功！');
        })
        .catch(err => {
          console.log(err);
          setTimeout(tip);
          message.error('服务器繁忙，请稍后再试！');
          // setLoading(false);
        });
    }, 3000);
  };

  return (
    <>
      <Upload
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={changeHandel}
        customRequest={customUpload}
      >
        {imgurl ? (
          <img
            src={imgurl}
            style={{ width: size, height: size, borderRadius: '50%' }}
          ></img>
        ) : (
          <UploadBtn />
        )}
      </Upload>
    </>
  );
};
export default UploadEx;

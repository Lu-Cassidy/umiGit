import React, { useState } from 'react';
import {uploadAvator} from '@/services/index'
import UploadEx from './upload'
const Index=()=>{
  return<> <UploadEx size={100} uploadWay={uploadAvator}></UploadEx> </>
}
export default Index;
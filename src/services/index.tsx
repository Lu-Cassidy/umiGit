import request from 'umi-request';
export function getData() {
  return request.get('/api/tags');
}
export function getNames() {
  return request.get('/api/data');
}
export function getDatas() {
  return request.get('/api/names');
}
export function uploadAvator(formData: FormData) {
  return request.post('/api/upload', { data: formData, timeout: 5000 });
}
// 导出
export function exportExcel() {
  return request.get('/api/exportExcel');
}
//options
export function getOptions() {
  return request.get('/api/options');
}
//自定义page分页
export function getPage() {
  return request.get('/api/pages');
}

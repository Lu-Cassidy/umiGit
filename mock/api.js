import mockjs from 'mockjs';
export default {
  '/api/tags': mockjs.mock({
    'lists|10': [{ key: '@id', name: '@cname', 'age|1-100': 10 }],
  }),
  '/api/data': mockjs.mock({
    'title|5': [{ key: '@id', name: '@cname' }],
  }),
  '/api/names': mockjs.mock({
    'title|5': ['@cname'],
  }),
  '/api/options': mockjs.mock({
    'names|10000': ['@cname'],
  }),
  '/api/pages': mockjs.mock({
    'lists|20': [
      {
        name: '@cname',
        'age|1-100': 1,
        'key|+1': 1,

        'sex|1': ['男', '女'],
        address: '@region',
      },
    ],
  }),
};

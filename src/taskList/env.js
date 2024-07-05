import api from '../server/api';
import sleep from '../utils/sleep';

const online = {
  request: async () => {
    const response = await api.get('/todos', {});
    if (response.status === 200) {
      return response.data;
    } else {
      const error = response.data.error;
      console.error('errorMessage===', error);
      throw error;
    }
  },
};

const mockResponses = [
  {
    failure: 'mockError',
  },
  {
    success: {
      taskStores: [
        {
          id: 10000,
          text: 'mock item 0',
        },
        {
          id: 10001,
          text: 'mock item 1',
        },
        {
          id: 10002,
          text: 'mock item 2',
        },
      ],
    },
  },
];
let mockResponsesID = 0;

/* istanbul ignore next */
const offline = {
  request: async () => {
    await sleep();
    let mockResponse = mockResponses[mockResponsesID];
    mockResponsesID = (mockResponsesID + 1) % mockResponses.length;
    if (mockResponse.success) {
      return mockResponse.success;
    } else {
      throw mockResponse.failure;
    }
  },
};

/* istanbul ignore next */
const current = isOnline => {
  return isOnline ? online : offline;
};

export {online, offline, current};

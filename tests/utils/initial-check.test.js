jest.mock('../../api/shri-api');
jest.mock('../../utils/build-runner');

const { getBuildList, getConfig } = require('../../api/shri-api');
const initialCheck = require('../../utils/initial-check');
const { addBuilds } = require('../../utils/build-runner');

getConfig.mockImplementation(() => ({
  data: {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    repoName: 'string',
    buildCommand: 'string',
    mainBranch: 'string',
    period: 0,
  },
}));

getBuildList.mockImplementation((offset, limit) => {
  if (offset > 24) return { data: [] };
  return {
    data: [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        buildNumber: 0,
        commitMessage: 'string',
        commitHash: 'string',
        branchName: 'string',
        authorName: 'string',
        status: 'Waiting',
        start: '2020-04-13T19:32:02.668Z',
        duration: 0,
      },
    ],
  };
});

describe('Initial checking', () => {
  initialCheck();
  test('shriApi.getConfig should be called', () => {
    expect(getConfig).toHaveBeenCalled();
  });

  test('shriApi.getBuildList should be called', () => {
    expect(getBuildList).toHaveBeenCalled();
  });

  test('addBuilds should be called', () => {
    expect(addBuilds).toHaveBeenCalled();
  });
});

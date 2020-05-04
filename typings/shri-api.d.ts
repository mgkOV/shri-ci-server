declare interface Settings {
  id: string;
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;
}

declare interface Build {
  id: string;
  configurationId: string;
  buildNumber: number;
  commitMessage: string;
  commitHash: string;
  branchName: string;
  authorName: string;
  status: string;
  start: string;
  duration: number | string;
}

declare interface ConfigSchema {
  repoName: string;
  buildCommand: string;
  mainBranch: string;
  period: number;
}

declare interface BuildReqestSchema {
  commitMessage: string;
  commitHash: string;
  branchName: string;
  authorName: string;
}

declare interface BuildStartSchema {
  buildId: string;
  dateTime: string;
}

declare interface BuildFinishSchema {
  buildId: string;
  duration: number;
  success: boolean;
  buildLog: string;
}

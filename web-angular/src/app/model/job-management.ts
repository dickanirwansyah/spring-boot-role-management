export class JobManagement{
    jobId: number;
	createBy: String;
	createDate: Date;
	finishedDate: Date;
	jobName: String;
	startDate: Date;
	status: number;
	totalFile; number;
}

export class JobDetailManagement{
	jobDetailId: number;
	createBy: String;
	createDate: Date;
	fileName: String;
	jobId: number;
	modifyBy: String;
	modifyDate: Date;
	status: number;
}

export class CekJob{
	success: String;
	failed: String;
	total: String;
	percentSuccess: String;
	percentFailed: String;
}
	
export interface Jobs {
        companyName?: string; 
        JobTitle: string;
        JobCategory: string[];
        JobSubCategory?: string[];
        description: string;
        JobType?: 'Full-Time' | 'Part-Time' | 'Internship' | 'Contract';
        salary?: {
            from: number;
            to: number;
        };
        skills?: string[];
        JobHours?: {
            from: number;
            to: number;
        };
        jobLocation?: {
            State: string;
            government: string;
        }[];
        JoblocationType?: 'Onsite' | 'Remote' | 'Hybrid';
        jobLevel?: 'EntryLevel' | 'MidLevel' | 'Senior';
        jobRequirements?: string[];
        timeStamp?: Date;
        hiredUserId?: string; 
        status?: 'Open' | 'Closed';
        JobSeekersCounts?: number;
        companyId: string; 
    }
    


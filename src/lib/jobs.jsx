const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getJobs = async (
    search = "",
    location = "",
    workplaceType = "",
    employmentType = "",
    postedWithin = ""
) => {
    const url = `${baseUrl}/api/jobs?search=${search}&location=${location}&workplaceType=${workplaceType}&employmentType=${employmentType}&postedWithin=${postedWithin}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};


// job find by id

export const getJobsById = async (id) => {
    const res = await fetch(`${baseUrl}/api/jobs/${id}`);
    const result = await res.json()
    return result;
}
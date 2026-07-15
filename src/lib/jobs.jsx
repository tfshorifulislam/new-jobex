const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getJobs = async (
    search = "",
    location = "",
    workplaceType = "",
    jobType = "",
    postedWithin = ""
) => {
    const url = `${baseUrl}/api/jobs?search=${search}&location=${location}&workplaceType=${workplaceType}&jobType=${jobType}&postedWithin=${postedWithin}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};
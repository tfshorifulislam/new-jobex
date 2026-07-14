const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getJobs = async (
    search = "",
    location = "",
    workplaceType = "",
    jobType = "",
    postedWithin = ""
) => {
    const url = `${baseUrl}/api/jobs?search=${search}&location=${location}&workplaceType=${workplaceType}&jobType=${jobType}&postedWithin=${postedWithin}`;

    console.log(url); // <-- এটা দেখাও

    const res = await fetch(url);
    const data = await res.json();

    console.log(data); // <-- এটাও দেখাও

    return data;
};

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getJobs = async (search = "", location = "") => {
    const res = await fetch(`${baseUrl}/api/jobs?search=${search}&location=${location}`);
    const data = await res.json();
    return data;
}
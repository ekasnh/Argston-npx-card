import fs from "fs";

//Reach the package.json file
// export function getPackageJson() {
//   const path = `package.json`;
//   const packageData = JSON.parse(fs.readFileSync(path, "utf8"));
//   return packageData;
// }
// const { version } = getPackageJson();

// Data
const data = {
    name: "Ekansh Agarwal",
    author: "Ekansh Agarwal",
    title: ["Figuring my life arround"],
    bio: "Heya!, I'm Ekansh, a Full-Stack Javascript dev from India.",
    cli_description: "",
    github: "ekasnh",
    urls: [
        { label: "Gravatar", value: 'https://gravatar.com/ekanshusesnpm', username: 'Ekansh_Agarwal' },
        { label: "LinkedIn", value: 'https://www.linkedin.com/in/ekansh-agarwal-aa38b718b/', username: 'EkanshAgarwal' },
        { label: "Discord", value: "https://discord.com", username: "Ekansh Agarwal", hint:"oh no 😵" },
        { label: "GitHub", value: "https://github.com/ekasnh", username: 'Ekansh Agarwal' }
    ],
    version: "1.0.2",
};
export default data;
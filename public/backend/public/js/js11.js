// const team = [
//   {
//     id: "anna",
//     fullName: "Anna Kendrick",
//     jobTitle: "Front-end Ninja",
//     bio:
//       "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
//     avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
//   },
//   {
//     id: "harry",
//     fullName: "Harry Fawn",
//     jobTitle: "Illustrator",
//     bio:
//       "Creates new illustrations each week, will kill for coffee, and loves beaches",
//     avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
//   },
//   {
//     id: "sofia",
//     fullName: "Sofia Sultan",
//     jobTitle: "Backend Engineer",
//     bio:
//       "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
//     avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
//   }
// ];

//Modify Code below this line

//Content Selected using ID.
// const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
// const getImageElement = (src, alt) => {
//   let imagearray=[];
//   team.forEach((item, i) => {
//     const getimage = document.createElement("img");
//     getimage.setAttribute("src", team[i].avatar);
//     getimage.setAttribute("alt", team[i].fullName);
//     getimage.setAttribute("width", "100px");
//     getimage.setAttribute("height", "100px");
//       getimage.push(imagearray);

//     // let content= document.getElementById("content");content.appendChild(getimage);
//   });
//   console.log(imagearray)
//   return;
// };
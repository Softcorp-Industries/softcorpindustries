
const Contact_DOM = document.getElementById('Contact_DOM');

//  Creates the Header with the DOM 
function Create_DOM_Header() {
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  let pageTitle = document.createElement("p");

  header.setAttribute("id","main-header")
  
  h1.appendChild(document.createTextNode("Christopher T. Guy"));
  
  pageTitle.appendChild(document.createTextNode("Contact"));
  pageTitle.setAttribute("class", "pageTitle")
  
  header.appendChild(pageTitle);
  header.appendChild(h1);
  Contact_DOM.appendChild(header);
}
Create_DOM_Header();

//  Creates the Dark Mode Button
function Create_DOM_DarkMode() {
    let DOMDarkModeBtn = document.createElement("div");
    let DOMDarkModeToggle = document.createElement('span');

    DOMDarkModeBtn.setAttribute("id", "darkMode")

    DOMDarkModeToggle.setAttribute("id", "darkModeBtn")
    DOMDarkModeToggle.setAttribute("class", "dmToggle")

    DOMDarkModeBtn.appendChild(DOMDarkModeToggle);
    Contact_DOM.appendChild(DOMDarkModeBtn);
}
Create_DOM_DarkMode();

//  Creates the Nav Button
function Create_DOM_NavBtn() {
  let navBtn = document.createElement("div");
  let navBtn_Menu = document.createElement("div");
  let navBtn_Menu_Btn = document.createElement("div");
  
  navBtn.setAttribute("id", "navBtn");

  navBtn_Menu.setAttribute("class", "navBtn__menu");

  navBtn_Menu_Btn.setAttribute("class", "navBtn__menu__btn")

  navBtn_Menu.appendChild(navBtn_Menu_Btn);
  navBtn.appendChild(navBtn_Menu);
  Contact_DOM.appendChild(navBtn);
}
Create_DOM_NavBtn();

//  Creates the Nav List
function Create_DOM_NavList() {

  let navMenu = document.createElement("nav");
  navMenu.setAttribute("class", "pageNav");
  navMenu.setAttribute("id", "navMenu");
  navMenu.setAttribute("ariaLable", "main");

  let navMenu_list = document.createElement("ul");
  navMenu_list.setAttribute("class", "pageNav-list");
  navMenu_list.setAttribute("id", "pageNav-list");
  navMenu.appendChild(navMenu_list);

  let listItem_home = document.createElement("li");
  listItem_home.setAttribute("class", "pageNav-listItem");
  
  let listItem_home_link = document.createElement("a");
  listItem_home_link.setAttribute("href", "index.html");
  listItem_home_link.appendChild(document.createTextNode("Home"));

  listItem_home.appendChild(listItem_home_link);
  navMenu_list.appendChild(listItem_home);

  let listItem_about = document.createElement("li");
  listItem_about.setAttribute("class", "pageNav-listItem");

  let listItem_about_link = document.createElement("a");
  listItem_about_link.setAttribute("href", "about.html");
  listItem_about_link.appendChild(document.createTextNode("About"));

  listItem_about.appendChild(listItem_about_link);
  navMenu_list.appendChild(listItem_about);

  let listItem_contact = document.createElement("li");
  listItem_contact.setAttribute("class", "pageNav-listItem");

  let listItem_contact_link = document.createElement("a");
  listItem_contact_link.setAttribute("href", "#");
  listItem_contact_link.appendChild(document.createTextNode("Contact"));

  listItem_contact.appendChild(listItem_contact_link);
  navMenu_list.appendChild(listItem_contact);

  Contact_DOM.appendChild(navMenu);
}
Create_DOM_NavList();

//  Creates the Contact Section
function Create_Contact_Section() {
  let contactSection = document.createElement("main");
  contactSection.setAttribute("id", "contact");
  contactSection.setAttribute("class", "contact");

  let businessProfiles = document.createElement("div");
  businessProfiles.setAttribute("class", "businessProfiles");
  businessProfiles.setAttribute("id", "businessProfiles");

  let location = document.createElement("div");
  location.setAttribute("class", "location");
  location.setAttribute("id", "location");

  let mediaLink = document.createElement("div");
  mediaLink.setAttribute("class", "mediaLink");
  mediaLink.setAttribute("id", "mediaLink");
  
  contactSection.appendChild(businessProfiles);
  contactSection.appendChild(location);
  contactSection.appendChild(mediaLink)

  Contact_DOM.appendChild(contactSection);
}
Create_Contact_Section();
// The DOM Parent Element "Contact Section" must be Created first before you can insert the other Divisions
function Create_DOM_BusinessProfiles() {
  const businessProfiles = document.getElementById("businessProfiles")

  let softcorpBusinessProfile = document.createElement("div");
  softcorpBusinessProfile.setAttribute("class", "businessProfile");

  let softcorpBusinessProfile_h2 = document.createElement("h2")
  softcorpBusinessProfile_h2.appendChild(document.createTextNode("Softcorp Industries"));
  softcorpBusinessProfile.appendChild(softcorpBusinessProfile_h2)

  let softcorp_frontend = document.createElement("p")
  softcorp_frontend.appendChild(document.createTextNode("Front-End Web Development,"));
  softcorpBusinessProfile.appendChild(softcorp_frontend);

  let softcorp_responsive = document.createElement("p")
  softcorp_responsive.appendChild(document.createTextNode("Responsive Web Design,"));
  softcorpBusinessProfile.appendChild(softcorp_responsive);

  let softcorp_businessSites = document.createElement("p")
  softcorp_businessSites.appendChild(document.createTextNode("Business Web Sites,"));
  softcorpBusinessProfile.appendChild(softcorp_businessSites);

  let softcorp_personalSites = document.createElement("p")
  softcorp_personalSites.appendChild(document.createTextNode("Personal Web Sites"));
  softcorpBusinessProfile.appendChild(softcorp_personalSites);

  let softcorp_email = document.createElement("a");
  softcorp_email.setAttribute("href", "mailto:softcorpindustries@gmail.com");
  softcorp_email.setAttribute("title", "Softcorp Industries Email");
  softcorpBusinessProfile.appendChild(softcorp_email);

  let softcorp_envelope = document.createElement("i");
  softcorp_envelope.setAttribute("class", "far fa-envelope")
  softcorp_email.appendChild(softcorp_envelope);

  let guycorpBusinessProfile = document.createElement("div");
  guycorpBusinessProfile.setAttribute("class", "businessProfile");

  let guycorpBusinessProfile_h2 = document.createElement("h2")
  guycorpBusinessProfile_h2.appendChild(document.createTextNode("Guycorp Industries"));
  guycorpBusinessProfile.appendChild(guycorpBusinessProfile_h2)

  let guycorp_electrical = document.createElement("p")
  guycorp_electrical.appendChild(document.createTextNode("Electrical Labor,"));
  guycorpBusinessProfile.appendChild(guycorp_electrical);

  let guycorp_carpentry = document.createElement("p")
  guycorp_carpentry.appendChild(document.createTextNode("Basic Carpentry & Plumbing,"));
  guycorpBusinessProfile.appendChild(guycorp_carpentry);

  let guycorp_drywall = document.createElement("p")
  guycorp_drywall.appendChild(document.createTextNode("Drywall & Tapping,"));
  guycorpBusinessProfile.appendChild(guycorp_drywall);

  let guycorp_painting = document.createElement("p")
  guycorp_painting.appendChild(document.createTextNode("Painting & Clean-up"));
  guycorpBusinessProfile.appendChild(guycorp_painting);

  let guycorp_email = document.createElement("a");
  guycorp_email.setAttribute("href", "mailto:guycorpindustries@outlook.com");
  guycorp_email.setAttribute("title", "Guycorp Industries Email");
  guycorpBusinessProfile.appendChild(guycorp_email);

  let guycorp_envelope = document.createElement("i");
  guycorp_envelope.setAttribute("class", "far fa-envelope")
  guycorp_email.appendChild(guycorp_envelope);
  
  businessProfiles.appendChild(softcorpBusinessProfile);
  businessProfiles.appendChild(guycorpBusinessProfile);
}
function Create_DOM_Location() {
  const location = document.getElementById("location")

  let locationCity = document.createElement("p");
  locationCity.appendChild(document.createTextNode("Calgary, AB Canada"));
  location.appendChild(locationCity);

  let locationPhone = document.createElement("p");
  locationPhone.appendChild(document.createTextNode("825 365 2256"));
  location.appendChild(locationPhone);

}
function Create_DOM_MediaLink() {
  const mediaLink = document.getElementById("mediaLink")

  let fbProfile = document.createElement("a");
  fbProfile.setAttribute("href", "https://www.facebook.com/profile.php?id=100082256030534");
  fbProfile.setAttribute("target", "_blank");

  let fbProfileIcon = document.createElement("i");
  fbProfileIcon.setAttribute("class", "fab fa-facebook");
  fbProfile.appendChild(fbProfileIcon);

  let linkedinProfile = document.createElement("a");
  linkedinProfile.setAttribute("href", "");
  linkedinProfile.setAttribute("target", "_blank");

  let linkedinProfileIcon = document.createElement("i");
  linkedinProfileIcon.setAttribute("class", "fab fa-linkedin");
  linkedinProfile.appendChild(linkedinProfileIcon);

  let twitterProfile = document.createElement("a");
  twitterProfile.setAttribute("href", "https://twitter.com/cdnhacker1");
  twitterProfile.setAttribute("target", "_blank");

  let twitterProfileIcon = document.createElement("i");
  twitterProfileIcon.setAttribute("class", "fab fa-twitter");
  twitterProfile.appendChild(twitterProfileIcon);

  let githubProfile = document.createElement("a");
  githubProfile.setAttribute("href", "https://github.com/Softcorp-Industries");
  githubProfile.setAttribute("target", "_blank");

  let githubProfileIcon = document.createElement("i");
  githubProfileIcon.setAttribute("class", "fab fa-github");
  githubProfile.appendChild(githubProfileIcon);

  let personal_email = document.createElement("a");
  personal_email.setAttribute("href", "mailto:clark_griswald@outlook.com");
  personal_email.setAttribute("title", "Personal Email");
  mediaLink.appendChild(personal_email);

  let personal_envelope = document.createElement("i");
  personal_envelope.setAttribute("class", "far fa-envelope")
  personal_email.appendChild(personal_envelope);

  mediaLink.appendChild(fbProfile);
  mediaLink.appendChild(linkedinProfile);
  mediaLink.appendChild(twitterProfile);
  mediaLink.appendChild(githubProfile);
  mediaLink.appendChild(personal_email);
}

Create_DOM_BusinessProfiles();
Create_DOM_Location();
Create_DOM_MediaLink();

//  Creates the Footer
function Create_DOM_Footer() {
  let footer = document.createElement("footer");
  footer.setAttribute("id","footer");

  let footerName = document.createElement("p");
  footerName.innerHTML = "Christopher T. Guy <span style=\"color:#BA0000\"> O/A </span> Softcorp Industries";

  let footerCopy = document.createElement("p");
  footerCopy.appendChild(document.createTextNode("Copyright 2021"));

  footer.appendChild(footerName);
  footer.appendChild(footerCopy);
  Contact_DOM.appendChild(footer);
}
Create_DOM_Footer();


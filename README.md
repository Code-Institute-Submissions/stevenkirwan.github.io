# Code Institute Stream 1 Band Project


#### Technologies used

###### Wireframes
I built out some wireframes using balsamiq I found this to be very useful process as it was easy to make changes and get the layout and content right before any code was written. 

###### HTML
I tried to use as much semantic HTML5 as possible including nav, section, footer, figure, figcaption. I didn't want to stuff the site with it if it wasn't needed. 

###### CSS (SASS)

I used SASS for my CSS I find keeps a projects code nice and tidy and helps stop the stylesheets getting out of control it can also make it easier for other developers to jump straight into a project and start work with minimal guidance. I also leveraged the power of bourbon a SASS mixin library which helps keep things even cleaner. 

###### JavaScript
The website is a single page application using AngularJS as the framework. The site is split up into multiple view and uses the power of angular **routing** to display/hide a view based on the users selection. There is a single json file that pulls most of the content of the site which cuts down on the amount of repeated  HTML a lot of this is pulled into the site using a **http** request and displayed using **ng-repeat**. Other features of angular I used were **filter** on the gigs page which filters through data laid out in table format based on location. I used a **custom directive** for the header and footer of the site.

#### Overview
Finished site can be view [here]: https://stevenkirwan.github.io/#/
 The aim of this project was to build a website for a band using
 * semantic HTML5 markup
 * AngularJS as the framework
    *  Use Angular routing to enable navigation.
    * Incorporate at least 1 service and 1 directive.
 * Bootstrap or flexbox for main navigation and grid layout
 * form validation on at least one page
 * CSS for styling
 
Based on the brief I was required to build a site for a ‘Swing/Jive’ band. I wanted the site to look great as well as function well so I sourced some royalty free images and content from a friend who’s in a metal band so the band genre changed slightly along the way. I stuck to all other requirements in the brief. I’ve outlined some of the brief below. 

> The band requires a web site to showcase their music and publicise their availability for gigs. They would like to target the corporate and wedding market as their primary target audience. They also want the website to be a site their fans can visit to see and hear clips from their back catalogue and any new material as it becomes available.

The user is greeted with two clear call to actions when the site is loaded book us or new music. I felt this worked as outlined in the brief was the site was for potential clients and fans so straight way both have a choice of which path they want to go down. 

If a user stays on the home page they have the opportunity to learn more about the band with some clear call to actions 

##### About the band
A brief description about the band with a clear call to action. 

**Potential client/Fan**  –  chance for both users to learn more about the band and read on if they wish. 
##### Band Members 
**Potential client** – can view how many members are in the band if they need to get numbers for venue/stage size 
**Fan** – Can view image of band members and click their favourite member to read more about them.
##### Upcoming shows
**Potential client** – Can view availability of band.  
**Fan** –  Can see when the band play near them next.
I contemplated putting some form of call to action here to view all gigs but with the buy tickets button I thought it would be too much. 

> The band are recording an audio clip that they would like to showcase on the new website. They have a number of audio clips that they can make available and would like to showcase on their web site.

##### Latest Releases
**Potential client/Fan** –  Again this section would target both potential client and fan and audio was something the band wanted to showcase.
##### Book Us
A nice clear call to action for the Potential client. 
##### Footer
Social media and newsletter sign was added to the footer of each page so as no matter which page the user was on these options would be available to them. 

> Users should be able to subscribe to a newsletter of the band’s latest information. They are in the process of creating a social media presence and would like links to Facebook, Twitter and YouTube pages. They intend to set up a channel in YouTube of videos they have recorded.

##### Other requirements
A dedicated gigs page was created with the option to search by location.

> They would also like to publicise upcoming gigs in the future.

Contact page was added with a form and all contact details of the band. 

> They would also like users to be able to contact them with potential work related leads. 

## Installation
 To install and run site locally. 
 * Clone repo
 * From command line run npm install in root of project directory
 * To launch site run gulp watch in command line









 
